import * as React from 'react';

export default class ChangeWithRandomDelay extends React.Component<{}, { reveal: boolean, timeout: number }> {
  constructor(props: any) {
    super(props);
    const maxTimeoutInMilliseconds = 2900;
    this.state = {
      reveal: false,
      timeout: Math.floor(Math.random() * maxTimeoutInMilliseconds) + 1
    };
  }

  public render() {
    return (
      <div>
        <button onClick={() => this.scheduleReveal()} data-automation-id="change-with-random-delay__reveal">trigger reveal in {this.state.timeout} ms</button>
        <span data-automation-id="change-with-random-delay__surprise">{this.state.reveal ? 'revealed' : 'hidden'}</span>
      </div>
    );
  }

  private scheduleReveal() {
    window.setTimeout(() => this.reveal(), this.state.timeout);
  }

  private reveal() {
    this.setState({ reveal: true });
  }
}
