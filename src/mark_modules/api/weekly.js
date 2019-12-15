import { ajax_json } from '@/mark_modules/utils/http';

/**

  从项目中新增和删除人员接口
  http://192.168.2.50:8080/api/plan/delete

  所有人员的列表按角色分类接口
  http://192.168.2.50:8080/api/user/resourcePlanList

  默认事件列表
  http://192.168.2.50:8080/api/project/eventList
  添加事件
  http://192.168.2.50:8080/api/project/addEvent
  删除事件
  http://192.168.2.50:8080/api/project/deleteEvent/{事件id}
  修改事件
  http://192.168.2.50:8080/api/project/updateEvent/

  日期接口
  http://localhost:8080/api/planDate/list?week=0

*/
export const getWeekData = data => {
  return ajax_json({
    url: '/api/project/scheduling',
    data,
    method: 'get',
  });
};

export const getPeopleList = data => {
  return ajax_json({
    url: '/api/user/resourcePlanList',
    data,
    method: 'get',
  });
};

export const addMember = (data, type) => {
  if (type) {
    return ajax_json({
      url: '/api/plan/create',
      data,
      method: 'post',
    });
  } else {
    return ajax_json({
      url: '/api/plan/delete',
      data,
      method: 'post',
    });
  }
};

export const getDefEventList = data => {
  return ajax_json({
    url: '/api/project/eventList',
    data,
    method: 'get',
  });
};
export const addEven = data => {
  return ajax_json({
    url: '/api/project/addEvent',
    data,
    method: 'post',
  });
};
export const rmEvent = data => {
  return ajax_json({
    url: `/api/project/deleteEvent`,
    data,
    method: 'post',
  });
};
