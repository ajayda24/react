import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Application from './Components/Application.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Application />
      <Footer />
    </div>
  );
}

export default App;
