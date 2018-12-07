module.exports = {
  devServer: {
    port: 8086,
    // proxy: {
    //   // 可以配置多个不同的代理
    //   '/apis': {
    //     target: '',
    //     ws: true,  // proxy websockets 
    //     changeOrigin: true,  // needed for virtual hosted sites
    //     pathRewrite: {
    //       '^/apis': ''  // rewrite path
    //     }
    //   },
    // }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/assets/config.scss` 这个文件
        data: `@import "@/assets/config.scss";`
      }
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'element-ui': 'ELEMENT',
      // 'iView': 'iView',
    }
  }
}