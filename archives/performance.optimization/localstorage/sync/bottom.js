/* save code to localstorage */
(function (window, document) {
    var LS = window.SG.LS,
        split = LS.split,
        Cookie = window.SG.Cookie,
        UIGS = window.SG.UIGS,
        forEach = Array.prototype.forEach,
        date = new Date(),
        params = {
            wn_css: 0,
            wl_css: 0,
            rn_css: 0,
            rl_css: 0,
            wn_js: 0,
            wl_js: 0,
            rn_js: 0,
            rl_js: 0
        },
        excute_start_time = Date.now();
    
    if(!LS.support) return;

    forEach.call(document.querySelectorAll('.read-fr-ls, .write-to-ls'), function (item, index) {
        var id = item.getAttribute('data-lskey'),
            type = id.split('|')[1] || 'js',
            className = item.className,
            key = LS.formatkey(id),
            content = '';

        if(/read-fr-ls/.test(className)) {
            content = localStorage.getItem(key);
            params['rn_' + type] ++;
            params['rl_' + type] += content.length;
        }else if(/write-to-ls/.test(className)) {
            content = item.textContent || item.innerText;
            params['wn_' + type] ++;
            params['wl_' + type] += content.length;
            localStorage.setItem(key, content);
        }
    });

    // cookie : [filename]|[type]|[version1]*[version2]-[filename]|[type]|[version1]*[version2]
    var lskey,fileMap = {}, versions = [];
    for (lskey in window.localStorage) {
        var key = lskey.split(split),
            v = key.pop(),
            prefix = key.join(split);

        if(lskey.indexOf(LS.prefix) !== 0) continue;
        if(prefix in fileMap) {
            fileMap[prefix].push(v);
        }else {
            fileMap[prefix] = [v]
        }
    }

    for(var prefix in fileMap) {
        var v = [];
        fileMap[prefix].sort(function(a, b) {
            return b - a;
        }).forEach(function(item, index) {
            if(index < 2) {
                v.push(item);
            }else {
                localStorage.removeItem([prefix,item].join(split));
            }
        })
        versions.push( prefix.split(split).splice(1).concat(v.join('*')).join('|') );
    }

    date.setTime(date.getTime() + 2592e6);
    Cookie.set(Cookie.key, versions.join('-'), date, document.domain);

    // excute_ls_code num
    params.et_n = UIGS.excute.num;
    // excute excute_ls_code function time
    params.et_t = UIGS.excute.time;
    // excute bottom.js code time
    params.et_b = Date.now() - excute_start_time;
    UIGS.reporter(params);
    
    var url = window.location.href;
    /reload=\d/g.test(url) && window.history.replaceState(null, document.title, url.replace(/&?reload=\d/g, ''))
})(window, document);
