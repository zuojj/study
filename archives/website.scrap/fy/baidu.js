/*
 * @Author: zuojj
 * @Description:   网站抓取脚本  
 * @Date: 2017-08-12 23:53:48 
 * https://visionmedia.github.io/superagent/
 */

const rp = require('superagent');

rp
    .post('https://fanyi.baidu.com/basetrans')
    .send({
        query: 'a',
        from: 'en',
        to: 'zh'
    })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Referer', 'https://fanyi.baidu.com/')
    .set('origin', 'https://fanyi.baidu.com')
    .set('Host', 'fanyi.baidu.com')
    .set('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
    .accept('application/json')
    .then((res) => {
        console.log('res: ', res.body);
    })
    .catch(err => {
        console.log('err: ', err);
    })
