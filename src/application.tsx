import * as React from 'react';
import ChangeWithRandomDelay from './change-with-random-delay';
import List from './list';
import RemoteCall from './remote-call';
import LocalStorageDisplay from './local-storage-display';
import TextInputExamples from './text-input-examples';

export default class Application extends React.Component {
  public render(): React.ReactNode {
    return [
      <div>Hello World</div>,
      <List/>,
      <RemoteCall/>,
      <LocalStorageDisplay localStorageKey="key"/>,
      <TextInputExamples/>,
      <ChangeWithRandomDelay/>
    ];
  }
}
