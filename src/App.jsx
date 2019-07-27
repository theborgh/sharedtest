import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Pages from './components/Pages/Pages';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        'Home',
        'About',
        'Skills',
        'Learning',
        'Projects',
      ],
    };
  }

  render() {
    const { pages } = this.state;
    return (
      <div className="App">
        <Navbar links={pages} />
        <Pages />
        <Footer />
      </div>
    );
  }
}

export default App;
