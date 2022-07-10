/*
 * @Author: zuojj
 * @Description:   网站抓取脚本  
 * @Date: 2017-08-12 23:53:48 
 * https://visionmedia.github.io/superagent/
 */

const rp = require('superagent');

rp
    .post('https://fanyi.qq.com/api/translate')
    .send({
        source: 'zh',
        target: 'en',
        sourceText: '你好',
        sessionUuid: 'translate_uuid1537954382494'
    })
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .set('Host', 'fanyi.qq.com')
    .set('Referer', 'https://fanyi.qq.com/')
    .set('Origin', 'https://fanyi.qq.com')
    .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
    .accept('application/json')
    .then((res) => {
        console.log('res: ', JSON.stringify(res.body));
    })
    .catch(err => {
        console.log('err: ', err);
    })
