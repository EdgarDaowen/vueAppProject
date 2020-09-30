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
  },
  // plugins: {
  //   autoprefixer: {},
  //   "postcss-px-to-viewport": {
  //     viewportWidth: 375, //视窗的宽度
  //     viewportHeight: 667, //视窗的高度
  //     unitPrecision: 5, //转换后的小数位数
  //     viewportUnit: 'vw',
  //     selectorBlackList: [''] ,//指定不需要转换的类
  //     minPixelValue: 1, //小于或等于‘1px'不转换
  //     mediaQuery: false //允许在媒体查询中转换’px‘
  //   }
  // }
}
