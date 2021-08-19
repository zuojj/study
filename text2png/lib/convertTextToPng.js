const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const text2png = require('text2png');

/**
 * 生成md5戳
 * @param {*} str 
 * @returns 
 */
const md5 = (str) => {
    return crypto.createHash('md5').update(str).digest('hex');
};

/**
 * 转文本到PNG图片
 * @param {*} str 
 */
const convertTextToPng = (str) => {
    const result = Object.create(null);
    (str || '').split('').forEach(word => {
        const filename = md5(word + Date.now()) + '.png';
        result[word] = filename;
        const imgBuffer = text2png(word, {
            font: '390px Kaiti SC',
            textAlign: 'center',
            color: '#000000',
            padding: 48,
            strokeWidth: 0,
            strokeColor: '#000000',
            localFontPath: path.resolve(__dirname, '../font/kaitisc.ttf'),
            localFontName: 'Kaiti SC'
        });
        fs.writeFileSync(path.resolve(__dirname, '../dist', filename), imgBuffer);
    });
    return result;
};

module.exports = convertTextToPng;
