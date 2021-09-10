import dayjs from "dayjs";
import Taro from "@tarojs/taro";

// 转化数值，去除前面的0
export const formatNumber = (n: number | string): string => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

// 格式化时间
export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

export const parseTime = value => dayjs().subtract(value, "day").unix();

// formatTimeToDesc 格式化时间为描述，如刚刚 2分钟前
export function formatTimeToDesc(dateTimeStamp = 0): string {
  let result = "";
  if (dateTimeStamp <= 0) {
    return result;
  }
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;
  const diffValue = new Date().getTime() - dateTimeStamp * 1000;
  // 防止刚发布的显示不对
  if (diffValue < 0) {
    return "刚刚";
  }
  const yearCount = diffValue / year;
  const monthCount = diffValue / month;
  const weekCount = diffValue / (7 * day);
  const dayCount = diffValue / day;
  const hourCount = diffValue / hour;
  const minCount = diffValue / minute;
  if (yearCount >= 1) {
    const time = parseInt(`${yearCount}`, 10);
    if (time === 1) result = "年";
    else result = `${time}年`;
  } else if (monthCount >= 1) {
    const time = parseInt(`${monthCount}`, 10);
    result = `${time}月前`;
  } else if (weekCount >= 1) {
    const time = parseInt(`${weekCount}`, 10);
    result = `${time}周前`;
  } else if (dayCount >= 1) {
    const time = parseInt(`${dayCount}`, 10);
    result = `${time}天前`;
  } else if (hourCount >= 1) {
    const time = parseInt(`${hourCount}`, 10);
    result = `${time}小时前`;
  } else if (minCount >= 1) {
    const time = parseInt(`${minCount}`, 10);
    result = `${time}分钟前`;
  } else result = "";
  return result;
}

/*获取当前页url*/
export const getCurrentPageUrl = () => {
  const pages = Taro.getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const url = currentPage.route;
  return url;
};
