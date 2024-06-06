import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App  extends Component {

  constructor(){
    super()
    this.state = {
      country : "us"
    }
  }
  // handleCountry =  (country)=>{
  //   console.log(country)
  //   this.setState({
  //     country : country
  //   })
    
  // }
  render() {
    return (
      <>
      {/* <Navbar handleCountry={this.handleCountry}/>*/}
      <Navbar/>
      {<News country={this.state.country}/> }
      </>
    )
  }
}
