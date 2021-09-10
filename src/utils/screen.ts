import Taro from "@tarojs/taro";

// getCenterHeight 获取中间区域的高度
export function getCenterHeight(): number {
  const { model, system, windowHeight, statusBarHeight } =
    Taro.getSystemInfoSync();
  let navBarHeight = 48;
  if (/iPhone/.test(model) && /iOS/.test(system)) {
    navBarHeight = 44;
  }
  return windowHeight - statusBarHeight - navBarHeight;
}

// getScreenWidth 获取屏幕宽度
export function getScreenWidth(): number {
  const { screenWidth } = Taro.getSystemInfoSync();
  return screenWidth;
}

// getTopNarHeight 获取头部导航的高度
export function getTopNarHeight(): number {
  const { model, system, statusBarHeight } = Taro.getSystemInfoSync();
  let navBarHeight = 48;
  if (/iPhone/.test(model) && /iOS/.test(system)) {
    navBarHeight = 44;
  }
  return statusBarHeight + navBarHeight;
}

/**
 * 将px转换为rpx
 * @param num number 数值
 */
export const convertPxToRpx = (num: number) => {
  const { windowWidth } = Taro.getSystemInfoSync();
  return num * (750 / windowWidth);
};

/**
 * 将rpx转换为px
 * @param num number 数值
 */
export const convertRpxToPx = (num: number) => {
  const { windowWidth } = Taro.getSystemInfoSync();
  return num / (750 / windowWidth);
};
