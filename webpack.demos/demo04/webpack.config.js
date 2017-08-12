/**
 * use url-loader / file-loader
 */


module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?mimetype=image/png&limit=2000'
        }]
    }
}