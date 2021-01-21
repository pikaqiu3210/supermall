const path = require('path');        //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)  //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('@/assets'))
      .set('common', resolve('@/common'))
      .set('components', resolve('@/components'))
      .set('network', resolve('@/network'))
      .set('views', resolve('@/views'))
  }
}