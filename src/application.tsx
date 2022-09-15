import * as React from 'react'
import { BorderWithDescription } from './BorderWithDescription'
import { ButtonWithBreakpoint } from './button-with-breakpoint'
import { ChangeWithRandomDelay } from './change-with-random-delay'
import { List } from './list'
import { LocalStorageDisplay } from './local-storage-display'
import { RemoteCall } from './remote-call'
import { TextInputExample } from './text-input-examples'

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
      <TextInputExample />
    </BorderWithDescription>
    <BorderWithDescription>
      <ChangeWithRandomDelay />
    </BorderWithDescription>
    <BorderWithDescription>
      <ButtonWithBreakpoint />
    </BorderWithDescription>
  </>
)
