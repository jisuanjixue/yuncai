export default {
  pages: [
    "pages/index/index",
    "pages/tradinghall/tradinghall",
    "pages/release/release",
    "pages/circle/circle",
    "pages/my/index"
  ],
  window: {
    navigationBarBackgroundColor: "@navBackgroundColor",
    navigationBarTitleText: "菜易通",
    navigationBarTextStyle: "@navTextStyle",
    navigationStyle: "custom",
    //下拉刷新
    backgroundTextStyle: "dark" //backgroundTextStyle 设置为 dark 是为了可见下拉时的三个点。。
  },
  tabBar: {
    color: "#828282",
    selectedColor: "@navBackgroundColor",
    backgroundColor: "#FFFFFF",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./assets/images/unhome.png",
        selectedIconPath: "./assets/images/home.png",
        text: "首页"
      },
      {
        pagePath: "pages/tradinghall/tradinghall",
        text: "交易大厅",
        iconPath: "./assets/icon-jydt-nor.png",
        selectedIconPath: "./assets/icon-jydt-sel.png"
      },
      {
        pagePath: "pages/release/release",
        text: "发布",
        iconPath: "./assets/icon-fb.png",
        selectedIconPath: "./assets/icon-fb.png"
      },
      {
        pagePath: "pages/circle/circle",
        text: "农友圈",
        iconPath: "./assets/icon-nyq-nor.png",
        selectedIconPath: "./assets/icon-nyq-sel.png"
      },
      {
        pagePath: "pages/my/index",
        iconPath: "./assets/images/unme.png",
        selectedIconPath: "./assets/images/me.png",
        text: "我的"
      }
    ]
  },
  subPackages: [
    {
      root: "packageA",
      pages: []
      // plugins: {
      //   goodsSharePlugin: {
      //     version: "4.0.1",
      //     provider: "wx56c8f077de74b07c"
      //   }
      // }
    },
    {
      root: "packageB",
      pages: []
    },
    {
      root: "packageC",
      pages: []
    }
  ],
  plugins: {},
  // navigateToMiniProgramAppIdList: ["wxcbbd86b156ae4441"],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序定位"
    },
    "scope.writePhotosAlbum": {
      desc: "你的图片或视频将用于小程序"
    }
  },
  requiredBackgroundModes: ["location"],
  sitemapLocation: "sitemap.json",
  // darkmode: true,
  lazyCodeLoading: "requiredComponents",
  singlePage: {
    navigationBarFit: "float"
  },
  themeLocation: "theme.json"
};
