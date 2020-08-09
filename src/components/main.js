import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import About from './About/index'
import Contact from './Contact/index'
import Resume from './Resume/index'
import Portfolio from './Portfolio/index'




const Main = () => (
    <Switch>
        <Route exact path="/react-portfolio/" render={() => (<Redirect to="/about"/>)}/>
        <Route path='/contact' component={Contact} />
        <Route path="/about" component={About}/>
        <Route path='/resume' component={Resume} />
        <Route path='/portfolio' component={Portfolio} />
    </Switch>
)

export default Main