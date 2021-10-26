import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <h1 class="font-mono text-blue-300">Hello, React!</h1>
      </div>
    )
  }
}

export default App;
