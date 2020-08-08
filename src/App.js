import React from 'react';
// import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Main from './components/main'
import Footer from './components/Footer/index'
import Header from './components/Header/index'


function App() {
  return (
    <div className='App' style= {{ position: 'relative', minHeight: '100vh' }}> 
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}

export default App;
