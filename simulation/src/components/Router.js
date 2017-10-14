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
        <Route path='/home/shelf_a' component={ShelfA}/>
        <Route path='/home/shelf_b' component={ShelfB}/>
        <Route path='/home/shelf_c' component={ShelfC}/>
        <Route path='/home/shelf_d' component={ShelfD}/> 
    </Switch>
)
