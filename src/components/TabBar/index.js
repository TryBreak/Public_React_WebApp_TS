/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-05-05 10:25:14
 * @LastEditTime: 2019-05-13 17:49:47
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { tab_icon } from './img/load';
import styles from './index.module.less';

import { isChildRoute } from '@/utils/inspectRouter.js';

class TabBar extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  constructor() {
    super();
    this.state = {
      tabList: [
        {
          icon: tab_icon.icon_1,
          icon_active: tab_icon.icon_1_active,
          name: 'home',
          id: 1,
          linkPath: '/',
        },
        {
          icon: tab_icon.icon_2,
          icon_active: tab_icon.icon_2_active,
          name: 'inbox',
          id: 2,
          linkPath: '/inbox',
        },
        {
          icon: tab_icon.icon_3,
          icon_active: tab_icon.icon_3_active,
          name: 'MobxDemo',
          id: 3,
          linkPath: '/demo/mobox_demo',
        },
        {
          icon: tab_icon.icon_4,
          icon_active: tab_icon.icon_4_active,
          name: 'RequestDemo',
          id: 4,
          linkPath: '/demo/request_demo',
        },
        {
          icon: tab_icon.icon_5,
          icon_active: tab_icon.icon_5_active,
          name: 'StyleDemo',
          id: 5,
          linkPath: '/demo/style_demo',
        },
      ],
    };
  }

  linkTo = Url => {
    const { history } = this.props;
    const { pathname } = history.location;

    if (pathname !== Url) {
      history.push(Url);
    }
  };

  hrefTo = item => {
    const _this = this;

    _this.linkTo(item.linkPath);

    switch (item.id) {
      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      case 4:
        break;

      case 5:
        break;

      default:
        break;
    }
  };

  isActive = item => {
    const { history } = this.props;
    const { pathname } = history.location;
    // 路邮相等或者判定为二级以上子路由则判定为选中
    return (
      isChildRoute({ father: item.linkPath, child: pathname }) > 1 ||
      item.linkPath === pathname
    );
  };

  render() {
    const { tabList } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.null} />
        <div className={styles.tabBar}>
          {tabList.map(item => {
            return (
              <div
                className={
                  styles.item + ' ' + (this.isActive(item) && styles.active)
                }
                key={item.id}
                onClick={() => this.hrefTo(item)}
              >
                <img
                  className={styles.icon}
                  alt="icon"
                  src={this.isActive(item) ? item.icon_active : item.icon}
                />
                <span className={styles.name}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(TabBar);
