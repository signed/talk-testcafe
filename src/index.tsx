import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './application';

// @ts-ignore
window.globalStateToProveAPoint = {
  'value': 'initial'
};

const app = (<Application/>);
ReactDOM.render(
  app,
  document.getElementById('root'),
);
