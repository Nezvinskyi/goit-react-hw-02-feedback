import React, { Component } from 'react';
import Layout from './components/Layout';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return <Layout></Layout>;
  }
}

export default App;
