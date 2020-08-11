import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return (
    
        <Nav variant='pills' className='mr-auto'>
            <Nav.Link  eventKey="/about">
                <Link className='nav-link' to="/about">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/about.png" alt='about' />
                        About
                    </p>
                </Link>
            </Nav.Link>
            <Nav.Link  eventKey="/portfolio">
                <Link className='nav-link' to="/portfolio">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/contract-job.png" alt='portfolio'/>
                        Portfolio
                    </p>
                </Link>
            </Nav.Link>
            <Nav.Link eventKey="/contact">
                <Link  className='nav-link' to="/contact">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/contact-card.png" alt="contact"/>
                        Contact
                    </p>
                </Link>
            </Nav.Link>
            <Nav.Link  eventKey="/resume">
                <Link className='nav-link' to="/resume">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/nolan/50/resume.png" alt="resume"/>
                        Resume
                    </p>
                </Link>
            </Nav.Link>
        </Nav>
        )
}





    
export default Navigation
