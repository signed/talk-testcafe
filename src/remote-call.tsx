import * as React from 'react'

export class RemoteCall extends React.Component<unknown, { status: number; body: string }> {
  private readonly url = 'https://httpbin.org/user-agent'

  constructor(props: unknown) {
    super(props)
    this.state = {
      status: -1,
      body: '',
    }
  }

  public render() {
    const { body, status } = this.state
    return (
      <div>
        <button onClick={() => this.executeRemoteCall()} data-automation-id="remote-call__execute">
          execute remote call
        </button>
        to{' '}
        <a href={this.url} target="_blank">
          {this.url}
        </a>
        <p>
          Status:{' '}
          <span key="status" data-automation-id="remote-call__status">
            {status}
          </span>
        </p>
        <p>
          Body:{' '}
          <span key="body" data-automation-id="remote-call__body">
            {body}
          </span>
        </p>
      </div>
    )
  }

  private executeRemoteCall() {
    fetch('https://httpbin.org/user-agent')
      .then(async (result) => {
        const status = result.status
        const body = await result.text()
        return this.setState({ status, body })
      })
      .catch((error) => this.setState({ status: error.status }))
  }
}
