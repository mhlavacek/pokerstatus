import * as React from 'react'
import { render } from 'react-dom'
import { App } from 'client/components/app'
import { App as AppData } from 'domain/app-state'

let apps: AppData[] = [
  { name: 'Investigator', status: 'WaitingOnThem' },
  { name: 'Prosecutor', status: 'WaitingOnUs' },
  { name: 'Civil', status: 'WaitingOnUs' },
  { name: 'Fartknocker', status: 'WaitingOnThem' }
];

if (localStorage.apps)
  apps = JSON.parse(localStorage.apps);

render(
  <App apps={apps} />,
  document.getElementById('root')
)