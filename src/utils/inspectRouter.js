/*
 * @LastEditors: Mark
 * @Description: 路由的相关处理查询函数
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-05-13 17:46:03
 */
import routes from '@/pages/routes';
import { localStore } from '@/utils/utils.js';

export const getMainRoute = path => {
  return '/' + path.split('/')[1];
};

export const splitPath = path => {
  /**
   * @description: 将路由器额分成数组
   * @param path
   * @return: []
   */
  const pathArr = [];
  const path_split = path.split('/');
  if (path === '/') {
    pathArr.push('/');
    return pathArr;
  }
  for (let i = 0; i < path_split.length; i++) {
    const el = path_split[i];
    if (el) {
      pathArr.push('/' + el);
    }
  }
  return pathArr;
};

export const inspect404 = ({ pathname }) => {
  const nowPath = getMainRoute(pathname);
  /**
   * @description: 查找404页面
   * @param {
   *  pathname
   * }
   * @return: {}
   */
  const find = routes.find(item => {
    return nowPath === item.path;
  });
  if (nowPath === '/inbox') {
    return true;
  }
  return find;
};

export const recursion = pathArr => {
  const degree = pathArr.length;

  let returnRoutes = routes;
  let count = 0;
  if (degree === 1) {
    return returnRoutes;
  } else {
    find();
    return returnRoutes;
  }
  function find() {
    let path = '/' + pathArr[count];
    for (let i = 0; i < returnRoutes.length; i++) {
      const el = returnRoutes[i];
      if (path === el.path) {
        if (el.children && el.children.routes) {
          returnRoutes = el.children.routes;
          break;
        }
      }
    }
    count++;
    if (count < degree) {
      find();
    }
  }
};

export const inspectRouter = ({ pathname }) => {
  const pathArr = pathname.split('/');
  const routeList = recursion(pathArr);

  return routeList;
};

//匹配和查找路由,返回路由的配置信息
export const fondRoute = pathname => {
  const pathArr = splitPath(pathname);
  let nowRoutes = '';
  const degree = pathArr.length;
  let count = 0;

  const firstPath = pathArr[0];
  for (let i = 0; i < routes.length; i++) {
    const el = routes[i];
    if (el.path === firstPath) {
      nowRoutes = el;
      break;
    }
  }
  if (degree === 1) {
    return returnData();
  } else if (nowRoutes) {
    find();
  }

  function find() {
    const path = pathArr[count];
    const routeList = nowRoutes.children && nowRoutes.children.routes;
    for (let i = 0; i < routeList.length; i++) {
      const el = routeList[i];
      if (el.path === path) {
        nowRoutes = el;
        break;
      } else {
      }
    }
    count++;
    count < degree && find();
  }

  return returnData();

  function returnData() {
    if (nowRoutes.path === pathArr[pathArr.length - 1]) {
      return nowRoutes;
    } else {
      return false;
    }
  }
};

export const isChildRoute = ({ father, child }) => {
  const fatherArr = splitPath(father);
  const childArr = splitPath(child);
  const returnArr = [];
  for (let i = 0; i < childArr.length; i++) {
    const child = childArr[i];
    const father = fatherArr[i];
    if (father) {
      if (child === father) {
        returnArr.push(true);
      }
    }
  }
  return returnArr.length;
};

// 存储最近的30条路由访问记录
export const storagePath = (history, pathname, option) => {
  const opt = option || {};
  const num = opt.num || 30;
  // if (history.action === 'POP') {
  //   localStore.remove('pathArr');
  // }
  const pathArr = localStore.get('routerHistory') || [];
  pathArr.push(pathname);
  let storageArr = pathArr;
  if (pathArr.length >= num) {
    storageArr = pathArr.slice(pathArr.length - num, pathArr.length);
  }
  localStore.set('routerHistory', storageArr);
};
