/**
 * @author: zuojj(zuojj.com@gmail.com) 
 * @description: locastorage
 * @Date: 2017-03-22 11:22:27 
 */

fis.media('prod')
    .match('({top,bottom}).js', {
        charset: 'gb2312',
        release: './$1.min.js',
        optimizer: fis.plugin('uglify-js')
    })
    .match('*', {
        deploy: [
            fis.plugin('local-deliver', {
                to: './'
            })
        ]
    });