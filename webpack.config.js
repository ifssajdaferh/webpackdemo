const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            cache:false
        }),
        new CleanWebpackPlugin()
    ], module: {
        rules: [
            {
                test: /.(woff|ttf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/',
                        limit: 25600
                    }

                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]

    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        // contentBase: path.join(__dirname, './dist')
    }
}