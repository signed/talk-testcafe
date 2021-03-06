import * as React from 'react';

interface Props {
  localStorageKey: string;
}

interface State {
  value: string;
}

export default class LocalStorageDisplay extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {value: ''};
  }

  public render(): React.ReactNode {
    const keyValue = this.state.value === '' ? (<span>nothing there</span>) :
      (<React.Fragment>
        {this.props.localStorageKey}: <span data-automation-id="value-from-local-storage">{this.state.value}</span>
      </React.Fragment>);

    return (
      <div>
        <button data-automation-id="load-from-local-storage" type="button" onClick={() => this.loadValue()}>
          load value from local storage
        </button>
        {keyValue}
      </div>
    );
  }

  private loadValue() {
    const value = window.localStorage.getItem(this.props.localStorageKey);
    if (value) {
      this.setState({value});
    }
  }
}
