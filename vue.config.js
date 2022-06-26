module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/covid': {
        target: 'https://news.sina.com.cn/',
        pathRewrite: {
          '^/covid': ''
        }
      },
      '/gwpreData': {
        target: 'https://gwpre.sina.cn/', // 需要代理的域名
        pathRewrite: {
          // 重写匹配的字段，如果不需要在请求路径上，重写为""
          '^/gwpreData': ''
        }
      },
      '/vaccineData': {
        target: ' https://api.inews.qq.com/', // 需要代理的域名
        pathRewrite: {
          // 重写匹配的字段，如果不需要在请求路径上，重写为""
          '^/vaccineData': ''
        }
      }
    }
  }
}
