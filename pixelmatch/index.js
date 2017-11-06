const PixelMatch = require('pixelmatch');
const PNG = require('pngjs').PNG;
const fs = require('fs');
const path = require('path');


let imgs = [],
    filesRead = 0;

['img01', 'img02'].forEach((name) => {
    imgs.push(fs.createReadStream(path.resolve(__dirname, `images/${name}.png`)).pipe(new PNG()).on('parsed', onReadDone));
})

function onReadDone() {
    if (++filesRead < 2) return;
    let img01 = imgs[0],
        img02 = imgs[1];

    var diff = new PNG({
        width: img01.width,
        height: img01.height
    });

    PixelMatch(img01.data, img02.data, diff.data, img01.width, img01.height, {
        threshold: 0.1
    });

    diff.pack().pipe(fs.createWriteStream('diff.png'));
}