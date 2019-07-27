import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Pages from './components/Pages/Pages';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pages />
      <Footer />

    </div>
  );
}

export default App;
