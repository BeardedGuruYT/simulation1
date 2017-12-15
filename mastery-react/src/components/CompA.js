import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {getAll} from './../redux/reducer';



// COMP 36C 36D 36E 36F 36G 36H 36I 36J 37 C42H
export default class CompA extends Component {
    constructor(){
        super();

        this.state = {
            allHeroes: []
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people')
            .then(res => {
                // console.log(res)
                this.setState({
                    allHeroes: res.data.results
                })
            })
    }


  render() {
      console.log(this.state.allHeroes)
    let heroes = this.state.allHeroes.map((item, i) => {
        return (
            <div key={i}>
                 <p>{item.id}</p>
               <p> NAME:{item.name}</p>
               <p> HAIR COLOR: {item.hair_color}</p>
               <p> EYE COLOR: {item.eye_color}</p> 
                <Link to={`/compB/${item.name}`}><img src={'{item.url}'}/></Link>
            </div>
        )
    })
    return (
    <div>
        <Header/>
        {heroes}
    </div>
      
    )
  }
}


