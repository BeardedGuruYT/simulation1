import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class BinDetails extends Component {
    constructor(){
        super();

        this.state={
            oneBin: [{}],
            editing: true,
            binName: '',
            binPrice: ''
        }
        this.editChange = this.editChange.bind(this);
        this.saveChangeName = this.saveChangeName.bind(this);
        this.saveChangePrice = this.saveChangePrice.bind(this);
        this.saveChange = this.saveChange.bind(this);
        this.deleteBin = this.deleteBin.bind(this)

    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/bins/bin1/3')
        .then(response =>{
          console.log(response)
          this.setState({
            oneBin: response.data
          })
        })
      }

      editChange(){
          this.setState({
              editing: !this.state.editing
          })
      }
      
      saveChange(){
          axios.put('http://localhost:3000/api/bins/3', {name:this.state.binName, price: this.state.binPrice, shelf: "A"})
          .then(response => {
            axios.get('http://localhost:3000/api/bins/bin1/3')
            .then(response =>{
              console.log(response)
              this.setState({
                oneBin: response.data
              })
            })
          })   
      }

      saveChangeName(val){
        this.setState({
            binName: val
        })
      }

      saveChangePrice(val){
        this.setState({
            binPrice: val
        })
      }

      deleteBin(){
          axios.delete('http//:localhost:3000/api/bins/:id')
          .then(response => {
              this.setState({
                  oneBin: response.data
              })
          })
      }


  render() {
    return (
        <div>
            <input onChange={(e) => this.saveChangeName(e.target.value)}
             disabled={this.state.editing} 
             placeholder={this.state.oneBin[0].name}
             value={this.state.binName}
             />
            <input  onChange={(e) => this.saveChangePrice(e.target.value)}
            disabled={this.state.editing} 
            placeholder={this.state.oneBin[0].price}
            value={this.state.binPrice}
            />
            <button onClick={this.editChange}>EDIT</button>
            <button onClick={this.saveChange}>SAVE</button>
            <button onClick={this.deleteBin}>DELETE</button>
        </div>
    )
  }
}
