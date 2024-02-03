import React from "react";
import MovieCard from "./MovieCard.js";
export default class MovieList extends React.Component {
  //* Define the Constructor for using the State
  constructor() {
    super();
    // Please remember that state is the object
    this.state = {
      data: [
        {
          title: "The Avengers",
          image:
            "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/516FQSpAR8L._SX300_SY300_QL70_FMwebp_.jpg",
          plot: "Super Natural Power Shown in the Movie",
          price: 99,
          ratings: "8.9",
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "Love Story 2050",
          image:
            "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61zfKLJwtIL._SY550_.jpg",
          plot: "It is a story about Karan (Harman Baweja), a young spirited sporty boy who lives life off the rules and Sana (Priyanka Chorpra), a young petite, shy girl who livs life by the rules. This develops into a magical love story",
          price: 199,
          ratings: "6.2",
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "Love U...Mr. Kalakaar!",
          image:
            "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/51LvylVnB-L.jpg",
          plot: "It is well filmed (a quality transfer on DVD in anamorphic format) with an engaging story. I like both of the main actors; Amrita Rao looks so good at this point in her career and her acting is great here (a little more outgoing than some earlier movies).",
          price: 99,
          ratings: "8.9",
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "Scary Movie 5",
          image:
            "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/81Ira8x8ppL._SX425_.jpg",
          plot: "This review is for the DVD of 'Scary Movie 5'. It is a single-disc version. The video quality is barely average, even with the average bit-rate around 6000 Kbps.",
          price: 99,
          ratings: "8.9",
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "The Avengers",
          image:
            "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/516FQSpAR8L._SX300_SY300_QL70_FMwebp_.jpg",
          plot: "Super Natural Power Shown in the Movie",
          price: 99,
          ratings: "8.9",
          stars: 0,
          fav: false,
          isInCart: false,
        },
      ],
    };
  }

  increaseStars = (movie) => {
    console.log(movie);
    const index = this.state.data.indexOf(movie);
    const { data: movies } = this.state;
    if (movies[index].stars >= 5) {
      return;
    }

    movies[index].stars += 0.5;
    this.setState({ movies: movies });
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
    const index = this.state.data.indexOf(movie);
    const { data: movies } = this.state;
    movies[index].isInCart = !movies[index].isInCart;
    this.setState({ movies: movies });
  };

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
    const data = this.state.data;
    return (
      <>
        {data.map((each, index) => (
          <MovieCard
            movies={each}
            id={index}
            addStars={this.increaseStars}
            decStars={this.decreaseStars}
            updateFav={this.handleFav}
            handleCart={this.handleCart}
          />
        ))}
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
