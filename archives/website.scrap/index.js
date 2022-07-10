/*
 * @Author: zuojj
 * @Description:   网站抓取脚本  
 * @Date: 2017-08-12 23:53:48 
 */

const RP = require('request-promise');
const cheerio = require('cheerio');

RP({
    uri: 'http://fanyi.sogou.com/reventondc/translateV1',
    method: 'POST',
    form: {
        from: 'en',
        to: 'zh-CHS',
        client: 'wap',
        fr: 'browser_wap',
        text: 'a',
        pid: 'sogou-dict-vr',
        needQc: '1',
        uuid: '11fcbfec-ade5-4eb3-8f64-65919b13363d',
        oxford: 'on',
        isReturnSugg: 'on'
    },
    json: true
}).then( (data) => {
console.log(data, 'xxxx');
}).catch( (err) => {
    console.log(err);
})


