
一、 Cookie相关 
key: "keyname", value: 文件属性用 |分隔, 文件版本用 * 分隔 ,文件间用 -分隔 , 示例： 
`[filename]|[type]|[version1]*[version2]-[filename]|[type]|[version1]*[version2]`

二、 直出与非直出模板约定
javascript:
```html
<script data-lskey="[filename]|[type]|[version]" class="read-fr-ls">
    // 非直出
    excute_ls_code([filename]|[type]|[version], 'js');
</script>

<script data-lskey="[filename]|[type]|[version]" class="write-to-ls">
    /* 直出 */
</script>
```
css:
```html
<script data-lskey="[filename]|[type]|[version]" class="read-fr-ls">
    // 非直出
    excute_ls_code([filename]|[type]|[version], 'css');
</script>

<style data-lskey="[filename]|[type]|[version]" class="write-to-ls" type="text/css">
    /* 直出 */
</style>
```

三、 服务器端直出情况
* 禁用浏览器Cookie
* 清除浏览器Cookie
* 浏览器不支持localStorage
* 清除结果页中 script[class="read-fr-ls"]的excute_ls_code 第一个参数对应的localStorage
* URL 中包含isReload: 0 / 1

四、 需要验证点：
* 线上版本更新
* 线上代码回滚
* 清除浏览器Cookie
* 清除浏览器 N 条localStorage
* 浏览器禁用Cookie情况
* 浏览器不支持localStorage 情况


五、统计参数

```js
/**
 * Reload PV Params:
 * sp_ck: 是否支持Cookie, 0 / 1
 * sp_ls: 是否支持Localstorage, 0 / 1
 * rtype: Reload 类型， "noitem" / "nosp"
 * item: 触发reload的 item
 */
{
    sp_ck: 0,
    sp_ls: 0,
    rtype: 'noitem',
    item: ''
}


/**
 * Bottom PV Params: 
 * wn: write num
 * wl: write length
 * rn: read num
 * rl: read length
 * et_n: 执行excute_ls_code 函数总次数
 * et_t: 执行excute_ls_code 函数总耗时(ms)
 * et_b: 执行bottom.js 总耗时(ms)
 */
{
    wn_css: 0,
    wl_css: 0,
    rn_css: 0,
    rl_css: 0,
    wn_js: 0,
    wl_js: 0,
    rn_js: 0,
    rl_js: 0,
    et_n: 0,
    et_t: 0,
    et_b: 0
}
```