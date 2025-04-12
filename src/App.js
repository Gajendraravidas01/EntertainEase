import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Header from "./component/header/Header.js";
import MovieList from "./component/movielist/MovieList.js";
import Movie from "./pages/moviedetails/Movie.js";
// import './App.css';
import Lumega from "./pages/Lumega.js";
import Footer from "./component/footer/Footer.js";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>this is error page</h1>}></Route>
          <Route path="/lumega" element={<Lumega />}>
            {" "}
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
