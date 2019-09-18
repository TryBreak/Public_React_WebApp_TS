import Qs from "qs";
import store from "store";

export const localStore = store;

export const getUrlParam = (url = "") => {
  /**
   * @description: 获取当前页面的参数或者指定字符串的参数
   * @param null
   * @return: {*}
   */
  const search: string = url && window.location.search;
  return Qs.parse(search, { ignoreQueryPrefix: true });
};

export const moneyNum = (num: string | number) => {
  if (Number(num)) {
    return Number(num).toFixed(2);
  } else {
    console.error(`${num}价格有问题`);
  }
};
