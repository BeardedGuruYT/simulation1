import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC';
import ShelfD from './ShelfD';
import Home from './Home'


export default (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/shelfA' component={ShelfA}/>
        <Route path='/shelfB' component={ShelfB}/>
        <Route path='/shelfC' component={ShelfC}/>
        <Route path='/shelfD' component={ShelfD}/>
        
    </Switch>
)