import React, { Component } from 'react';

    const projects = [
        {
            name: 'Budget Tracker',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/budgettracker.jpg?raw=true',
            github: 'https://github.com/mattkohl82/budget-tracker',
            deployed: 'https://budget-tracker-82.herokuapp.com/'
        },
        {
            name: 'Deep Thoughts',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/deepthoughts.jpg?raw=true',
            github: 'https://github.com/mattkohl82/deep-thoughts',
            deployed: 'https://deep-thoughts-85.herokuapp.com/'
        },
        {
            name: 'Drink and Think',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/drinkandthink.jpg?raw=true',
            github: 'https://github.com/mattkohl82/drink-and-think',
            deployed: 'https://mattkohl82.github.io/drink-and-think/'
        },
        {
            name: 'Grade Book',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/gradebook.jpg?raw=true',
            github: 'https://github.com/mattkohl82/Teachers-Grading-Book.git',
            deployed: 'https://calm-plateau-40957.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/notetaker.jpg?raw=true',
            github: 'https://github.com/mattkohl82/note-taker',
            deployed: 'https://serene-escarpment-48950.herokuapp.com/'
        },
        {
            name: 'Password',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/password.jpg?raw=true',
            github: 'https://github.com/mattkohl82/RanPassGen',
            deployed: 'https://mattkohl82.github.io/RanPassGen/'
        },
        {
            name: 'Run Buddy',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/runbuddy.jpg?raw=true',
            github: 'https://github.com/mattkohl82/run-buddy',
            deployed: 'https://mattkohl82.github.io/run-buddy/'
        },
        {
            name: 'Tech Blog',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/techblog.jpg?raw=true',
            github: 'https://github.com/mattkohl82/Tech-blog',
            deployed: 'https://young-brook-06405.herokuapp.com/'
        },
        {
            name: 'Weather Tracker',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/weather.jpg?raw=true',
            github: 'https://github.com/mattkohl82/weather-dashboard',
            deployed: 'https://mattkohl82.github.io/weather-dashboard/'
        },
        {
            name: 'Work Scheduler',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/work.jpg?raw=true',
            github: 'https://github.com/mattkohl82/work-day-scheduler',
            deployed: 'https://mattkohl82.github.io/work-day-scheduler/'
        },
        {
            name: 'Pen Name',
            img: 'https://github.com/mattkohl82/react-portfolio/blob/master/src/img/penname.jpg?raw=true',
            github: 'https://github.com/mattkohl82/pen-name',
            deployed: 'https://protected-harbor-84928.herokuapp.com/'

        }

    ]

    class Portfolio extends Component {
        render() {
            
            return (
                <div>
                <div className="container" style={{ marginTop: '10px' }}>
                <img style={{ marginTop: '3vh' }} src="https://img.icons8.com/nolan/125/contract-job.png" alt='portfolio'/>
                <h1>Portfolio</h1>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[0].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[0].name }</h3>
                                    <a href={ projects[0].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[0].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/money.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[1].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[1].name }</h3>
                                    <a href={ projects[1].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[1].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/mental-state.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[2].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[2].name }</h3>
                                    <a href={ projects[2].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[2].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/coconut-cocktail.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="container" style={{ marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[3].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[3].name }</h3>
                                    <a href={ projects[3].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[3].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/book.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[4].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[4].name }</h3>
                                    <a href={ projects[4].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[4].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/note.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[5].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[5].name }</h3>
                                    <a href={ projects[5].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[5].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/forgot-password.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="container" style={{ marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[6].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[6].name }</h3>
                                    <a href={ projects[6].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[6].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/running.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[7].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[7].name }</h3>
                                    <a href={ projects[7].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[7].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/bluestacks.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[8].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[8].name }</h3>
                                    <a href={ projects[8].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[8].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/partly-cloudy-day.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ marginTop: '10px'}}>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[9].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[9].name }</h3>
                                    <a href={ projects[9].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[9].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/work.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: '18rem', borderColor: 'var(--paradise-pink)', borderStyle: 'solid', borderWidth: '2px' }}>
                                <img className="card-img-top" src={projects[10].img} alt="Card cap" />
                                <div className="card-body">
                                    <h3 className="card-title portfolio">{ projects[10].name }</h3>
                                    <a href={ projects[10].github } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/60/github.png" alt="Github" className="icon"/></a>
                                    <a href={ projects[10].deployed } target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/pen.png" alt="Deployed" className="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            )
        }
    }

export default Portfolio

