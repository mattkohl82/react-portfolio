import React, { Component } from 'react';
import Projects from '../../components/Project'
// import portfolio from '../../portfolio.json'

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
        }

    ]

    class Portfolio extends Component {
        render() {
            function Project(props) {
                return <div className="wrapper">{props.children}</div>;
            }
            return (
                <div>
                    <div className="container" style={{ marginTop: '10px' }}>
                    <img style={{ marginTop: '3vh' }} src="https://img.icons8.com/nolan/125/contract-job.png" alt='portfolio'/>
                    <h1>Portfolio</h1>
                        <div className="row">
                                {<Project>
                                    
                                        {projects.map((project) => (
                                        <Projects key={project.id} name={project.name} img={project.img}  github={project.github} deployed={project.deployed} tools={project.tools}/>
                                        ))}
                                    
                                </Project> }
                        </div>
                    </div>
                </div>
                
            )
        }
    }

export default Portfolio

