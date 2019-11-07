import * as React from 'react';

export class Stacktrace extends React.Component<{}, {}> {

  constructor(props: {}, private message: string = 'you asked for it') {
    super(props);
    this.triggerError = this.triggerError.bind(this);
  }

  render() {
    return <div>
      <button onClick={this.triggerError}>trigger error</button>
    </div>;
  }

  private triggerError() {
    this.very();
  }

  private very() {
    this.deep();
  }

  private deep() {
    this.callstack();
  }

  private callstack() {
    throw new Error(this.message);
  }
}
