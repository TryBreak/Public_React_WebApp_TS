import React from 'react';
import styles from './index.module.less';
import { esayDate } from '@/mark_modules/utils/utils';

export default class extends React.Component {
  // 事件的渲染
  event_view = (eventList, week, project) => {
    const eventArr = eventList || [];
    const desList = [];
    for (let i = 0; i < eventArr.length; i++) {
      const el = eventArr[i];
      if (esayDate(el.date) === esayDate(week.date)) {
        desList.push({
          ...el,
          projectId: project.id,
        });
      }
    }
    return this.event_render(desList);
  };

  event_render = desList => {
    const des = desList || [];
    const view = [];
    for (let i = 0; i < des.length; i++) {
      const el = des[i];
      view.push(
        <div key={i} className={styles.eventView}>
          {el.desc}
        </div>
      );
    }
    return view;
  };

  // 人员的渲染
  people_view = (role, week, project) => {
    const people = role.memberList || [];
    const peopleArr = [];
    for (let i = 0; i < people.length; i++) {
      const el = people[i];
      if (esayDate(el.time).indexOf(esayDate(week.date)) > -1) {
        peopleArr.push({
          ...el,
          roleId: role.roleId,
          initTime: week.date,
          projectId: project.id,
        });
      }
    }
    return this.people_render(peopleArr);
  };

  people_render = people => {
    const view = [];
    for (let i = 0; i < people.length; i++) {
      const el = people[i];
      view.push(
        <div key={i} className={styles.peopleView}>
          {el.name}
        </div>
      );
    }
    return view;
  };

  render() {
    const { weekList, project } = this.props;
    return (
      <div className={styles.rightBox}>
        <div className={styles.people}>
          <div className={`${styles.labelBox} ${styles.eventBox}`}>事件</div>
          {weekList &&
            weekList.map((week, week_index) => {
              return (
                <div key={week_index} className={`${styles.ultBox} ${styles.eventItem}`}>
                  {this.event_view(project.eventList, week, project)}
                </div>
              );
            })}
        </div>
        {project.roleList &&
          project.roleList.map((role, role_index) => {
            return (
              <div className={styles.people} key={role_index}>
                <div className={`${styles.labelBox} ${styles.roleBox}`}>{role.roleName}</div>
                {weekList &&
                  weekList.map((week, week_index) => {
                    return (
                      <div key={week_index} className={styles.ultBox}>
                        {this.people_view(role, week, project)}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    );
  }
}
