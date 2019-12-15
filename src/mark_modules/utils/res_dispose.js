import { message } from 'antd';

export const res_dispose = response => {
  const { data } = response;
  switch (data.code) {
    case 'OK':
      break;
    default:
      message.error(data.message);
      break;
  }
  return data;
};

export const xxx = () => {};
