import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Application from './application';

// @ts-ignore
window.globalStateToProveAPoint = {
  'value': 'initial'
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render((<Application/>))

console.log('hello testcafe')
