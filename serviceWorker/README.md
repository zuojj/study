# ServiceWorker

## ServiceWorker 实现网站加速:
1. 优势
* 可以很轻易地实现静态与动态资源缓存，决定缓存空间的大小与缓存时间期限，可定制性高；
* 不需要服务端支持，只需要在本地生成 service worker 文件并上传就可以使用，特别适用于没有服务端的静态博客或网站；
* 配合 sw-precache ，只需要做好缓存配置， sw-precache 可以自动生成 service woker 文件，不需要自己实现缓存逻辑；
* 可以灵活为动态与静态资源，以及不同网址提供不同的缓存机制，并实现资源的动态更新，同样不需要自己编写代码；

2. 劣势
* 网站必须启用 HTTPS
* 不是所有浏览器都支持：目前 chrome, firefox,opera 以及国内的各种双核浏览器都支持，但 safari 不支持
* 不能解决首次访问缓慢的问题，因为还没有缓存。




Update on reload: 强制页面使用最新的服务工作线程



skipWaiting: 强制激活新服务工作线程的简单方法














## 参考链接
[W3C](https://w3c.github.io/ServiceWorker/)
[ServiceWorker](https://jakearchibald.com/2014/offline-cookbook/)
[服务工作线程：简介](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers?hl=zh-cn)
[Service Worker最佳实践](https://x5.tencent.com/tbs/guide/serviceworker.html)
[Service Worker 全面进阶](https://www.qcloud.com/community/article/532600001489391622)
[demo](https://nzv3tos3n.qnssl.com/message/msg-demo.html)
[使用 service worker+sw-precache 实现网站加速](https://www.v2ex.com/t/331086)
[PWA 在饿了么的实践经验](https://zhuanlan.zhihu.com/p/25800461)
[sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin)
[Service Worker Introduction](https://jbmoelker.github.io/serviceworker-introduction/steps/)


