import * as React from 'react';
import ChangeWithRandomDelay from './change-with-random-delay';
import List from './list';
import RemoteCall from './remote-call';
import LocalStorageDisplay from './local-storage-display';
import TextInputExamples from './text-input-examples';
import ButtonWithBreakpoint from './button-with-breakpoint';
import BorderWithDescription from './BorderWithDescription';

export default class Application extends React.Component {
  public render(): React.ReactNode {
    return [
      <div>Hello World</div>,
      <BorderWithDescription>
        <List/>
      </BorderWithDescription>,
      <BorderWithDescription>
        <RemoteCall/>
      </BorderWithDescription>,
      <BorderWithDescription>
        <LocalStorageDisplay localStorageKey="key"/>
      </BorderWithDescription>,
      <BorderWithDescription>
        <TextInputExamples/>
      </BorderWithDescription>,
      <BorderWithDescription>
        <ChangeWithRandomDelay/>
      </BorderWithDescription>,
      <BorderWithDescription>
        <ButtonWithBreakpoint/>
      </BorderWithDescription>
    ];
  }
}
