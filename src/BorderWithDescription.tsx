import type { CSSProperties, PropsWithChildren } from 'react'
import * as React from 'react'

export const BorderWithDescription = (props: PropsWithChildren) => {
  const borderStyle: CSSProperties = {
    border: 'black 2px solid',
    borderRadius: '5px',
    margin: '10px 0px',
    padding: '10px',
  }
  return <div style={borderStyle}>{props.children}</div>
}
