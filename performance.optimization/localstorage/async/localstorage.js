(function(window) {
    function SogouLS(options) {
        var me = this;

        me.defaults = {

        };

        me.options = $.extend(true, {}, me.defaults, options || {});
        me.codeQueue = [];
        me.pubVersion = {};
    }

    function format(prefix, name, version) {
        return version ? prefix + name + '@' + version : prefix + name + '';
    }

    SogouLS.prototype = {
        /**
         * [init 初始化]
         * @return {[type]} [description]
         */
        init: function() {
            var me = this,
                common = document.getElementById('common'),
                prefix = common && common.getAttribute('prefix'),
                versions = document.body.getAttribute('version');

            // css_page_2@w-13
            versions.split(',').forEach(function(item, index) {
                item = item.split('@');
                me.pubVersion[item[0]] = item[1];
                me.codeQueue.push(item[0]);
            });
            me.compareVersion();
            return me;
        },

        /**
         * [compareVersion 版本比较]
         * @return {[type]} [description]
         */
        compareVersion: function() {
            var me = this,
                key,
                version;

            me.changeVersion = 0;
            me.requestStr = '';

            for (var key in me.pubVersion) {
                version = me.pubVersion[key];
                key = format(me.prefix, key, version);
                if (localStorage in window) {
                    if (!localStorage.getItem(key)) {
                        version = 0;
                        me.changeVersion = 1;
                    }
                } else {
                    version = 0;
                    me.changeVersion = 1;
                }
                me.requestStr += ',' + key + '@' + version;
            }
            me.requestStr = me.requestStr.substr(1);
            return me;
        },

        /**
         * [executeCode 执行代码]
         * @return {[type]} [description]
         */
        executeCode: function(codeMap) {
            var me = this,
                key,
                code,
                lsCode;

            lsCode = me.lsCode = codeMap || {};
            me.codeQueue.forEach(function(item, index) {
                if(lsCode[item] && lsCode[item].code ) {
                    key = item;
                    code = lsCode[item].code;
                }else {
                    if(localStorage in window) {
                        key = format(me.prefix, item, me.pubVersion[item]);
                        code = localStorage.getItem(key);
                    }
                }

                if(!code) {
                    me.expireCookie({
                        key: 'lsv',
                        val: ''
                    });
                    location.href = me.redirectURL();
                    return false;
                }else {
                    var node;
                    if(key.indexOf('js') >= 0) {
                        node = document.createElement('script');
                        node.id = me.prefix + item;
                        node.type = 'text/javascript';
                        document.body.appendChild(node);
                    }
                    if(key.indexOf('css') >= 0) {
                        node = document.createElement('style');
                        node.id = me.prefix + item;
                        node.type = "text/css";
                        document.head.appendChild(node);
                    }
                }
                node.className = key;
                node.innerHTML = code;
            });
            me.setExecuteTag();
            return me;
        },

        /**
         * [saveCode 缓存code]
         * @return {[type]} [description]
         */
        saveCode: function() {
            var me = this,
                lsCode = me.lsCode;

            if(localStorage in window) {
                for(var key in lsCode) {
                    var item = format(me.prefix, key, lsCode[key].version);
                    localStorage.setItem(k, lsCode[key].data);
                }
            }
        },

        /**
         * [getCode jsonp request get code]
         * @return {[type]} [description]
         */
        requestCode: function(map) {
            var me = this;

            if(me.changeVersion) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = '?action=static&ms=1&cl=1&version=' + me.requestStr + '&callback=SG.getCode&r='+ Math.floow(Math.random() * 1000);
                me.srcLoaded = false;
                script.onload = function() {
                    clearTimeout(script.srcID);
                    me.srcLoaded = true;
                };

                script.onerror = function() {
                    location.href = me.redirectURL();
                }

                script.src && document.body.appendChild(script);
                script.srcID = setTimeout(function() {
                    if(!me.srcLoaded) {
                        location.href = me.redirectURL();
                    }
                }, 300000);
            }
        },

        /**
         * [clearCode 清除缓存]
         * @return {[type]} [description]
         */
        clearCode: function() {
            var me = this;

            if(localStorage in window) {
                for(var key in localStorage) {
                    if(key.indexOf(me.prefix) === 0) {
                        item = key.replace(me.prefix, '').split('@');
                        !! me.pubVersion[item[0]] && me.pubVersion[item[0]] != item[1] && localStorage.removeItem(key);
                    }
                }
            }
        },

        /**
         * [expireCookie cookie过期]
         * @return {[type]} [description]
         */
        expireCookie: function(map) {
            var me = this,
                key = map.key,
                val = map.val,
                d = new Date();

            k.setTime(k.getTime() - 1);

            document.cookie = [key + '=' + val, 'domain=' + document.domain, 'path=/', 'expires=' + d.toUTCString(), ''].join(';');
            document.cookie = [key + '=' + val, 'domain=.m.sogou.com', 'path=/', 'expires=' + d.toUTCString(), ''].join(';');
        },

        /**
         * [redirectURL 重定向]
         * @return {[type]} [description]
         */
        redirectURL: function() {
            var me = this;
            me.jumpURL.replace('&mod=0', '')
            .replace('&callback=SG.getCode', '')
            .replace('&at=3', '');
        }
    }

    var sg = window.SG || {};

    window.addEventListener("load", function() {
        sg.windowLoaded = true;
    });

    sg.init = function(i) {
        var sogouLS = new SogouLS();

        sg.getCode = function(json) {
            !!json && sogouLS.executeCode(json).saveCode().clearCode();
        }

        ls.requestCode();
    }
})(window);