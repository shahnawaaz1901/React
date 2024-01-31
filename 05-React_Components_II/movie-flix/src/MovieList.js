import React from "react";
import MovieCard from "./MovieCard.js";
export default class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    /*
      If we write the movieCard like this then we can able to render multiple
      cards on the browser but the problem is every component has their own
      local state, which state is like a hard Coded means we always gets the
      same output but question is why we render multiple cards if we want to
      render same movie detail again and again, so now we want that movies array
      is store in movieList component and everytime we want to movie card we can
      pass information of movie and get the movie card by using the movie card
      component, so for transfering data from one Component to another there is
      another concept Called the Props helps us to pass the data from one component
      to another and maintain the states
    */
    return (
      <>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </>
    );
  }
}
