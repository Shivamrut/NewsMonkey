import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
      category: "general",
      page: false,
      progress: 0,
    };
  }
  handlePageScroll = () => {
    this.setState({
      page: !this.state.page,
    });
  };
  handleCountry = (country) => {
    this.setState({
      country: country,
    });
  };
  handleCategory = (category) => {
    this.setState({
      category: category,
    });
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  // }
  render() {
    return (
      <>
        <Router>
          <Navbar
            handleCountry={this.handleCountry}
            handleCategory={this.handleCategory}
            handlePageScroll={this.handlePageScroll}
            page={this.state.page}
          />
          {/* <Navbar /> */}
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
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
                  setProgress={this.setProgress}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
