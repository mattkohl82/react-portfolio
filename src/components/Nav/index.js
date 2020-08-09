import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return (
    
            <Nav className="mr-auto">
                <Link className='nav-link' to="/about">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/about.png" alt='about' />
                        About
                    </p>
                </Link>
                <Link className='nav-link' to="/portfolio">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/contract-job.png" alt='portfolio'/>
                        Portfolio
                    </p>
                </Link>
                <Link className='nav-link' to="/contact">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/contact-card.png" alt="contact"/>
                        Contact
                    </p>
                </Link>
                <Link className='nav-link' to="/resume">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/resume.png" alt="resume"/>
                        Resume
                    </p>
                </Link>
            </Nav>


    )
}

export default Navigation
