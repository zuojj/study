/**
 * @Author zuojj(zuojj.com@gmail.com)
 * @Description document
 * @Date 2021-08-19 16:46:34
 */ 

const potrace = require('potrace');

const convertPngToSvg = (imgPath, params) => {
    return new Promise((resolve, reject) => {
        potrace.trace(imgPath, function(err, svg) {
            if (err) {
                reject(err);
                return;
            } 
            resolve(svg);
        });
    });
};

module.exports = convertPngToSvg;
