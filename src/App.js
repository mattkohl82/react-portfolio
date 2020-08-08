import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
import Main from './components/main'
import Footer from './components/Footer/index'
import Header from './components/Header/index'


function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container' style={{ marginBottom:'150px' }}>
        <Main />
      </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
