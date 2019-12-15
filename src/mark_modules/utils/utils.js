const fromatWeek = num => {
  let str = '';
  switch (Number(num)) {
    case 0:
      str = '周一';
      break;
    case 1:
      str = '周二';
      break;
    case 2:
      str = '周三';
      break;
    case 3:
      str = '周四';
      break;
    case 4:
      str = '周五';
      break;
    case 5:
      str = '周六';
      break;
    case 6:
      str = '周日';
      break;
    default:
      str = '';
      break;
  }
  return str;
};

export const getWeekTimeList = dateString => {
  const dateStringReg = /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/;

  if (dateString.match(dateStringReg)) {
    const presentDate = new Date(dateString);
    const today = presentDate.getDay() === 0 ? 7 : presentDate.getDay();

    return Array.from(new Array(7), (val, index) => {
      const dayNum = (today - index - 1) * 24 * 60 * 60 * 1000;
      return {
        date: formatDate(new Date(presentDate.getTime() - dayNum)),
        week: fromatWeek(index),
      };
    });
  } else {
    throw new Error("dateString should be like 'yyyy-mm-dd' or 'yyyy/mm/dd'");
  }

  function formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
};

export const formateDate = (inputTime, isSec) => {
  const date = new Date(inputTime);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `0${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `0${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  if (isSec) {
    return `${y}-${m}-${d} ${h}:${minute}:${second}`;
  } else {
    return `${y}-${m}-${d}`;
  }
};

export const esayDate = param => {
  if (Array.isArray(param)) {
    const arr = [];
    for (let i = 0; i < param.length; i++) {
      const el = param[i];
      arr.push(esayFun(el));
    }
    return arr;
  } else {
    return esayFun(param);
  }

  function esayFun(time) {
    const timeArr = time.split('-');
    return `${Number(timeArr[0])}-${Number(timeArr[1])}-${Number(timeArr[2])}`;
  }
};

export const rmArrByEl = (arrOld, val) => {
  const arr = [...arrOld];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      break;
    }
  }
  return arr;
};

export const pureData = data => {
  return JSON.parse(JSON.stringify(data));
};

export const filterPeopleList = (role, week, peopleList) => {
  // console.log('role', role);
  // console.log('week', week);
  // console.log('peopleList', peopleList);
  // 当前已经存在的人员id
  const peopleID_arr = [];
  const { memberList } = role;

  for (let i = 0; i < memberList.length; i++) {
    const el = memberList[i];
    if (esayDate(el.time).indexOf(esayDate(week.date)) > -1) {
      // 当天已经存在的人
      peopleID_arr.push(el.id);
    }
  }
  const returnArr = [];
  for (let i = 0; i < peopleList.length; i++) {
    const el = peopleList[i];
    if (el.positionId === role.roleId) {
      const list = el.planPeople;
      for (let j = 0; j < list.length; j++) {
        const people = list[j];
        if (peopleID_arr.indexOf(people.id) > -1) {
          //
        } else {
          returnArr.push(people);
        }
      }
      break;
    }
  }
  return returnArr;
};
