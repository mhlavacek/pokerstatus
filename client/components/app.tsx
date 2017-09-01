import * as  React from 'react';

import { App as AppData, Status } from 'domain/app-state'

interface Props { 
  apps: AppData[]
}
interface State { 
  apps: AppData[]
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = this.getState(props);
  }
  render() {
    return <div>
      <div style={{ width: '100px', display: 'inline-block' }}></div>
      <div style={{ width: '50px', display: 'inline-block' }}>Us</div>
      <div style={{ width: '50px', display: 'inline-block' }}>Them</div>
      {this.props.apps.map((app) => {
        let waitingForUsVisible = app.status == 'WaitingOnUs' ? 'visible' : '';
        let waitingForThemVisible = app.status == 'WaitingOnThem' ? 'visible': '';

        return <div key={app.name}>
          <div key='name' style={{ width: '100px', display: 'inline-block' }}>{app.name}</div>
          <div key='waitingForUs' className={`waitingForUs ${waitingForUsVisible}`} onClick={() => this.toggleStatus(app.name)}></div>
          <div key='waitingForThem' className={`waitingForThem ${waitingForThemVisible}`} onClick={() => this.toggleStatus(app.name)}></div>
        </div>
      })}
    </div>
  }
  getState = (props: Props): State => {
    return { 
      apps: props.apps
    };
  }
  toggleStatus = (name: string) => {
    let state = Object.assign({}, this.state);
    let index = state.apps.findIndex(a => a.name == name);

    if (state.apps[index].status == 'WaitingOnThem')
      state.apps[index].status = 'WaitingOnUs';
    else
      state.apps[index].status = 'WaitingOnThem';
    this.setState(state);
    localStorage.apps = JSON.stringify(state.apps);
  }
  componentWillReceiveProps(nextProps: Props) {
    this.setState(this.getState(nextProps));
  }
}