import React from "react";
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
import { movies } from "./movieData.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      /* 
        Movies Array is Bulky so we transfer all movies array data from 
        this app to seprate movieData file
      */
      /*
        Prop Drilling : Passing State as props from one parent to child as prop and pass 
                that props to that component child this is called prop drilling. 
      */
      data: movies,
      cartCount: 0,
    };
  }

  increaseStars = (movie) => {
    const index = this.state.data.indexOf(movie);
    const { data: movies } = this.state;
    if (movies[index].stars >= 5) {
      return;
    }

    movies[index].stars += 0.5;
    this.setState({ data: movies });
  };

  decreaseStars = (movie) => {
    const index = this.state.data.indexOf(movie);
    const { data: movies } = this.state;
    if (movies[index].stars <= 0) {
      return;
    }

    movies[index].stars -= 0.5;
    this.setState({ movies: movies });
  };

  handleFav = (movie) => {
    const index = this.state.data.indexOf(movie);
    const { data: movies } = this.state;
    movies[index].fav = !movies[index].fav;
    this.setState({ movies: movies });
  };

  handleCart = (movie) => {
    let cartCount = this.state.cartCount;
    const index = this.state.data.indexOf(movie);
    const { data: movies } = this.state;
    movies[index].isInCart = !movies[index].isInCart;
    //* One Method to Update State
    if (movies[index].isInCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    /* Another Method
    if (movies[index].isInCart) {
      this.changeCart("increase");
    } else {
      this.changeCart("decrease");
    }
    */
    this.setState({ data: movies, cartCount });
  };

  changeCart(work) {
    if (work === "increase") {
      this.setState({ cartCount: this.state.cartCount + 1 });
    } else {
      this.setState({ cartCount: this.state.cartCount - 1 });
    }
  }
  render() {
    const movies = this.state.data;
    const fn = {
      incStars: this.increaseStars,
      decStars: this.decreaseStars,
      handleCart: this.handleCart,
      handleFav: this.handleFav,
    };
    return (
      <>
        <Navbar count={this.state.cartCount} />
        <MovieList movies={movies} fn={fn} />
      </>
    );
  }
}
