module.exports = {
  configureWebpack:{//configureWebpack
    resolve:{
      alias:{
        'assets':'src/assets',
        'common':'src/common',
        'components':'src/components',
        'network':'@/network',
        'views':'src/views',
      }
    }
  }
}
