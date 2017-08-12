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