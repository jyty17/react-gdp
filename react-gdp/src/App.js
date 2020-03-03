import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {
      	// <header className="App-header">
       //    Header
       //  </header>
		  }	
      <div className="App-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
