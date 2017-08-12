/**
 * @author Huang Bingcheng
 * @date 2016/12/13 16:27
 * @description 网页搜索首页及结果页语音输入功能
 */

(function(root, factory) {

    // sogou版requirejs
    if(typeof define === 'function') {
        define('', ['$'], factory);
    } else {
        factory(root.jQuery);
    }
})(this, function($) {
    var body = $('body'),
        voiceLayer,

        // 结果页无oldQuery变量
        isIndexPage = typeof window.oldQuery === 'undefined',

        searchInputId = isIndexPage ? '#query' : '#upquery',
        searchFormId = isIndexPage ? '#sf' : '#searchForm',

        // 语音历史记录
        voiceHistories = [],

        // 每次录音的开始时间
        voiceStartTime,

        // 语音识别接口
        VOICE_API = 'https://opentest.speech.sogou.com/index.ks?type=utf-8&imei_no={{SUV}}&starttime=',

        // 语音输入超时时间，毫秒
        SPEAK_TIMEOUT = 2000,

        // 请求语音识别接口频率，间隔500ms请求一次
        REQUEST_FREQUENCY = 300,

        // 录音实例
        recorder;

    /**
     * 检测是否支持语音输入
     * @returns {boolean}
     */
    function suppot() {
        navigator.mediaDevices = navigator.mediaDevices ? navigator.mediaDevices : {};
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

        return !!(navigator.mediaDevices.getUserMedia && navigator.getUserMedia && window.AudioContext);
    }

    /**
     * 获取cookie
     * @param key
     * @returns {string}
     */
    function getCookie(key) {
        var startIndex, endIndex;

        if (document.cookie.length > 0) {
            startIndex = document.cookie.indexOf(key + '=');
            if (startIndex != -1) {
                startIndex = startIndex + key.length + 1;
                endIndex = document.cookie.indexOf(';', startIndex);
                if (endIndex == -1) {
                    endIndex = document.cookie.length;
                }
                return decodeURI(document.cookie.substring(startIndex, endIndex));
            }
        }

        return '';
    }

    /**
     * 录音对象
     * @param requestFrequency  请求语音识别接口频率，每次请求间隔的时间毫秒
     * @constructor
     */
    function Recorder(requestFrequency) {
        this.requestFrequency = requestFrequency || 300;
        this.channel = [];
        this.recordingLen = 0;
        this.recording = false;
        this.timer = null;
    }

    Recorder.prototype = {
        /**
         * 重置属性为初始值
         */
        reset: function() {
            this.channel = [];
            this.recordingLen = 0;
        },

        /**
         * 获取录音权限
         */
        empower: function() {
            var me = this;

            navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

            // 语音许可权限判断
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({
                    audio: true
                })
                    .then(function(mediaStream) {
                        me.success.call(me, mediaStream);
                    })
                    .catch(function(error) {
                        me.error.call(me, error)
                    })
            }else if (navigator.getUserMedia) {
                navigator.getUserMedia({
                    audio: true
                }, function(mediaStream) {
                    me.success.call(me, mediaStream);
                }, function(error) {
                    me.error.call(me, error);
                })
            } else {
                alert('getUserMedia not supported in this browser');
            }
        },

        /**
         * 授权成功回调函数
         * @param mediaStream
         */
        success: function(mediaStream) {
            var that = this,
                context,
                audioNode,
                scriptNode,
                bufferSize = 2048;


            // creates the audio context
            try{
                context = new (window.AudioContext || window.webkitAudioContext)();
            }catch(e) {
                alert('浏览器不支持AudioContext');
            }

            // we query the context sample rate (varies depending on platforms)
            this.sampleRate = context.sampleRate;

            // creates an audio node from the microphone incoming stream
            audioNode = context.createMediaStreamSource(mediaStream);

            // Create a ScriptProcessorNode with a bufferSize of 2048 and 1 inputs and 1 output channels
            scriptNode = context.createScriptProcessor(bufferSize, 1, 1);

            // we connect the scriptNode
            audioNode.connect(scriptNode);

            // Give the node a function to process audio events
            scriptNode.onaudioprocess = function(e) {
                if (!that.recording) return;

                var left = e.inputBuffer.getChannelData(0);
                // we clone the samples
                that.channel.push(new Float32Array(left));
                that.recordingLen += bufferSize;
            };

            scriptNode.connect(context.destination);
        },

        /**
         * 授权失败回调函数
         * @param error
         */
        error: function(error) {

        },

        mergeBuffers: function (channelBuffer, recordingLength) {
            var result = new Float32Array(recordingLength);
            var offset = 0;
            var lng = channelBuffer.length;
            for (var i = 0; i < lng; i++) {
                var buffer = channelBuffer[i];
                result.set(buffer, offset);
                offset += buffer.length;
            }
            return result;
        },

        /**
         * 转换采样率
         * @param buffer
         * @param rate      目标新采样率
         * @param curRate   当前采样率
         * @returns {*}
         */
        downsampleBuffer: function (buffer, rate, curRate) {
            if (rate == curRate) {
                return buffer;
            }

            if (rate > curRate) {
                throw "目标采样率必须小于当前采样率";
            }

            var sampleRateRatio = curRate / rate,
                newLength = Math.round(buffer.length / sampleRateRatio),
                result = new Float32Array(newLength),
                offsetResult = 0,
                offsetBuffer = 0;

            while (offsetResult < result.length) {
                var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio),
                    i = offsetBuffer,
                    accum = 0,
                    count = 0;

                for (; i < nextOffsetBuffer && i < buffer.length; i++) {
                    accum += buffer[i];
                    count++;
                }

                result[offsetResult] = accum / count;
                offsetResult++;
                offsetBuffer = nextOffsetBuffer;
            }

            return result;
        },

        writeUTFBytes: function (view, offset, string) {
            var lng = string.length;
            for (var i = 0; i < lng; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        },

        floatTo16BitPCM: function (output, offset, input) {
            for (var i = 0; i < input.length; i++, offset += 2) {
                var s = Math.max(-1, Math.min(1, input[i]));
                output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        },

        /**
         * 编码音频为wav格式
         * @returns {Blob|*}
         */
        encodeWav: function() {
            var result,
                CHANNEL_NUM = 1, // 声道数
                POINT_SIZE = 16,    // 采样点大小
                FREQUENCY = 16000, // 采样率
                BLOCK_SIZE = CHANNEL_NUM * POINT_SIZE / 8, // 采样块大小 = 声道数 * 采样点 / 8bit
                audioData = this.downsampleBuffer(this.mergeBuffers(this.channel, this.recordingLen), FREQUENCY, this.sampleRate),
                buffer = new ArrayBuffer(44 + audioData.length * 2),
                view = new DataView(buffer);

            // 参考 https://www.web-tinker.com/article/20488.html

            // 资源交换文件标识符RIFF
            this.writeUTFBytes(view, 0, 'RIFF');

            // 总长度
            view.setUint32(4, 44 + audioData.length * 2, true);

            // WAV文件标志
            this.writeUTFBytes(view, 8, 'WAVE');

            // 波形格式标志 FMT
            this.writeUTFBytes(view, 12, 'fmt ');

            // WAV头大小
            view.setUint32(16, 16, true);

            // 编码方式 PCM
            view.setUint16(20, 1, true);

            // 声道数量
            view.setUint16(22, CHANNEL_NUM, true);

            // 采样频率
            view.setUint32(24, FREQUENCY, true);

            // 每秒字节数
            view.setUint32(28, FREQUENCY * 4, true);

            // 采样块大小
            view.setUint16(32, BLOCK_SIZE, true);

            // 采样点大小
            view.setUint16(34, 16, true);

            // 数据标识符
            this.writeUTFBytes(view, 36, 'data');

            // 数据长度
            view.setUint32(40, audioData.length * 2, true);

            // 写入PCM方式采样数据
            this.floatTo16BitPCM(view, 44, audioData);

            result = new Blob([view], {
                type: 'audio/wav'
            });

            return result;
        },

        /**
         * 录音开始
         */
        start: function() {
            var that = this;
            // 授权语音输入
            this.empower();

            this.recording = true;

            // 每400ms获取一次识别文本
            this.timer = setInterval(function() {
                getVoiceText(that.encodeWav());
            }, this.requestFrequency);
        },

        /**
         * 录音结束
         */
        stop: function() {
            this.recording = false;

            clearInterval(this.timer);
            this.reset();
        }
    };

    /**
     * 设置当前界面状态样式
     * @param status {string} 状态名
     */
    function setUiStatus(status) {
        var config = {
                // 初始值
                initial: {
                    className: 'round on',
                    text: '想搜什么，说来听听！'
                },
                // 转换中
                translating: {
                    className: 'round load'
                },
                // 获取录音权限失败
                forbidden: {
                    className: 'round err',
                    text: '语音搜索功能已关闭。'
                },
                // 识别失败
                fail: {
                    className: 'round err',
                    text: '不太了解您的意思，<a href="javascript:void(0);" id="voice-retry">点击重试</a>'
                }
            },
            voiceText = $('#voice-text'),
            microphone = $('#voice-microphone'),
            ring = $('#voice-ring');

        switch(status) {
            case 'translating':
                microphone.attr('class', config.translating.className);
                // ring.attr('style', '');
                break;
            case 'forbidden':
                microphone.attr('class', config.forbidden.className);
                voiceText.html(config.forbidden.text);
                // ring.attr('style', '');
                break;
            case 'fail':
                microphone.attr('class', config.fail.className);
                voiceText.html(config.fail.text);
                // ring.attr('style', '');
                break;
            default:
                microphone.attr('class', config.initial.className);
                voiceText.html(config.initial.text);
                // ring.css('animationDelay', 0.8);
        }
    }

    /**
     * 检测在SPEAK_TIMEOUT时间中是否有新语音输入
     * @param message
     * @returns {boolean}
     */
    function hasVoiceInput(message) {
        voiceHistories.push(message);


        if(voiceHistories.length > SPEAK_TIMEOUT / REQUEST_FREQUENCY) {
            voiceHistories.shift();
        } else {
            return true;
        }

        for(var i = 1, len = voiceHistories.length; i < len; i++) {
            if(voiceHistories[i] !== voiceHistories[i-1]) {
                return true;
            }
        }

        return false;
    }

    function getVoiceTextSuccess(data) {
        // 数字0成功，1失败
        if(data.status === 0) {

            if(data.message !== '') {
                // 显示识别后文本
                $('#voice-text').html(data.message);

                // 将文本扔给搜索框
                $(searchInputId).val(data.message);

                if(!hasVoiceInput(data.message)){
                    stop();
                    setUiStatus('translating');

                    // 延迟1s提交，为了让translating动画飞一会~~~
                    setTimeout(function() {
                        $(searchFormId).submit();
                    }, 1000);
                }
            } else {
                // 2秒无语音输入则判断为没说话
                if(!hasVoiceInput(data.message)) {
                    setUiStatus('fail');
                    stop();
                } else {

                }
            }
        } else {
            setUiStatus('fail');
            stop();
        }
    }

    function getVoiceTextError() {
        setUiStatus('fail');
        stop();
    }

    function getVoiceText(audio) {
        // 转换失败
        if(new Date().getTime() - voiceStartTime > 2000 && !voiceHistories.length) {
            setUiStatus('fail');
            stop();
        }

        $.ajax({
            url: VOICE_API.replace('{{SUV}}', getCookie('SUV')) + new Date().getTime(),
            type: 'post',
            cache: false,
            dataType: 'json',
            data: audio,
            contentType: 'multipart/form-data',
            processData: false,
            success: getVoiceTextSuccess,
            error: getVoiceTextError
        });
    }

    function stop() {
        recorder.stop();
        voiceHistories = [];
    }
    /**
     * 创建语音浮层
     */
    function createVoiceLayer() {
        if(voiceLayer && voiceLayer.length) {
            voiceLayer.show();
            return;
        }

        var resultHtml = '' +
                '<div class="yuyin-box" id="voice-layer">' +
                '    <table>' +
                '    <tbody><tr>' +
                '        <th><span id="voice-text">想搜什么，大声说出来</span></th>' +
                '        <td>' +
                '            <div class="round" id="voice-microphone">' +
                '                <span class="s1"></span>' +
                '                <span class="s1" id="voice-ring" style="animation-delay:0.8s"></span>' +
                '                <span class="s2">' +
                '                    <span class="s3" style="height:0"></span><span class="s4"></span>' +
                '                    <i></i>' +
                '                </span>' +
                '            </div>' +
                '        </td>' +
                '    </tr>' +
                '    </tbody></table>' +
                '    <a href="javascript:void(0);" id="voice-close" class="yuyin-close"></a>' +
                '</div>',
            indexHtml = '<div class="index-yuyin-box" id="voice-layer" style=" z-index:99999999">' + resultHtml + '</div>';

        // 结果页才有oldQuery变量
        if(isIndexPage) {
            body.append(indexHtml);
        } else {
            body.append(resultHtml);
        }

        voiceLayer = $('#voice-layer');

        $('#voice-close').on('click', function() {
            stop();
            removeVoiceLayer();
            setUiStatus();
        });

        $('#voice-microphone').on('click', function() {
            if($(this).hasClass('on')) {
                $(searchFormId).submit();
            }
        });

        voiceLayer.on('click', '#voice-retry', function() {
            setUiStatus();
            recorder.start();
            voiceStartTime = new Date().getTime();
        });
    }

    /**
     * 移除语音浮层
     */
    function removeVoiceLayer() {
        voiceLayer.hide();
    }

    function init() {
        var voiceBtn = $('<a href="javascript:void(0);" id="voice-btn" class="fayin"></a>'),
            css = $('<link rel="stylesheet" type="text/css" href="/web/css/' + (isIndexPage ? 'yuyin' : 'yuyin_result') + '.css">');

        recorder = new Recorder(REQUEST_FREQUENCY);

        recorder.error = function(error) {
            setUiStatus('forbidden');
            console.dir(error);
        };

        $('head').append(css);

        if(isIndexPage) {
            $('#search-box').append(voiceBtn);
        } else {
            $('#top_qreset').after(voiceBtn);
        }

        $('#voice-btn').on('click', function() {
            createVoiceLayer();
            recorder.start();
            voiceStartTime = new Date().getTime();
        });
    }

    if(suppot()) {
        init();
    }
});