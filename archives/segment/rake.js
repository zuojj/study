const rake = require('node-rake');

const zh_segment = '习近平将在2018年10月1日对美国进行正式访问';
const en_segment = 'The storied saga of Donald Trump and Fox News host Megyn Kelly created fireworks during the Republican Party primaries and appeared to have died down in recent months, but that lull ended Tuesday night.';

console.log(rake.generate(zh_segment));
console.log(rake.generate(en_segment));
console.log(rake.generate('Who are you?'));