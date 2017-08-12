/**
 * babel-loader
 * babel-core
 * babel-preset-es2015 > support es6/es2015
 * babel-plugin-transform-runtime > 对es6语法进行转换，对于新的API，使用babel-ployfill
 */

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015']
            }
        }]
    }
}