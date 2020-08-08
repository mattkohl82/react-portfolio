import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {

    return (
        <Navbar bg="light" variant="light">
            <Link to="/">
                <Navbar.Brand>
                   <img src="https://img.icons8.com/nolan/70/cat.png" alt="Cat"/> Matthew Kohl Portfolio 
                </Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
                <Link className='nav-link' to="/"><img src="https://img.icons8.com/nolan/50/about.png" alt='about' />About</Link>
                <Link className='nav-link' to="portfolio"><img src="https://img.icons8.com/nolan/50/contract-job.png" alt='portfolio'/>Portfolio</Link>
                <Link className='nav-link' to="contact"><img src="https://img.icons8.com/nolan/50/contact-card.png" alt="contact"/>Contact</Link>
                <Link className='nav-link' to="resume"><img src="https://img.icons8.com/nolan/50/resume.png" alt="resume"/>Resume</Link>
            </Nav>
        </Navbar>

    )
}

export default Header

