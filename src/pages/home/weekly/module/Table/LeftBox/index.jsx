import React from 'react';

import styles from './index.module.less';

export default class extends React.Component {
  componentWillMount() {}

  render() {
    const { project } = this.props;
    return (
      <div className={styles.leftBox}>
        <div className={styles.projectName}>{project.name}</div>
        <div className={styles.projectDetail}>
          <div className={styles.item}>
            <div className={styles.label}>更新: </div>
            <div className={styles.valueBox}>加护 , 2019/11/30加护</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>工期: </div>
            <div className={styles.valueBox}>加护 , 2019/11/30加护</div>
          </div>
        </div>
      </div>
    );
  }
}
