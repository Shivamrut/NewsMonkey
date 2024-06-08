import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
      category: "general",
      page : true
    };
  }
  handlePageScroll = ()=>{
    this.setState({
      page : !this.state.page
    })
  }
  handleCountry = (country) => {
    this.setState({
      country: country,
    });
    
  };
  handleCategory = (category) => {
    this.setState({
      category:category
    });
  };


  // }
  render() {
    return (
      <>
        <Router>
          <Navbar handleCountry={this.handleCountry} handleCategory={this.handleCategory} handlePageScroll={this.handlePageScroll}/>
          {/* <Navbar /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                
                <News
                
                  key={`${this.state.category}${this.state.country}${this.state.page}`}
                  country={this.state.country}
                  category={this.state.category}
                  pageOrScroll={this.state.page}
                />
              }
            />
            
            
          </Routes>
        </Router>
      </>
    );
  }
}
