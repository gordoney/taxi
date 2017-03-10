"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        mainpage: __dirname + '/dev/mainpage',
        mainpagePhone: __dirname + '/dev/mainpage-phone',
        inner: __dirname + '/dev/inner',
        topMenu: __dirname + '/dev/modules/top-menu/top-menu',
        slider: __dirname + '/dev/modules/slider/slider',
        advantage: __dirname + '/dev/modules/advantage/advantage',
        bottomMenu: __dirname + '/dev/modules/bottom-menu/bottom-menu',
        appButtons: __dirname + '/dev/modules/app-buttons/app-buttons',
        paymentLogos: __dirname + '/dev/modules/payment-logos/payment-logos',
        features: __dirname + '/dev/modules/features/features',
        horizontalMenu: __dirname + '/dev/modules/horizontal-menu/horizontal-menu',
    }, 
    output: {
        path: __dirname + '/public',
        publicPath: NODE_ENV == 'development' ? '/' : '',
        filename: 'js/[name].js'
    },
    
    watch: NODE_ENV == 'development',
    
    devtool: NODE_ENV == 'development' ? 'eval-source-map' : false,
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }, 
                        "postcss-loader", 
                        "sass-loader",
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                // Or array of paths
                                resources: ['./dev/sass/mixins.scss', './dev/sass/_grid.scss', './dev/sass/variables.scss']
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]?[hash]'
            },
            {
                test: /\.svg$/,
                loader: 'file-loader?name=svg/[name].[ext]?[hash]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]?[hash]'
            },
            {
                test: /\.html$/,
                loader: NODE_ENV == 'development' ? "raw-loader" : 'file-loader?name=[name].[ext]'
            },
        ],
    },
    
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true
        }),
        new ExtractTextPlugin({filename: "css/[name].css", allChunks: false, disable: NODE_ENV == 'development'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
    
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dev'
    }
};