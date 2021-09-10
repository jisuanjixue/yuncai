//Taro自定义导航条navbar组件
import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Block } from "@tarojs/components";
import { convertPxToRpx } from "../../utils/screen";

import "./index.less";

const BaseImageUrl = "https://tsnf.laocainonghe.com";

type PageStateProps = {
  layout: number;
  title: string;
  theme: string;
};

type StateType = {
  navBarHeight: number;
  statusBarHeight: number;
  menuButtonHeight: number;
  menuButtonWidth: number;
};

interface NavBar {
  props: PageStateProps;
  state: StateType;
}

class NavBar extends React.Component {
  // 默认配置
  static defaultProps = {
    layout: 1, // 布局方式，1 标题；2 返回按钮+标题；
    title: "",
    theme: "light"
  };
  constructor(props) {
    super(props);
    this.state = {
      navBarHeight: 44,
      statusBarHeight: 20,
      menuButtonHeight: 32,
      menuButtonWidth: 97 // 右侧胶囊和右侧边距的总和，一般是97
    };
  }

  componentDidMount() {
    const { model, system, statusBarHeight, screenWidth } =
      Taro.getSystemInfoSync();
    const { height: menuButtonHeight, left } =
      Taro.getMenuButtonBoundingClientRect();
    let navBarHeight = 48;
    if (/iPhone/.test(model) && /iOS/.test(system)) {
      navBarHeight = 44;
    }
    this.setState({
      navBarHeight,
      statusBarHeight,
      menuButtonHeight,
      menuButtonWidth: screenWidth - left
    });
  }

  handleNavigateBack = () => {
    Taro.navigateBack();
  };

  // 渲染左侧按钮组
  renderLeftBtns(withTitle) {
    // 高度和胶囊一致
    const { menuButtonHeight } = this.state;
    // 有标题的右侧间距，跟右侧胶囊一样，87的宽度，去掉当前占的位置
    const withTitleRight = convertPxToRpx(87) - 158;
    return (
      <View
        className="navBarBack"
        style={{
          height: `${menuButtonHeight}px`,
          marginRight: withTitle ? `${withTitleRight}rpx` : "0"
        }}
      >
        <Image
          className="backBtn"
          onClick={this.handleNavigateBack}
          src={`${BaseImageUrl}/icon_global_back@2x.png`}
        />
        <Text className="divide"></Text>
      </View>
    );
  }

  // 渲染标题
  renderTitle() {
    const { title } = this.props;
    const { menuButtonWidth } = this.state;
    return (
      <View className="title" style={{ marginRight: `${menuButtonWidth}px` }}>
        <Text>{title}</Text>
      </View>
    );
  }

  rendeBackAndTitle() {
    return (
      <Block>
        {this.renderLeftBtns(true)}
        {this.renderTitle()}
      </Block>
    );
  }

  rendeLangAndTitle() {
    return <Block>{this.renderTitle()}</Block>;
  }

  render() {
    const { theme, layout } = this.props;
    const { navBarHeight, statusBarHeight } = this.state;

    let innerView;

    switch (layout) {
      case 1:
        innerView = this.rendeLangAndTitle();
        break;
      case 2:
        innerView = this.rendeBackAndTitle();
        break;
      default:
        innerView = this.rendeLangAndTitle();
        break;
    }

    // 4种布局，1 语言切换+搜索框；2 返回按钮+搜索框； 3 返回按钮+标题； 4 语言切换按钮+标题
    return (
      <View
        style={{
          backgroundColor: "#f1b011",
          color: theme === "dark" ? "#FFFFFF" : "#000000"
        }}
      >
        <View
          className="navStatusBar"
          style={{ height: `${statusBarHeight}px` }}
        ></View>
        <View className="navBar" style={{ height: `${navBarHeight}px` }}>
          {innerView}
        </View>
      </View>
    );
  }
}

export default NavBar;
