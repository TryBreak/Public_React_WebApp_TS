export const res_dispose = data => {
  switch (data.code) {
    case 'error':
      console.error(data.message);
      break;

    default:
      console.info(data.message);
      break;
  }
  return data;
};
