import * as React from 'react';
import {CSSProperties} from 'react';

export default class BorderWithDescription extends React.Component {

  public render() {
    const borderStyle: CSSProperties = {
      border: 'black 2px solid',
      borderRadius: '5px',
      margin: '10px 0px',
      padding: '10px'
    };
    return (<div style={borderStyle}>
      {this.props.children}
    </div>);
  }
}
