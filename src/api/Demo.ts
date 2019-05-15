import { ajax } from '@/utils/http';
import store from 'store';

export const userLogin = async ( data: any ) => {
  const req = await ajax( {
    url: '/api/passport/login',
    data,
    method: 'post',
  } );
  store.set( 'token', req.data.token );
  return req;
};

export const getBannerList = ( data: any ) => {
  return ajax( {
    url: '/api/u/home/banner/list',
    data,
    method: 'get',
  } );
};

export const getTestToken = ( data: any ) => {
  return ajax( {
    url: '/test/user/token',
    data,
    method: 'get',
  } );
};
