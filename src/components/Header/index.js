import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Nav/index'
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return (
        <Navbar className='header'>
            <Link to="/">
                <Navbar.Brand>
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/70/cat.png" alt="Cat"/> 
                        Matthew Kohl Portfolio
                    </p>
                </Navbar.Brand>
            </Link>
            <Navigation />

            
        </Navbar>

    )
}

export default Header

