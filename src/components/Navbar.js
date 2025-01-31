import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const [country, setCountry] = useState("Country");
  const handleCountry = (country, element) => {
    props.handleCountry(country);
    setCountry(element.target.text);
  };
  const handleCategory = (category) => {
    props.handleCategory(category);
  };
  const handlePageScroll = () => {
    props.handlePageScroll();
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand">NewsMonkey</div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {country}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        handleCountry("in", e);
                      }}
                    >
                      India
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        handleCountry("gb", e);
                      }}
                    >
                      UK
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        handleCountry("us", e);
                      }}
                    >
                      USA
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        handleCountry("jp", e);
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
                        handleCategory("general");
                      }}
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("sports");
                      }}
                    >
                      Sports
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("technology");
                      }}
                    >
                      Tech
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("business");
                      }}
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("entertainment");
                      }}
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("health");
                      }}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        handleCategory("science");
                      }}
                    >
                      Science
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={handlePageScroll}
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {props.page ? "Scroll" : "Page"}
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
