import * as React from 'react'
import { useState } from 'react'

const maxTimeoutInMilliseconds = 2900
const initialState = {
  reveal: false,
  timeout: Math.floor(Math.random() * maxTimeoutInMilliseconds) + 1,
}

export const ChangeWithRandomDelay = () => {
  const [state, setState] = useState(initialState)

  const scheduleReveal = () => {
    const reveal = () => setState((cur) => ({ ...cur, reveal: true }))
    window.setTimeout(reveal, state.timeout)
  }

  return (
    <div>
      <button onClick={scheduleReveal} data-automation-id="change-with-random-delay__reveal">
        trigger reveal in {state.timeout} ms
      </button>
      <span data-automation-id="change-with-random-delay__surprise">{state.reveal ? 'revealed' : 'hidden'}</span>
    </div>
  )
}
