var webpack = require('webpack');

var path = require('path');


function heredoc(fn) {
    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').
            replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><')
}
var api = heredoc(function () {
    /*
     avalon的弹出层组件
     1.  isShow: 用于控制显示与否
     2.  title: 标题
     3.  content: 内容，这个是一个非常复杂的HTML结构
     4.  onOk
     5:  onCancel
     
     使用
     兼容IE6-8
     ```
     <xmp ms-widget="[{is:'ms-modal'}, @config]">
     <p>弹窗的内容</p>
     <p>弹窗的内容</p>
     <p>弹窗的内容结束!</p>
     </xmp>
     ```
     只支持现代浏览器(IE9+)
     ```
     <ms-modal ms-widget="@config">
     <p>弹窗的内容</p>
     <p>弹窗的内容</p>
     <p>弹窗的内容结束!</p>
     </ms-modal>
     ```   
     */
})

module.exports = {
    entry: {
        index: './main'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'avalon'
    }, //页面引用的文件
    plugins: [
        new webpack.BannerPlugin('弹出层组件 by 司徒正美\n' + api)
    ],
    module: {
        loaders: [
            //ExtractTextPlugin.extract('style-loader', 'css-loader','sass-loader')
            //http://react-china.org/t/webpack-extracttextplugin-autoprefixer/1922/4
            // https://github.com/b82/webpack-basic-starter/blob/master/webpack.config.js 
            {test: /\.scss$/, loader:'style!css!sass',exclude: /node_modules/},
            {test: /\.(ttf|eot|svg|woff2?)((\?|#)[^\'\"]+)?$/, loader: 'url-loader'}

        ]
    },
    
    resolve: {
        extensions: ['.js', '', '.css']
    }
}
