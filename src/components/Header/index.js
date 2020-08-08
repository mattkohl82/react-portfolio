import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {

    return (
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

    )
}

export default Header

