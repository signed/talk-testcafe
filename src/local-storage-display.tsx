import { useState } from 'react'
import * as React from 'react'

interface Props {
  localStorageKey: string
}

interface State {
  value: string
}

export const LocalStorageDisplay = (props: Props) => {
  const [state, setState] = useState<State>({ value: '' })

  const loadValue = () => {
    const value = window.localStorage.getItem(props.localStorageKey)
    if (value) {
      setState({ value })
    }
  }

  const keyValue =
    state.value === '' ? (
      <span>nothing there</span>
    ) : (
      <React.Fragment>
        {props.localStorageKey}: <span data-automation-id="value-from-local-storage">{state.value}</span>
      </React.Fragment>
    )

  return (
    <div>
      <button data-automation-id="load-from-local-storage" type="button" onClick={loadValue}>
        load value from local storage
      </button>
      {keyValue}
    </div>
  )
}
