module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/covid': {
        target: 'https://news.sina.com.cn/',
        pathRewrite: {
          '^/covid': ''
        }
      }
    }
  }
}
