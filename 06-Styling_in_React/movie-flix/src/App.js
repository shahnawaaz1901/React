import React from "react";
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <MovieList />
      </>
    );
  }
}
