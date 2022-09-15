import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Application } from './application'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.globalStateToProveAPoint = {
  value: 'initial',
}

const element = document.getElementById('root')
if (element === null) {
  throw new Error('did not fine root element')
}
const root = ReactDOM.createRoot(element)
root.render(<Application />)

console.log('hello testcafe')
