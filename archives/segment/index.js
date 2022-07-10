

const jieba = require('nodejieba');
const zh_segment = '习近平将在2018年10月1日对美国进行正式访问';
const en_segment = 'Letting her hair down! Ivanka looks relaxed as she arrives back home after attending the Medal of Honor ceremony for late US Army First Lieutenant Garlin Conner';

console.log(jieba.cut(zh_segment));
console.log(jieba.extract(zh_segment, 5));

console.log(en_segment.split(/\s+/));
console.log(jieba.extract(en_segment, 5));
