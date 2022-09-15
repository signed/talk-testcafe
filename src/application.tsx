import * as React from 'react'
import BorderWithDescription from './BorderWithDescription'
import ButtonWithBreakpoint from './button-with-breakpoint'
import ChangeWithRandomDelay from './change-with-random-delay'
import List from './list'
import LocalStorageDisplay from './local-storage-display'
import RemoteCall from './remote-call'
import TextInputExamples from './text-input-examples'

export const Application = () => (
  <>
    <div>Hello World</div>
    <BorderWithDescription>
      <List />
    </BorderWithDescription>
    <BorderWithDescription>
      <RemoteCall />
    </BorderWithDescription>
    <BorderWithDescription>
      <LocalStorageDisplay localStorageKey="key" />
    </BorderWithDescription>
    <BorderWithDescription>
      <TextInputExamples />
    </BorderWithDescription>
    <BorderWithDescription>
      <ChangeWithRandomDelay />
    </BorderWithDescription>
    <BorderWithDescription>
      <ButtonWithBreakpoint />
    </BorderWithDescription>
  </>
)
