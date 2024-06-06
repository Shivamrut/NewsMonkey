import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
      // category: "general",
    };
  }
  handleCountry = (country) => {
    // console.log(country);
    this.setState({
      country: country,
    });
  };

  // }
  render() {
    return (
      <>
        <Router>
          <Navbar handleCountry={this.handleCountry} />
          {/* <Navbar /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key={`general${this.state.country}`}
                  country={this.state.country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key={`sports${this.state.country}`}
                  country={this.state.country}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key={`entertainment${this.state.country}`}
                  country={this.state.country}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key={`technology${this.state.country}`}
                  country={this.state.country}
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key={`business${this.state.country}`}
                  country={this.state.country}
                  category="business"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
