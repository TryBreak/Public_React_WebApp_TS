/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-14 16:35:05
 * @LastEditTime: 2019-05-14 17:33:15
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it( 'renders without crashing', () => {
  const div = document.createElement( 'div' );
  ReactDOM.render( <App />, div );
  ReactDOM.unmountComponentAtNode( div );
} );
