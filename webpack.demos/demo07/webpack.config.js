/**
 * babel-loader
 * babel-core
 * babel-preset-es2015 > support es6/es2015
 * babel-plugin-transform-runtime > 对es6语法进行转换，对于新的API，使用babel-ployfill
 *
 *
 * webpack -p 内部使用的就是UglifyJsPlugin
 *
 *
 * ```
 *      ifBooleanArg("optimize-minimize", function() {
            ensureArray(options, "plugins");
            var UglifyJsPlugin = require("../lib/optimize/UglifyJsPlugin");
            options.plugins.push(new UglifyJsPlugin());
        });
 * ```
 *
 * ```
 * CommonsChunkPlugin 公共依赖打包
 * HtmlWebpackPlugin  引用资源路径自动替换
 * ```
 */
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 此处使用Array, helper.js会在index.js后执行
    entry: ['./index.js', './helper.js'],
    output: {
        path: './dist',
        publicPath: '',
        filename: '[name].js'
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
        },{
            test: /\.s?css$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'style!css!autoprefixer!sass'
        }]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }),

        new HtmlWebpackPlugin()
    ]
}