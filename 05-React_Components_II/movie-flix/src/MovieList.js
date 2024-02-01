import React from "react";
import MovieCard from "./MovieCard.js";
export default class MovieList extends React.Component {
  //* Define the Constructor for using the State
  constructor() {
    super();
    // Please remember that state is the object
    this.state = {
      title: "The Avengers",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/516FQSpAR8L._SX300_SY300_QL70_FMwebp_.jpg",
      plot: "Super Natural Power Shown in the Movie",
      price: 99,
      ratings: "8.9",
      stars: 0,
      fav: false,
      isInCart: false,
    };
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
        <MovieCard movies={this.state} />
        <MovieCard movies={this.state} />
        <MovieCard movies={this.state} />
        <MovieCard movies={this.state} />
        <MovieCard movies={this.state} />
      </>
    );
  }
}

// MovieCard.defaultProps = {
//   title: this.state.title,
//   image: this.state.image,
//   plot: this.state.plot,
//   price: this.state.price,
//   ratings: this.state.ratings,
//   stars: this.state.stars,
//   fav: this.state.fav,
//   isInCart: this.state.isInCart,
// };
