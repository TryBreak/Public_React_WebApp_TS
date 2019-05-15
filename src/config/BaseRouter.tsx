/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-14 16:35:05
 * @LastEditTime: 2019-05-15 13:45:49
 */
import React, { Component } from 'react';

//路由切换

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//路由切换 -- end

import Inbox from './Inbox'; //页面集合全路由展示
import RouteView from './RouteView'; //路由渲染文件

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <RouteView />
      </Switch>
    );
  }
}

class BaseRouter extends Component {
  render () {
    return (
      <Router>
        <Route exact component={App} />
      </Router>
    );
  }
}
export default BaseRouter;
