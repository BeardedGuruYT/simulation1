import React, { Component } from 'react'
import axios from 'axios';


export default class CompB extends Component {
constructor(){
    super()

    this.state={
        person: []
    }
}


componentDidMount(id){
 axios.get(`https://swapi.co/api/people/${id}`)
 .then(res => {
     console.log(res)
     this.setState({
         person: res.data.results
     })
 })
}

  render() {
      console.log(this.state.person)
      let onePerson = this.state.person.map((item, i) => {
          return (
              <div>
                  {item.name}
                  {item.height}
              </div>
          )
      })
    return (
      <div>
        
      </div>
    )
  }
}
