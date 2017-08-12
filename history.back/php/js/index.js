/**
 * 
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-08-05 18:10:22
 * @version $Id$
 */

(function(window, $, undefined) {
    function init() {
        bindEvent();

        if(!history.state) {
            var href  = window.location.href,
                index = href.indexOf('#page::'),
                _url = (index != -1 ? href.substr(0, index ) : href ) + '#page::1';

            window.history.replaceState({
                title: 'replace'
            }, '', _url);

            setSessionStorage(_url, $('.ulist').html())

            return;
        }
    }


    /**
     * [bindEvent 绑定事件]
     * @return {[type]} [description]
     */
    function bindEvent() {
        $('#btn-next-page').on('click', function() {
            var $this = $(this),
                num = $this.attr('data-page'),
                posturl = './result.php?page=' + num;
                
            var _url = window.location.href.replace(/(.*#page::)\d+/g, function(arr,r1) {
                return r1 + num;
            });

            $.ajax({
                url: posturl,
                success: function(data) {
                    appendResult('.ulist', data);

                    window.history.pushState({title: 'pushState'}, '', _url);

                    $this.attr('data-page', parseInt(num) + 1 );

                    setSessionStorage(_url, data);
                },
                error: function() {
                    console.log('fail');
                },
                complete: function() {
                    console.log('complete');
                }
            });
        });

        // clear localStorage
        $('#btn-clear').on('click', function() {
            window.sessionStorage.clear();
        })

        // anchor click
        $('.ulist').on('click', '.result', function(ev) {
            var $this = $(this),
            index = $('.result').index($this);

            var $a = $(ev.target).closest('a'),
                href;

            $('.suggest').hide();

            if($a.length) {
                $a.closest('.result').find('.suggest').show();
                setSessionStorage('__index__', index + 1);
            }
        });

        $(window).on('popstate', function(e) {
            if(e.state) {
                updateList();
            }
        })
    }

    function appendResult(container, data) {
        var scripts = findAll($(data), 'script[src]').remove();

        executeScriptTags(scripts);
        $(container).append(data);
    }

    /**
     * [updateList 更新列表]
     * @return {[type]} [description]
     */
    function updateList() {
        // 取页码
        var results = /(.*#page::)(\d+)/g.exec(window.location.href);

        if(!results) return;

        var local = results[1] ;
        var page =  results[2] ;

        // 更新nextpage
        $('#btn-next-page').data('page', parseInt(page) + 1);

        var html = [];

        for(var i = 1; i <= page; i++) {
            html.push(getSessionStorage(local + i) || '');
        }

        if(html.join('').length) {
            appendResult('.ulist', html.join('\n'));
        }

        getSessionStorage('__index__')  && $('.result').eq(getSessionStorage('__index__') - 1).find('.suggest').show();
    }

    /**
     * [setSessionStorage 保持数据]
     */
    function setSessionStorage(key, value) {
        window.sessionStorage.setItem(key, value);
    }

    /**
     * [getSessionStorage 读取数据]
     * @return {[type]} [description]
     */
    function getSessionStorage(key) {
        return window.sessionStorage.getItem(key);
    }

    /**
     * [findAll 过滤元素]
     * @param  {[type]} elems    [description]
     * @param  {[type]} selector [description]
     * @return {[type]}          [description]
     */
    function findAll(elems, selector) {
        return elems.filter(selector).add(elems.find(selector));
    }

    /**
     * [executeScriptTags 重新执行script[src]脚本]
     * @param  {[type]} scripts [description]
     * @return {[type]}         [description]
     */
    function executeScriptTags(scripts) {
        if (!scripts) return;

        var existingScripts = $('script[src]')

        scripts.each(function() {
            var src = this.src,
                matchedScripts = existingScripts.filter(function() {
                    return this.src === src
                }),
                script;

            if (matchedScripts.length) return;

            script = document.createElement('script');
            script.type = $(this).attr('type') || 'text/javascript';
            script.src = $(this).attr('src');

            document.head.appendChild(script);
        });
    }
    // init 
    init();
})(window, Zepto);