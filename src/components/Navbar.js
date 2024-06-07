import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {

  constructor(){
    super()
    this.state = {
      country : "Country"
    }
  }
  handleCountry = (country,element) => {
    this.props.handleCountry(country);
    // console.log(element.target.text)
    this.setState({
      country : element.target.text
    })
  };
  handleCategory = (category) => {
    this.props.handleCategory(category);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {this.state.country}
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={(e) => {
                          this.handleCountry("in",e);
                        }}
                      >
                        India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={(e) => {
                          this.handleCountry("gb",e);
                        }}
                      >
                        UK
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={(e) => {
                          this.handleCountry("us",e);
                        }}
                      >
                        USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={(e) => {
                          this.handleCountry("jp",e);
                        }}
                      >
                        Japan
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Topic
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("general");
                        }}
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("sports");
                        }}
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("general");
                        }}
                      >
                        General
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("technology");
                        }}
                      >
                        Tech
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("business");
                        }}
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("entertainment");
                        }}
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("health");
                        }}
                      >
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.handleCategory("science");
                        }}
                      >
                        Science
                      </Link>
                    </li>
                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;


