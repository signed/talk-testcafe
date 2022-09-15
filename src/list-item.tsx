import * as React from 'react'

export class ListItem extends React.Component<{ content: string }> {
  public render() {
    return <li>{this.props.content}</li>
  }
}
