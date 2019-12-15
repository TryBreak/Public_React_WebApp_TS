import React from 'react';
import { Select, Icon, Button, Modal, Input } from 'antd';
import {
  getWeekData,
  getPeopleList,
  addMember,
  getDefEventList,
  addEven,
  rmEvent,
} from '@/mark_modules/api/weekly';
import styles from './index.module.less';
import {
  getWeekTimeList,
  formateDate,
  esayDate,
  rmArrByEl,
  pureData,
  filterPeopleList,
} from '@/mark_modules/utils/utils';

import { LeftBox, RightBox } from './module/Table';

const { TextArea } = Input;
const { Option } = Select;
// import { projectData } from './manage';
export default class extends React.Component {
  state = {
    weekList: [],
    projectList: [],
    peopleList: [],
    defEventList: [],
    addEaventModalStatus: false,
    eventStore: {
      projectId: '',
      date: '',
      desc: '',
    },
  };

  componentDidMount() {
    this.init();
    this.load();
  }

  load = () => {
    const _this = this;
    getPeopleList().then(res => {
      _this.setState({
        peopleList: res.data,
      });
    });
    const date = new Date();
    const weekDate = getWeekTimeList(formateDate(date));
    _this.setState({
      weekList: weekDate,
    });
    getDefEventList().then(res => {
      this.setState({
        defEventList: res.data,
      });
    });
  };

  init = () => {
    const date = new Date();
    const weekDate = getWeekTimeList(formateDate(date));
    const _this = this;
    getWeekData({
      startDate: weekDate[0].date,
      endDate: weekDate[weekDate.length - 1].date,
    }).then(res => {
      _this.setState({
        projectList: res.data,
      });
    });
  };

  rmPeople = people => {
    const _this = this;
    const obj = pureData(people);
    const timeArr = esayDate(obj.time);
    const initTime = esayDate(obj.initTime);
    obj.time = rmArrByEl(timeArr, initTime);
    delete obj.initTime;
    obj.userId = obj.id;
    delete obj.id;
    addMember(obj, false).then(res => {
      if (res.code === 'OK') {
        _this.init();
        this.back_people(obj);
      }
    });
  };

  rmEvent = el => {
    const obj = pureData(el);
    const _this = this;
    rmEvent(obj).then(res => {
      _this.init();
    });
    this.back_event(obj);
  };

  // 删除和新增event的回溯
  back_event = data => {
    const { projectList } = this.state;
    const project = pureData(projectList);
    let project_index = '';
    let event_index = '';
    for (let i = 0; i < project.length; i++) {
      const pj = project[i];
      if (pj.id === data.projectId) {
        project_index = i;
        const { eventList } = pj;
        for (let k = 0; k < eventList.length; k++) {
          const event = eventList[k];
          if (event.eventId === data.eventId) {
            event_index = k;
            break;
          }
        }
        break;
      }
    }
    project[project_index].eventList.splice(event_index, 1);
    this.setState({
      projectList: project,
    });
  };

  // 删除和新增人员的回溯
  back_people = data => {
    const { projectList } = this.state;
    const project = pureData(projectList);
    let project_index = '';
    let role_index = '';
    let people_index = '';
    for (let i = 0; i < project.length; i++) {
      const pj = project[i];
      if (pj.id === data.projectId) {
        project_index = i;
        const { roleList } = pj;
        for (let j = 0; j < roleList.length; j++) {
          const role = roleList[j];
          if (role.roleId === data.roleId) {
            role_index = j;
            const peopleList = role.memberList;
            for (let k = 0; k < peopleList.length; k++) {
              const people = peopleList[k];
              if (people.id === data.userId) {
                people_index = k;
                break;
              }
            }
            break;
          }
        }
        break;
      }
    }

    project[project_index].roleList[role_index].memberList[people_index] = data;
    this.setState({
      projectList: project,
    });
  };

  peopleChange = (e, role, week, project) => {
    const _this = this;
    const param = {
      projectId: project.id,
      roleId: role.roleId,
      userId: e,
      time: [week.date],
    };
    addMember(param, true).then(res => {
      if (res.code === 'OK') {
        _this.init();
      }
    });
  };

  // 添加事件

  showAddEaventModal = (week, project) => {
    this.setState({
      addEaventModalStatus: true,
      eventStore: { date: week.date, desc: '', projectId: project.id },
    });
  };

  submitEvent = () => {
    const _this = this;
    const { eventStore } = this.state;
    addEven(eventStore).then(res => {
      if (res.code === 'OK') {
        _this.init();
        _this.eventCancel();
      }
    });
  };

  eventCancel = () => {
    this.setState({
      addEaventModalStatus: false,
      eventStore: { projectId: '', date: '', desc: '' },
    });
  };

  render() {
    const {
      weekList,
      projectList,
      peopleList,
      addEaventModalStatus,
      eventStore,
      defEventList,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.TableBox}>
          <div className={styles.projectBox}>
            <div className={styles.leftBox}>asda asdasd</div>
            <div className={styles.rightBox}>
              <div className={styles.people}>
                <div className={`${styles.labelBox} ${styles.eventBox}`}>事件</div>
                {weekList &&
                  weekList.map((week, week_index) => {
                    return (
                      <div key={week_index} className={`${styles.ultBox} ${styles.eventItem}`}>
                        eee
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.TableBox}>
          {projectList &&
            projectList.map((project, project_index) => {
              return (
                <div key={project_index}>
                  <div className={styles.projectBox}>
                    <LeftBox project={project} />
                    <RightBox project={project} weekList={weekList} />
                  </div>
                </div>
              );
            })}
        </div>
        <Modal
          title="添加事件"
          visible={addEaventModalStatus}
          onOk={this.submitEvent}
          onCancel={this.eventCancel}
          footer={[
            <Button key="back" onClick={this.eventCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.submitEvent}>
              提交
            </Button>,
          ]}
        >
          {defEventList.map((event, event_index) => {
            return (
              <div
                className={styles.eventBoxModal}
                key={event_index}
                onClick={() => {
                  eventStore.desc = event.eventDesc;
                  this.setState({
                    eventStore,
                  });
                }}
              >
                {event.eventDesc}
              </div>
            );
          })}
          <TextArea
            value={eventStore.desc}
            rows={2}
            onChange={e => {
              eventStore.desc = e.target.value;
              this.setState({
                eventStore,
              });
            }}
          />
        </Modal>
      </div>
    );
  }
}
