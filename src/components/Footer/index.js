import React from 'react';

function Footer() {   
    return (
    <div className="footer justify-content-between" id="footer" style={{ position: 'fixed', bottom: '0', width: '100%', padding: '2px', marginTop: '50px' }}>
        <div style={{ float:'left'}}>
            <a href="https://github.com/mattkohl82" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
            <a href="https://linkedin.com/in/matthewkohl85" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/linkedin.png" alt="LinkedIn" className="icon"/></a>
            <a href="https://twitter.com/ThatBoyMufen" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/twitter.png" alt="Twitter" className="icon"/></a>
        </div>
        <div>
            <h4 style={{ float:'right'}}>
            By Matthew Kohl with <img id="react-icon" src="https://img.icons8.com/dusk/64/000000/react.png" alt="React"/>
            </h4>
        </div>
        
        
    </div>
    )
}

export default Footer;