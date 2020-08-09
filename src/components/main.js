import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import About from './About/index'
import Contact from './Contact/index'
import Resume from './Resume/index'
import Portfolio from './Portfolio/index'




const Main = () => (
    <Switch>
        <Route exact path="/react-portfolio/" render={() => (<Redirect to="/about"/>)}/>
        <Route path='/react-portfolio/contact' component={Contact} />
        <Route path="/react-portfolio/about" component={About}/>
        <Route path='/react-portfolio/resume' component={Resume} />
        <Route path='/react-portfolio/portfolio' component={Portfolio} />
    </Switch>
)

export default Main