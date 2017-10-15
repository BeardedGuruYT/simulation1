import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShelfA from './ShelfA';
import ShelfB from './ShelfB';
import ShelfC from './ShelfC';
import ShelfD from './ShelfD';
import Home from './Home'
import BinDetails from './Bin_Details'


export default (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/bins/shelfA' component={ShelfA}/>
        <Route path='/bins/shelfB' component={ShelfB}/>
        <Route path='/bins/shelfC' component={ShelfC}/>
        <Route path='/bins/shelfD' component={ShelfD}/> 
        <Route exact path='/bins/:shelf/:bin' component={BinDetails}/>
    </Switch>
)
