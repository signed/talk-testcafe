import * as React from 'react'

export const Stacktrace = () => (
  <div>
    <button onClick={triggerError}>trigger error</button>
  </div>
)

const triggerError = () => {
  very()
}

const very = () => {
  deep()
}

const deep = () => {
  callstack()
}

const callstack = () => {
  throw new Error('you asked for it')
}
