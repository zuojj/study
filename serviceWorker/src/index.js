(function (window) {
    var sw = window.navigator.serviceWorker;

    if (!sw) {
        alert('Service Worker is not supported in this browser.');
        return;
    }

    var ulist = document.querySelector('.ulist'),
        input = document.querySelector('input[type=text]'),
        btn = document.querySelector('input[type=button]'),
        ck_sw = document.querySelector('input[type=checkbox]');
console.log(ck_sw.checked);
    if (ck_sw.checked) {
        sw.register('sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });

        btn.addEventListener('click', function () {
            input.value && sw.controller.postMessage(input.value);
            input.value = '';
        })

        sw.addEventListener('message', function (ev) {
            ulist.innerHTML = ulist.innerHTML + ['<li>', event.data.message, '</li>'].join('');
        })
    } else {
        // 销毁服务工作线程
        sw.getRegistrations().then(function (registrations) {
            for (var registration of registrations) {
                registration.unregister();
            }
        })
    }

})(window);