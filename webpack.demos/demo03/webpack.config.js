/**
 * 需要install sass-loader 和 node-sass
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
        }]
    }
}