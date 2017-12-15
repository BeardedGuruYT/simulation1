import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAll } from './../redux/reducer'


 class CompB extends Component {

// COMP 38C 38D

componentDidMount(){
 this.props.getAll();
}

  render() {
      console.log(this.props.allPlanets)
      let planet = this.props.allPlanets.map((item, i) => {
          return(
              <div key={i}>
                  {item.name}
              </div>
          )
      })
      
    return (
      <div>
          <h1>PLANETS</h1>
        {planet}
      </div>
    )
  }
}

function mapStateToProps(state){
    console.log(state, "STATE")
    return {
        allPlanets: state.allPlanets
    }
}
export default connect (mapStateToProps, {getAll})(CompB)