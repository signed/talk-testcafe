import * as React from 'react'
import { useState } from 'react'

const url = 'https://httpbin.org/user-agent'
const initialState = {
  status: -1,
  body: '',
}

export const RemoteCall = () => {
  const [state, setState] = useState(initialState)

  const executeRemoteCall = () =>
    fetch('https://httpbin.org/user-agent')
      .then(async (result) => {
        const status = result.status
        const body = await result.text()
        return setState({ status, body })
      })
      .catch((error) => setState({ status: error.status, body: '' }))

  const { body, status } = state
  return (
    <div>
      <button onClick={executeRemoteCall} data-automation-id="remote-call__execute">
        execute remote call
      </button>
      to{' '}
      <a href={url} target="_blank">
        {url}
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
