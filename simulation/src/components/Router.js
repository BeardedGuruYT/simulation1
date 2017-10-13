import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Bin_holder from './Bin_holder';
import ShelfA from './ShelfA';


export default (
    <Switch>
        <Route path='/shelf_a' component={ShelfA}/>
        <Route path='/' component={Bin_holder}/>
    </Switch>
)