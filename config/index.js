// eslint-disable-next-line import/no-commonjs
import { resolve } from "path";

const config = {
  projectName: "yuncaiyitong",
  date: "2021-9-09",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  defineConstants: {},
  alias: {
    "@/utils": resolve(__dirname, "..", "src/utils"),
    "@/components": resolve(__dirname, "..", "src/components"),
    "@/libs": resolve(__dirname, "..", "src/libs")
  },
  plugins: ["@tarojs/plugin-html", "tarojs-router-next-plugin"],
  copy: {
    patterns: [],
    options: {}
  },
  framework: "react",
  mini: {
    postcss: {
      tailwindcss: { enable: true },
      "tailwind-taro": { enable: true },
      pxtransform: {
        enable: true,
        config: { browsers: ["last 3 versions", "Android >= 4.1", "ios >= 8"] }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    },
    // compile: {
    //   exclude: [
    //     path.resolve(__dirname, '..', 'src/packageA/index/mtj-wx-sdk.js')
    //   ]
    // },
    webpackChain(chain) {
      chain
        .plugin("analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin, []);
    },
    // lessLoaderOption: {
    //   strictMath: true,
    //   // noIeCompat: true
    // },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    }
    // imageUrlLoaderOption: { limit: 10000, mimetype: 'image/png', encoding: 'base64' },
    // mediaUrlLoaderOption: {
    //   limit: 8192
    // }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  }
};

export default function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
}
