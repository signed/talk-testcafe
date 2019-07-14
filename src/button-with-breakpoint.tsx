import * as React from 'react';

export default class ButtonWithBreakpoint extends React.Component {

  public render() {
    return (
      <button id="button-to-trigger-breakpoint" onClick={() => this.handleClick()}>Click to trigger breakpoint</button>
    );
  }

  private handleClick() {
    console.log('set breakpoint here');
  }
}
