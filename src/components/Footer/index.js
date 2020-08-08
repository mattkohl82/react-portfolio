import React from 'react';

function Footer() {   
    return (
    <div className="footer bg-light" id="footer" style={{ padding: '5px', marginTop: '10px' }}>
        <a href="https://github.com/mattkohl82" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/96/github.png" alt="Github" className="icon"/></a>
        <a href="https://linkedin.com/in/matthewkohl85" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/96/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href="https://twitter.com/ThatBoyMufen" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/96/twitter.png" alt="Twitter" className="icon"/></a>
        <p>
            By Matthew Kohl with <img id="react-icon" src="https://img.icons8.com/dusk/64/000000/react.png" alt="React"/>
        </p>
    </div>
    )
}

export default Footer;