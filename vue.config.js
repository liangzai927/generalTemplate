const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    port: 9999, //端口号
    open: true, //默认是否打开
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //   //反向代理
    // },

  },
  //配置@代表src文件夹路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
}