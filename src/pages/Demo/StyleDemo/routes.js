/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-05-13 18:26:36
 */
import _import from '@/utils/_import';

const basePath = '/Demo/StyleDemo';
const fatherPath = '/demo/style_demo';

const routes = [
  {
    path: '/',
    name: 'css样式演示',
    description: 'css样式演示',
    title: '三级路由-样式演示',
    component: _import(basePath + '/CssStyleDemo'),
    from: fatherPath,
  },
  {
    path: '/js_style_demo',
    name: 'js样式演示',
    description: 'js样式演示',
    title: '',
    component: _import(basePath + '/JsStyleDemo'),
    from: fatherPath,
  },
];

export default routes;
