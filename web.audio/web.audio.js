/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-12-20 15:20:26
 * @version $Id$
 */

(function(global, undefined) {
	function Recorder() {
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
		} else if (navigator.getUserMedia) {
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

		me.leftchannel = [];
		me.rightchannel = [];
		me.recordingLen = 0;
		me.recording = false;
	}

	Recorder.prototype = {
		/**
		 * [success description]
		 * @param  {[type]} mediaStream [description]
		 * @return {[type]}             [description]
		 */
		success: function(mediaStream) {
			var me = this;
			var context,
				sampleRate,
				gainNode,
				audioNode,
				scriptNode,
				bufferSize = 2048;


			// creates the audio context
			try {
				context = new(window.AudioContext || window.webkitAudioContext)();
			} catch (e) {
				alert('浏览器不支持AudioContext');
			}

			// we query the context sample rate (varies depending on platforms)
			sampleRate = me.sampleRate = context.sampleRate;

			// 创建增益节点
			gainNode = context.createGain();

			// creates an audio node from the microphone incoming stream
			audioNode = context.createMediaStreamSource(mediaStream);

			// connect the stream to the gain node
			audioNode.connect(gainNode);

			// Create a ScriptProcessorNode with a bufferSize of 2048 and two inputs and two output channels
			scriptNode = context.createScriptProcessor(bufferSize, 2, 2);

			// Give the node a function to process audio events
			scriptNode.onaudioprocess = function(e) {
				if (!me.recording) return;

				var left = e.inputBuffer.getChannelData(0);
				var right = e.inputBuffer.getChannelData(1);
				// we clone the samples
				me.leftchannel.push(new Float32Array(left));
				me.rightchannel.push(new Float32Array(right));
				me.recordingLen += bufferSize;
			}

			// we connect the scriptNode
			gainNode.connect(scriptNode);
			scriptNode.connect(context.destination);
		},

		/**
		 * [error description]
		 * @return {[type]} [description]
		 */
		error: function(error) {
			/**
			 * errorTypeList
			 */
			console.log(error, error.name);
		},

		/**
		 * [createWavFile 生成 wav file]
		 * @return {[type]} [description]
		 */
		createWavFile: function() {
			var leftchannel = this.leftchannel,
				rightchannel = this.rightchannel;

			// we flat the left and right channels down
			var leftBuffer = mergeBuffers(leftchannel, this.recordingLen);
			var rightBuffer = mergeBuffers(rightchannel, this.recordingLen);

			// we interleave both channels together
			var interleaved = interleave(leftBuffer, rightBuffer);

			// we create our wav file
			var buffer = new ArrayBuffer(44 + interleaved.length * 2);
			var view = new DataView(buffer);

			// RIFF chunk descriptor
			writeUTFBytes(view, 0, 'RIFF');
			view.setUint32(4, 44 + interleaved.length * 2, true);
			writeUTFBytes(view, 8, 'WAVE');

			// FMT sub-chunk
			writeUTFBytes(view, 12, 'fmt ');
			view.setUint32(16, 16, true);
			view.setUint16(20, 1, true);

			// stereo (2 channels)
			view.setUint16(22, 2, true);
			view.setUint32(24, this.sampleRate, true);
			view.setUint32(28, this.sampleRate * 4, true);
			view.setUint16(32, 4, true);
			view.setUint16(34, 16, true);

			// data sub-chunk
			writeUTFBytes(view, 36, 'data');
			view.setUint32(40, interleaved.length * 2, true);

			// write the PCM samples
			var lng = interleaved.length;
			var index = 44;
			var volume = 1;
			for (var i = 0; i < lng; i++) {
				view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
				index += 2;
			}

			// our final binary blob
			var blob = new Blob([view], {
				type: 'audio/wav'
			});

			// let's save it locally
			//outputElement.innerHTML = 'Handing off the file now...';
			var url = this.url = (window.URL || window.webkitURL).createObjectURL(blob);

			this.createAudio();
			this.createDownload();

			function interleave(leftChannel, rightChannel) {
				var length = leftChannel.length + rightChannel.length;
				var result = new Float32Array(length);

				var inputIndex = 0;

				for (var index = 0; index < length;) {
					result[index++] = leftChannel[inputIndex];
					result[index++] = rightChannel[inputIndex];
					inputIndex++;
				}
				return result;
			}

			function mergeBuffers(channelBuffer, recordingLength) {
				var result = new Float32Array(recordingLength);
				var offset = 0;
				var lng = channelBuffer.length;
				for (var i = 0; i < lng; i++) {
					var buffer = channelBuffer[i];
					result.set(buffer, offset);
					offset += buffer.length;
				}
				return result;
			}

			function writeUTFBytes(view, offset, string) {
				var lng = string.length;
				for (var i = 0; i < lng; i++) {
					view.setUint8(offset + i, string.charCodeAt(i));
				}
			}
		},

		/**
		 * [createAudio description]
		 * @return {[type]} [description]
		 */
		createAudio: function() {
			var url = this.url;
			var audio = document.getElementById('audio-autoplay');
			if (audio) {
				document.body.removeChild(audio);
			} else {
				audio = document.createElement('audio');
				audio.id = 'audio-autoplay';
				audio.src = url;
				audio.autoplay = true;
				document.body.appendChild(audio);
			}
		},

		/**
		 * [createDownload 生成下载链接]
		 * @return {[type]} [description]
		 */
		createDownload: function() {
			var url = this.url;
			var a = document.getElementById('audio-download');
			if (a) {
				document.body.removeChild(a);
			} else {
				a = document.createElement('a');
				a.id = 'audio-download';
				a.href = url;
				a.innerHTML = 'Audio Download: ' + url;
				document.body.appendChild(a);
			}
		},

		/**
		 * [start 开始]
		 * @return {[type]} [description]
		 */
		start: function() {
			this.recording = true;
		},

		/**
		 * [stop 停止]
		 * @return {[type]} [description]
		 */
		stop: function() {
			this.recording = false;

			this.createWavFile();
		}
	};

	global.Recorder = Recorder;
})(this)