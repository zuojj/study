/*
 * @Author: zuojj
 * @Description:   网站抓取脚本  
 * @Date: 2017-08-12 23:53:48 
 * https://visionmedia.github.io/superagent/
 */

const rp = require('superagent');


rp
    .post('https://cn.bing.com/ttranslate?&category=&IG=D543143C20194772B17340E9CC5D0819&IID=translator.5044.4')
    .send({
        text: '你好啊',
        from: 'zh-CHS',
        to: 'en'
    })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .then((res) => {

        console.log('res: ', res.body);
    })
    .catch(err => {
        console.log('err: ', err);
    })
