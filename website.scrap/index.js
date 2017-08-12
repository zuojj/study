/*
 * @Author: zuojj
 * @Description:   网站抓取脚本  
 * @Date: 2017-08-12 23:53:48 
 */

const RP = require('request-promise');
const cheerio = require('cheerio');

RP({
    uri: 'https://www.baidu.com',
    transform(body) {
        return cheerio.load(body);
    }
}).then( ($) => {
    console.log(`title: "${$("title").text()}"`);
}).catch( (err) => {
    console.log(err);
})