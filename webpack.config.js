const path=require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    mode:'development',
entry:{
    index:'./src/index.js'
},
output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'

},
plugins:[
    new HtmlWebpackPlugin({
        template:'./index.html'
    }),
    new CleanWebpackPlugin()
],module:{
    rules:[
        {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use:{
            loader:'url-loader',
            options:{
                name:'[name]_[hash].[ext]',
                outputPath:'images/',
                limit:25600
            }
        
        }
        },
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
    ]

}
}