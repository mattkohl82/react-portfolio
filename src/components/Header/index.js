import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from '../Nav/index'
import Navbar from 'react-bootstrap/Navbar';
import About from '../About/index'
import Contact from '../Contact/index'
import Resume from '../Resume/index'
import Portfolio from '../Portfolio/index'

function Header() {

    return (
        <HashRouter>
            <Navbar className='header'>
                <a href="https://mattkohl82.github.io/react-portfolio/">
                    <Navbar.Brand>
                        <p className='navcolor'>
                            <img src="https://img.icons8.com/nolan/70/cat.png" alt="Cat"/> 
                            Matthew Kohl Portfolio
                        </p>
                    </Navbar.Brand>
                </a>
                <Navigation />
            </Navbar>

            <div className='container' style={{ marginBottom:'150px' }}>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                    <Route path='/contact' component={Contact} />
                    <Route path="/about" component={About}/>
                    <Route path='/resume' component={Resume} />
                    <Route path='/portfolio' component={Portfolio} />
                </Switch>
            </div>
        </HashRouter>

    )
}

export default Header

