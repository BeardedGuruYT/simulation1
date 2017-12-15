import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';


// COMP 42F 42G
export default (
    <Switch>
        <Route exact path='/' component={CompA} />
        <Route path='/compB' component={CompB} />
        <Route path='/compC' component={CompC} />
       
    </Switch>
)