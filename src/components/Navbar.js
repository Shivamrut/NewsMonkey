import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {

  handleCountry=(country)=>{
    this.props.handleCountry(country)
  }
  
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
                    Country
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" onClick={()=>{this.handleCountry("in")}}>India</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" onClick={()=>{this.handleCountry("gb")}}>UK</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" onClick={()=>{this.handleCountry("us")}}>USA</Link>
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
                    <LiItem title="General" link="/" />
                    <LiItem title="Tech" link="/technology" />
                    <LiItem title="Business" link="/business" />
                    <LiItem title="Sports" link="/sports" />
                    <LiItem title="Entertainment" link="/entertainment" />
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

function LiItem(props) {
  return (
    <>
      <li>
        <Link className="dropdown-item" to={props.link}>
          {props.title}
        </Link>
      </li>
    </>
  );
}
