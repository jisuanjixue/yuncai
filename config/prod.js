// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 1024000 // 文件大小限制
          }
        }
      }
    }
  },
  terser: {
    enable: true,
    config: {
    }
  },
  csso: {
    enable: true,
    config: {
    }
  },
  uglify: {
    enable: true,
    config: {
    }
  },
  h5: {}
}
