## M 端结果页 AJAX 分页及后退状态保持
1. 如果浏览器支持bfcache 及 page cache，充分利用缓存
2. 如果不支持，使用 replaceState 添加 hash ，使用 sessionStorage 存储下 Ajax 分页数据。
``` javascript
window.sessionStorage.setItem(url, (window.sessionStorage.getItem(url || '') + ajaxData );
```

3. 监听popstate事件，待浏览器后退时触发，进行 Ajax 分页 DOM 初始化
``` javascript
// 绑定state监听，更新DOM
$(window).on('popstate', function(e) {
    if(e.state) {
        updateResults();
    }
});
```

> 细节性问题：分页时当前位置的回滚及 `$('selector').html()` 时注意脚本的execute

``` javascript
/**
 + [executeScriptTags 重新执行script[src]脚本]
 + @param  {[type]} scripts [description]
 + @return {[type]}         [description]
 */
function executeScriptTags(scripts) {
    if (!scripts) return;

    var existingScripts = $('script[src]');

    scripts.each(function() {
        var src = this.src,
            matchedScripts = existingScripts.filter(function() {
                return this.src === src;
            }),
            script;

        if (matchedScripts.length) return;

        script = document.createElement('script');
        script.type = $(this).attr('type') || 'text/javascript';
        script.src = $(this).attr('src');

        document.head.appendChild(script);
    });
}
````

## M 端浏览器后退页面刷新方案
* PC 端
在服务器配置相应 Response Header
* M 端
IOS 和 Android 不同设备不同浏览器支持情况各异

``` javascript
if('onpagehide' in window) {
    // 监听pagehide event, 做如下处理

    $(window).on("pagehide", function(){
        var $body = $(document.body);
        $body.children().remove();
        window.setTimeout(function() {
            $body.append('<script type="text/javascript">alert("pagehide");window.location.reload(true);<\/script>');
        }, 0);
    });
} else  {
    // 不支持pagehide，服务器端重新生成HTML，采用如下方案处理
    <jsp:useBean id="now" class="java.util.Date" />
    <input type="hidden" id="severTime" value="${now.getTime()}"/>
    <script>
    //访问页面是，将服务器端version进行本地存储
    var serverTime = document.getElementById('serverTime')
    var remote_version = serverTime && serverTime.value
    if(remote_version){
        var local_version = 'sessionStorage' in window && window.sessionStorage.getItem('__pageVersion__');
        if(local_version && parseInt(local_version) >= parseInt(remote_version)){
            //说明html是从本地缓存中读取的
            location.reload(true);
        }else{
            //说明html是从server端重新生成的，更新LOCAL_VER
            window.sessionStorage.setItem('__pageVersion__', remote_version) = REMOTE_VER;
        }
    }
    </script>
}
```

## 相关知识点
* pageshow / pagehide
* sessionStorage / localStorage
* replaceState / pushState / popstate
* ajax

## 部分机型测试
|机型      |自带浏览器      |百度浏览器    |QQ浏览器   |UC浏览器|
|----------|----------------|--------------|-----------|--------|
|小米4     |缓存            |缓存          |缓存       |不缓存  |
|iphone6   |缓存            |缓存          |缓存       |不缓存  |
|三星      |不缓存          |缓存          |缓存       |不缓存  |


## 相关资料
* [HTML5 history API实践](http://www.cnblogs.com/lvdabao/p/%E5%8F%A6%E4%B8%80%E7%AF%87%E9%9A%8F%E7%AC%94.html)
* [Using the HTML5 History API](https://css-tricks.com/using-the-html5-history-api/)
* [pjax](https://github.com/defunkt/jquery-pjax)
* [history](https://github.com/browserstate/history.js)
* [H5浏览器和webview后退刷新方案](http://hzxiaosheng.bitbucket.org/work/2015/09/23/refresh-webpage-on-history-back-for-mobile-browser-and-webview.html)
* [Solutions to 5 Common Ajax Problems](http://www.webdesignerdepot.com/2009/12/solutions-to-5-common-ajax-problems/)
* [Forcing mobile Safari to re-evaluate the cached page when user presses back button](http://stackoverflow.com/questions/24524248/forcing-mobile-safari-to-re-evaluate-the-cached-page-when-user-presses-back-butt/24524249#24524249)
* [Using Firefox 1.5 caching](https://developer.mozilla.org/en-US/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
* [如何判断用户是否为第一次访问页面](http://www.barretlee.com/blog/2015/04/03/detect-first-visit-usr/)
  
## Tips
* performance.navigation.type
1. cookieEnabled 属性可返回一个布尔值，如果浏览器启用了 cookie，该属性值为 true。如果禁用了 cookie，则值为 false。navigator.cookieEnabled
2. [让 innerHTML 进来的 script 代码跑起来](http://www.cnblogs.com/zichi/p/run-innerHTML-script.html),便利script[src]从新加载src
3. onhashchange事件
4. event.isTrusted

