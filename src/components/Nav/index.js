import React from 'react'
// import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return (
    
        <Nav variant="pills" defaultActiveKey="/about" className="row navigation" id="navigation">
            <Nav.Link className='nav-link' href="/mattkohl82/#/about">
                <p className='navcolor'>
                    <img src="https://img.icons8.com/nolan/50/about.png" alt='about' />
                    About
                </p>
            </Nav.Link>
            <Nav.Link className='nav-link' eventKey="/portfolio" href="/mattkohl82/#/portfolio">
                <p className='navcolor'>
                    <img src="https://img.icons8.com/nolan/50/contract-job.png" alt='portfolio'/>
                    Portfolio
                </p>
            </Nav.Link>
            <Nav.Link className='nav-link' eventKey="/contact" href="/mattkohl82/#/contact">
                <p className='navcolor'>
                    <img src="https://img.icons8.com/nolan/50/contact-card.png" alt="contact"/>
                    Contact
                </p>
            </Nav.Link>
            <Nav.Link className='nav-link' eventKey="/resume" href="/mattkohl82/#/resume">
                <p className='navcolor'>
                    <img src="https://img.icons8.com/nolan/50/resume.png" alt="resume"/>
                    Resume
                </p>
            </Nav.Link>
        </Nav>
    )
}

export default Navigation
