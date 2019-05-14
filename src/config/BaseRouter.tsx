/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-14 16:35:05
 * @LastEditTime: 2019-05-14 20:00:52
 */
import React from 'react';
import styles from '../test.module.less';
import '../test.less';
const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="wrapper">我们都是一家人</div>
      <div>我们都是一家人</div>
      <div>我们都是一家人</div>
      <div>我们都是一家人</div>
    </div>
  );
};

export default App;
