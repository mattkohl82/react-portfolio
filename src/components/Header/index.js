import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
            <Nav className="mr-auto">
                <Link className='nav-link' to="/">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/about.png" alt='about' />
                        About
                    </p>
                </Link>
                <Link className='nav-link' to="portfolio">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/contract-job.png" alt='portfolio'/>
                        Portfolio
                    </p>
                </Link>
                <Link className='nav-link' to="contact">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/contact-card.png" alt="contact"/>
                        Contact
                    </p>
                </Link>
                <Link className='nav-link' to="resume">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/resume.png" alt="resume"/>
                        Resume
                    </p>
                </Link>
            </Nav>
        </Navbar>

    )
}

export default Header

