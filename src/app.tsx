import { Component } from "react";
import Taro from "@tarojs/taro";
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import wxApolloFetcher from "wx-apollo-fetcher";
import "taro-ui/dist/style/index.scss"; // 全局引入一次即可
import "./app.css";
import "./tailwind.css";

class App extends Component {
  onLaunch(): any {
    // 自定义promis的finally，防止小程序ios下的报错
    if (!Promise.prototype.finally) {
      Promise.prototype.finally = function (callback: any) {
        const P = this.constructor;
        return this.then(
          value => P.resolve(callback()).then(() => value),
          reason =>
            P.resolve(callback()).then(() => {
              throw reason;
            })
        );
      };
    }
    /* 版本自动更新代码 */
    const updateManager = Taro.getUpdateManager();
    updateManager.onCheckForUpdate(res => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          Taro.showModal({
            title: "您有新的版本！", // 此处可自定义提示标题
            content: "检测到新版本，是否重启小程序？", // 此处可自定义提示消息内容
            success: resData => {
              if (resData.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate();
              }
            }
          });
        });
      }
      // 请求完新版本信息的回调 true说明有更新
    });
    updateManager.onUpdateFailed(() => {
      // 新的版本下载失败
      Taro.showModal({
        title: "更新提示",
        content: "新版本下载失败",
        showCancel: false
      });
    });
  }

  componentDidShow(): any {
    // eslint-disable-next-line no-console
    Taro.setKeepScreenOn({
      keepScreenOn: true
    });
    // Taro.setEnableDebug({
    //   enableDebug: true
    // })
    Taro.getSetting({
      success(res) {
        if (!res.authSetting["scope.userLocation"]) {
          Taro.authorize({
            scope: "scope.userLocation",
            success() {
              // 用户已经同意小程序使用定位功能，后续调用Taro.startLocationUpdateBackground() 接口不会弹窗询问
            }
          });
        }
      }
    });
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render(): any {
    const authMiddleware = authToken =>
      new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        if (authToken) {
          operation.setContext({
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });
        }
        return forward(operation);
      });

    const httpLink = new HttpLink({
      uri: "http://localhost:3091/graphql",
      fetch: wxApolloFetcher
    });
    const authToken = Taro.getStorageSync("authToken");
    const client = new ApolloClient({
      link: authMiddleware(authToken).concat(httpLink),
      cache: new InMemoryCache()
    });

    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}

export default App;
