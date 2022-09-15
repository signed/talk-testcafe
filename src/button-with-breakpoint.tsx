import * as React from 'react'

export const ButtonWithBreakpoint = () => {
  const handleClick = () => console.log('set breakpoint here')
  return (
    <button id="button-to-trigger-breakpoint" onClick={handleClick}>
      Click to trigger breakpoint
    </button>
  )
}
