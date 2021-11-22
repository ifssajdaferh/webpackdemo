const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
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
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
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
        // 告诉 dev server，从什么位置查找文件.告知 webpack-dev-server
        // ，将 dist 目录下的文件 serve 到 localhost:8080 下。（译注：serve，将资源作为 server 的可访问文件
        // contentBase:"./dist",
        
        hot:true,
       
        // 服务器部署完毕自动打开浏览器
        open:true,
       
        proxy: {
        //    在当前域名的yixiantong地址的请求都会被代理拦截
            "/yixiantong":{
                // 具体的路径默认传到代理到的地址，不想传递可以具体设置
                target:'http://study.jsplusplus.com',

                // 不设置此字段将会发送8080的请求url
                changeOrigin: true,
            }
          }
         

       
    }
}