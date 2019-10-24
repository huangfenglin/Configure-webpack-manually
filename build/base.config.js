const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'http://localhost:8080/'
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归me所有'),
    // 在dist里面创建index.html的插件
    new htmlWebpackPlugin({
      // 根据我们外面的index.html来生成我们dist里面的js文件
      template:'index.html',
      filenmae: 'index.html'
  }),
  new ExtractTextPlugin('style/style.css'),
  new CleanWebpackPlugin(),
  // new uglifyJsPlugin()
],
  // 建议使用这个配置，新版本建议这样配置,默认会生成main.js
//   devServer:{
//     publicPath: '/dist'
// },
  module: {
    rules: [
      // 配置的是用来解析.css文件的loader(style-loader和css-loader)
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({	// 提取css
            fallback: "vue-style-loader",
            use: [{loader:"css-loader",options: {
              url: false
            }}]
        })
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({	// 提取less
            fallback: "vue-style-loader",
            use: ["css-loader", "less-loader"]
        })
    },
      {
        // png|jpg|gif:常见的图片资源
        // eot|svg|ttf|woff:字体图标或web字体的字体源文件
        test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
        use: [{
            loader: 'url-loader',
            options: {
              // limit表示如果图片大于50000byte，就以路径形式展示，小于的话就用base64格式展示
                limit: 8192,
                name: 'img/[name].[hash:8].[ext]'
            }
        }]
    },
    {
      test: /\.js$/,
      //exclude 排除
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    },
    {
      test: /\.vue$/,
      use:['vue-loader']
    }

    ]

  },
  resolve: {
    // 省略后缀名
    extensions: ['.js','.css','.vue'],
    // alias:别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
}