// const { resolve } = require("core-js/fn/promise");
// const { config } = require("webpack");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  assetsDir: "static",
  outputDir: 'dist',
  lintOnSave:false,
  configureWebpack: {
    resolve: {
        alias: {
          '@assets': resolve('src/assets') // 这里采用两个@符号来代替路径的别名，因为一个@符号已经默认被设置src的路径了，为了不影响原有的功能，这里采用两个@字符
        }
    },
    plugins: [
      // 需要用到拷贝文件的插件
      new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, './static'),
            to: '.',
            ignore: ['.*']
          }
        ])
  ]
}
}
