/* 缓存名称 */
const CACHE_NAME = 'LOCALHOST_SW_V1'
const CACHE_NEW_NAME = ['localhost_new_v1']

/* 监听message 事件，发布接收消息 */
self.addEventListener('message', function (event) {
    console.log(self.clients, 'xxx');
    event.waitUntil && event.waitUntil(self.clients.matchAll().then(function (clientList) {
        var sourceID = event.source ? event.source.id : 'unknown';
        console.log(['event.source.id is ', sourceID].join(''));
        clientList.forEach(function (client) {
            if (client.id === sourceID) return;

            client.postMessage({
                client: sourceID,
                message: event.data
            });
        });
    }));

    // event.waitUntil(self.skipWaiting());
});

/* 服务工作线程更新 */
self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());

    event.waitUntil(caches.keys().then(function(cacheNames) {
        console.log(cacheNames, 'dflasjdfklasj');
        return Promise.all(cacheNames.map(function(cacheName) {
            if(CACHE_NEW_NAME.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
            }
        }))
    }));
});


/* 拦截请求并缓存新的请求 */
self.addEventListener('fetch', function (event) {
    console.log(event.request);
    event.respondWith(caches.match(event.request).then(function (response) {
        var request_clone = event.request.clone();

        return response || fetch(request_clone).then(function (response) {
            console.log('缓存请求...');
            var response_clone;
            // 是否成功响应
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            response_clone = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
                cache.put(event.request, response_clone);
            });

            return response;
        });
    }));
});

/* 缓存文件更新 */




/* 错误监控 */
self.addEventListener('error', function(event) {
    // 上报错误信息
    // 常用的属性：
    // event.message
    // event.filename
    // event.lineno
    // event.colno
    // event.error.stack
    console.log('error', event);
})
self.addEventListener('unhandlerejection', function(event) {
    console.log('unhandlerejection', event);
    // 上报错误信息
    // 常用的属性：
    // event.reason
})

/* 埋点统计 */




/* 服务线程更新：*/