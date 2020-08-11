import React from 'react'; 

// Individual projects
function Projects(props) {
    return (
        <div className="col-sm">
            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
            <img className="card-img-top" src={ props.img } alt="Card cap" />
                <div className="card-body">
                    <h3 className="card-title portfolio">{ props.name }</h3>
                    <a href={ props.github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                    <a href={ props.deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/money.png" alt="Deployed" className="icon"/></a>
                </div>
            </div>
        </div>
    );
}
  
  export default Projects;