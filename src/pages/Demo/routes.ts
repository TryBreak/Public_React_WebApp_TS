/*
* @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
* @LastEditTime: 2019-05-23 13:19:26
 */
import _import from '@/utils/_import';

const basePath = '/Demo';
const fatherPath = '/demo';
const routes = [
  {
    path: '/style_demo',
    name: '样式演示',
    description: '样式演示demo',
    title: '二级路由-样式演示',
    component: _import(`${basePath}/StyleDemo`),
    from: fatherPath,
    children: {
      routes: _import(`${basePath}/StyleDemo/routes`),
    },
  },
  {
    path: '/style_demo_js',
    name: '样式演示的js版本',
    description: '样式演示demo_js',
    title: '二级路由-样式演示-js',
    component: _import(`${basePath}/StyleDemo_js`),
    from: fatherPath,
    children: {
      routes: _import(`${basePath}/StyleDemo_js/routes`),
    },
  },
  {
    path: '/request_demo',
    name: '请求演示',
    description: '请求演示demo',
    title: '二级路由-请求演示',
    component: _import(`${basePath}/RequestDemo`),
    from: fatherPath,
  },
  {
    path: '/mobox_demo',
    name: 'Mobx演示',
    description: '状态管理演示',
    title: '二级路由-Mobox',
    component: _import(`${basePath}/MobxDemo/`),
    from: fatherPath,
  },
];

export default routes;
