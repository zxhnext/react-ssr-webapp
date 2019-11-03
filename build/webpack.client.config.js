const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/app.js')

  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch', // react中配置HotModuleReplacementPlugin支持，同时需要在.babelrc中引入该模块,且在app.js中配置
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true, // 启动HotModuleReplacement
    overlay: { // 出现错误时在网页上报错
      errors: true // 只出线错误信息
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      '/api': 'http://localhost:3333'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin()) // 修改后不用刷新页面
}

module.exports = config
