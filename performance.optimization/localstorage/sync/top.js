/* execute code from localstorage */
(function (window, document) {
    var SG = window.SG = window.SG || {},
        LS, Cookie, UIGS, date;

    LS = SG.LS = {
        prefix: 'wapresult',
        support: (function () {
            var support = true;
            try {
                localStorage.setItem('_sg', 1);
                localStorage.removeItem('_sg');
            } catch (e) {
                support = false;
            }
            return support;
        })(),
        split: '-',
        formatkey: function (str) {
            return [this.prefix].concat(str.split('|')).join(this.split)
        }
    };

    Cookie = SG.Cookie = {
        key: 'sglsv',
        support: window.navigator.cookieEnabled,
        set: function (key, value, date, domain) {
            document.cookie = [key + "=" + value, ("domain=" + (domain || ".xxx.com")), "path=/", "expires=" + date.toGMTString()].join(";")
        },

        params: function (obj) {
            var params = [];

            for (key in (obj || {})) {
                params.push(key + '=' + obj[key]);
            }
            return params.join('&');
        }
    };

    UIGS = SG.UIGS = {
        common: {
            uigs_productid: 'wapapp',
            type: 'wap_result',
            stype: 'localstorage',
            uuid: window.TRACEID || ''
        },
        getRand: function () {
            return (+new Date()) + '.r' + Math.floor(Math.random() * 1000);
        },
        reporter: function (params) {
            var me = this,
                common = me.common,
                paramArr = [],
                params = params || {},
                d = "memory_log_" + me.getRand(),
                img = window[d] = new Image();

            img.onload = img.onerror = img.onabort = function () {
                img.onload = img.onerror = img.onabort = null;
                img = window.d = null;
            };
            params['_t'] = me.getRand();

            for (var item in common) {
                !params[item] && (params[item] = common[item]);
            }

            for (var key in params) {
                paramArr.push(key + '=' + params[key]);
            }
            img.src = '//pb.xxx.com/pv.gif?' + paramArr.join('&');
        },

        excute: {
            num: 0,
            time: 0
        }
    };

    function reload(rtype, item) {
        var url = window.location.href,
            num = Cookie.support ? 1 : 0,
            date = new Date();

        UIGS.reporter({
            sp_ck: num,
            sp_ls: LS.support ? 1 : 0,
            rtype: rtype,
            item: item
        });

        num && Cookie.set(Cookie.key, '', date, document.domain);
        url = /reload=\d/g.test(url) ? url.replace(/reload=\d/g, 'reload=' + num) : (url + '&reload=' + num);
        window.location.replace(url);
    }

    function excute_plus(startTime) {
        UIGS.excute.time += Date.now() - startTime;
    }


    window.excute_ls_code = function (id, type) {
        var excute_start_time = Date.now();

        UIGS.excute.num ++;

        if (LS.support) {
            var key = LS.formatkey(id),
                content = localStorage.getItem(key);
            if (content) {
                var elem = document.querySelector('[data-lskey="' + id + '"]');
                if (!elem) return;
                'js' === type ? (function () {
                    var head = document.getElementsByTagName('head')[0],
                        script = document.createElement('script');

                    script.setAttribute('data-lskey', id);
                    script.appendChild(document.createTextNode(content));
                    head.appendChild(script);
                })() : (function () {
                    var head = document.getElementsByTagName('head')[0],
                        style = document.createElement('style');

                    style.type = 'text/css';
                    style.rel = 'stylesheet';
                    style.setAttribute('data-lskey', id);
                    style.appendChild(document.createTextNode(content));
                    head.appendChild(style);
                })();
                excute_plus(excute_start_time);
            } else {
                excute_plus(excute_start_time);
                reload('noitem', id);
            }
        } else {
            excute_plus(excute_start_time);
            reload('nosp');
        }
    }
})(window, document);