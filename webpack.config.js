const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const env = 'product.js';
const config = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            ConstantConfig: path.resolve(__dirname, (`env/${env}`)),
        }
    },
    entry: {
        main: './src/index.js',
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-redux', 'react-router', 'react-router-dom'],
        'constant-config': ['ConstantConfig']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: { modules: true, localIdentName: '[name]__[local]--[hash:base64:5]' }
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: '../'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'ConstantConfig'],
            minChunks: Infinity,
            filename: '[name].js'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        host: "0.0.0.0",
        port: 9000,
        hot: true,
        historyApiFallback: true
    },
    devtool: 'eval-source-map'
};

module.exports = config;