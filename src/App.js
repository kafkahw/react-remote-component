import React, { Component } from 'react';

import { loadRemoteComponent } from './utils';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  componentDidMount() {
    loadRemoteComponent('/lib/Greeting.js')
      .then(Greeting => this.setState({ component: Greeting }));
  }

  render() {
    const Hi = this.state.component || 'Hi';
    return (
      <div className="App">
        {this.state.component ? <Hi /> : <h1>This is a test App</h1>}
      </div>
    );
  }
}

export default App;
