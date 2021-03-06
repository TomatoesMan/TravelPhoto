'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');
module.exports = {
  dev: {
    // Paths
    // https://www.easy-mock.com/mock/5c358c233df7227eb0a9d44a/example
    //https://www.easy-mock.com/mock/5c35e6db17c96e7d2a33f892/example/data#!method=get
    //https://www.easy-mock.com     /mock/5c3703307bfaf1250bff132b/attention/api  (关注)
    //https://www.easy-mock.com     /mock/5c3703307bfaf1250bff132b/attention/user/viewFans/1    (粉丝)
    //https://www.easy-mock.com      /mock/5c3703307bfaf1250bff132b/attention/wait
    //http://10.9.31.243:8080/shop/order?userId=1
    //
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
<<<<<<< HEAD
      // "/api" : {
      //   target : "https://www.easy-mock.com",
      //   changeOrigin : true,
      //   pathRewrite : {
      //     "^/api" : ""
      //   }
      // },
      // "/apid" : {
      //   target : "http://www.tuling123.com",
      //   changeOrigin : true,
      //   pathRewrite : {
      //     "^/apid" : ""
      //   }
      // }
      "/api" : {
        target : "https://www.easy-mock.com",
        changeOrigin : true,
        pathRewrite : {
          "^/api" : ""
        }
      },
=======
      "/apiz": {
        target: "http://10.9.26.134:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/apiz": ""
        }
      },
      "/api": {
        target: "https://www.easy-mock.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/apid": {
        target: "http://www.tuling123.com",
        changeOrigin: true,
        pathRewrite: {
          "^/apid": ""
        }
      }
>>>>>>> zhangjie
    },


    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
