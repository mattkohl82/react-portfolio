import React from 'react';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Main from './components/main'
import Footer from './components/Footer/index'


function App() {
  return (
    <div className='App'> 
      <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand>
            Matthew Kohl Portfolio
          </Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
            <Link className='nav-link' to="/">About</Link>
            <Link className='nav-link' to="portfolio">Portfolio</Link>
            <Link className='nav-link' to="contact">Contact</Link>
            <Link className='nav-link' to="resume">Resume</Link>
          </Nav>
      </Navbar>
      <div>  
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
