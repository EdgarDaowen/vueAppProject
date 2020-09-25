module.exports = {
  configureWebpack: {
    resolve: {
      //配置文件后缀省略
      // extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}