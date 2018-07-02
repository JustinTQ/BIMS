// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 引入 webpack
const webpack = require("webpack");
// 合并配置文件
module.exports = webpackMerge(webpackBase,{
    plugins:[
        new webpack.BannerPlugin('Copyright 北京天健源达科技股份有限公司版权所有，翻版必究'),
        //以下部分4.0已删除
        //new webpack.optimize.UglifyJsPlugin => package.js script 设置--mode production即压缩
        //new webpack.optimize.CommonsChunkPlugin => optimization splitChunks
        // 代码压缩
        // new webpack.optimize.UglifyJsPlugin({
        //     // 开启 sourceMap
        //     sourceMap: true,
        //     mangle: false
        // }),
        // 提取公共 JavaScript 代码
        // new webpack.optimize.CommonsChunkPlugin({
        //     // chunk 名为 commons
        //     name: "commons",
        //     filename: "[name].bundle.js",
        // }),
    ],
    // 提取公共 JavaScript 代码
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
});