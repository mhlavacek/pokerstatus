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
      <div className='status-column'>Us</div>
      <div className='status-column'>Them</div>
      {this.props.apps.map((app) => {
        var chipToggleClass = app.status == 'WaitingOnUs' ? 'chip--us' : 'chip--them';
        return <div key={app.name} className='product'>
          <div key='name' className={'app-name'}>{app.name}</div>
          <div key='chip' className={`chip ${chipToggleClass}`} onClick={() => this.toggleStatus(app.name)}></div>
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