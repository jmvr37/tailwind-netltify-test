import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Profile />
        <Skills />
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default App;
