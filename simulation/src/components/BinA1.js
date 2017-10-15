import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import BinDetails from './Bin_Details';


export default class BinA1 extends Component {

render(){
    
    return(
    <div>
        <Link to='/bins/A/3'>
        <button>BIN 1</button>
        </Link>
    </div>
         )
    }
}