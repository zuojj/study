const fs = require('fs');
const path = require('path');
const convertTextToPng = require('./lib/convertTextToPng');
const convertPngToSvg = require('./lib/convertPngToSvg');

// text to png
let result = convertTextToPng('坚若磐石');

// png to svg
let imgList = Object.values(result);
const convert = async () => {
    for(let filename of imgList) {
        let svg = await convertPngToSvg(path.resolve(__dirname, 'dist', filename));
        fs.writeFileSync(path.resolve(__dirname, 'dist', filename.replace('.png', '.svg')), svg);
    }
};
convert();
