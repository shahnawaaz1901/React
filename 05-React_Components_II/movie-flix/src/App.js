import React from "react";
import MovieList from "./MovieList.js";

export default class App extends React.Component {
  render() {
    /* 
      Our Movie List app contains the three main component one is navbar another 
      one is movie list component which contains the component of every movie, so
      movieCard component is used inside the movieList component because movielist
      contains the movieCard component
    */

    return (
      <>
        <MovieList />
      </>
    );
  }
}
