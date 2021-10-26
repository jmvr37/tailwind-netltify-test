import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h1 class="font-mono text-blue-300">Hello, React!</h1>
      </div>
    )
  }
}

export default App;
