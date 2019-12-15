import axios from 'axios';
import Qs from 'qs';
import store from './store';
import { res_dispose } from './res_dispose';

// import { baseUrl } from '@/config/baseUrl';

const { origin } = window.location;

const axios_baseURL = origin;
if (origin.includes('localhost')) {
  // axios_baseURL = baseUrl;
} else if (origin.includes('xxxx')) {
  // baseUrl = '';
} else if (origin.includes('xxxx')) {
  // baseUrl = '';
}

const service = axios.create();
const $axios_set_default = () => {
  service.defaults.baseURL = axios_baseURL; // 默认请求的 baseUrl
  service.defaults.timeout = 8000; // 超时 8 秒
  // 请求拦截
  service.interceptors.request.use(
    config => {
      // console.info('请求开始');
      // Toast.loading('请求中...');
      return config;
    },
    error => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  // 响应拦截
  service.interceptors.response.use(
    response => {
      // console.info('请求结束');
      // Toast.hide();
      return res_dispose(response);
    },
    error => {
      return Promise.reject(error);
    }
  );
};
$axios_set_default();
// 带默认设置的 axios 原生请求
const ajax = param => {
  const config = {
    headers: {
      Authorization: `Bearer ${store.get('token')}`,
    },
    ...param,
  };
  // 请求参数转换
  if (config.method === 'get' || !config.method) {
    config.params = config.data;
    delete config.data;
  }
  return service(config);
};

const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1NzU2MTMzMjc2MjUsImV4cCI6MTU3NjIxODEyN30.UmWDFumVicwJGL3ZeejPYlprFIvXILAFFoVgariceiPweZhUVbObc2rZNFqYvHeBSKH4FIqcKnPt-hX3S_LaJQ';

// json格式的请求
const ajax_json = param => {
  const config = {
    headers: {
      Authorization: `Bearer ${store.get('token')}`,
    },
    ...param,
  };
  // 请求参数转换
  if (config.method === 'get' || !config.method) {
    config.params = config.data;
    delete config.data;
  }
  return service(config);
};

// formData格式的请求
const ajax_form = param => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.get('token')}`,
    },

    ...param,
  };
  // 请求参数转换
  if (config.method === 'get' || !config.method) {
    config.params = config.data;
    delete config.data;
  }
  return service(config);
};

export { $axios_set_default, ajax, ajax_json, ajax_form, axios };
