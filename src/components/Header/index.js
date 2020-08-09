import React from 'react'
import { HashRouter } from 'react-router-dom'
import Navigation from '../Nav/index'
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return (
        <HashRouter>
            <Navbar className='header'>
                <a href="https://mattkohl82.github.io/react-portfolio/">
                    <Navbar.Brand>
                        <p className='navcolor'>
                            <img src="https://img.icons8.com/nolan/70/cat.png" alt="Cat"/> 
                            Matthew Kohl Portfolio
                        </p>
                    </Navbar.Brand>
                </a>
                <Navigation />
            </Navbar>
        </HashRouter>

    )
}

export default Header

