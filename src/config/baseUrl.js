/*
 * @LastEditors: Mark
 * @Description: 版本号管理和baseUrl管理
 * @Author: Mark
 * @Date: 2019-05-13 15:18:24
 * @LastEditTime: 2019-05-13 16:17:36
 */

//baseUrl
// let url = 'https://xcx.joywaygym.com'; //生产服
let url = 'http://ip-29-shanhusecurity-app.coralcodes.com'; //测试服
// let url = 'http://ip-29-shanhusecurity-app.coralcodes.com'; //UAT

export const baseUrl = url;

// 版本信息管理
const versionList = [
  {
    code: '0.1.0',
    describe: 'Public_React_WebApp',
    user: 'Mark',
  },
];

export const printVersion = () => {
  const version = versionList[versionList.length - 1];
  console.groupCollapsed(
    `%c version -- ${version.code}`,
    'font-size:10;color:green;font-weight:bold;'
  );
  console.info(
    `%c describe -- ${version.describe}`,
    'font-size:10;color:green;font-weight:bold;'
  );
  console.info(
    `%c user -- ${version.user}`,
    'font-size:10;color:green;font-weight:bold;'
  );
  console.groupEnd();
};
