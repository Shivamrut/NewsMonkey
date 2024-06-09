import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePageScroll = () => {
    setPage(!page);
  };
  const handleCountry = (country) => {
    setCountry(country);
  };
  const handleCategory = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Router>
        <Navbar
          handleCountry={handleCountry}
          handleCategory={handleCategory}
          handlePageScroll={handlePageScroll}
          page={page}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key={`${category}${country}${page}`}
                country={country}
                category={category}
                pageOrScroll={page}
                setProgress={setProgress}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
