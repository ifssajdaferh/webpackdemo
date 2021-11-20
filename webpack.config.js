const path=require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports={
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
]

}