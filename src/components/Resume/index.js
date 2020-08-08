import React from 'react'; 

function Resume() {

    return (
        <div>
            <img style={{ marginTop: '3vh'}} src="https://img.icons8.com/nolan/125/resume.png" alt="resume"/>
            <h1>Resume</h1>

            <div className='justify-content-center'>
            <div>
                <h2>Front End</h2>
                <p>
                    HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, IndexedDB
                </p>
            </div>
    
            <div>
                <h2>Back End</h2>
                <p>
                    Node.js, Express.js, SQL, Sequelize, NoSQL, API's,
                </p>
            </div>
            <div>
                <h3>Downdown Resume</h3>
                <a href='react-portfolio\src\assets\resume.pdf'>
                    <img src="https://img.icons8.com/nolan/64/linkedin.png" alt='linkedin'/>
                </a>
                
            </div>
            
        </div>
        </div>

    )
}

export default Resume
