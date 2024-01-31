import React from "react";
import "./styles.css";

export default class MovieCard extends React.Component {
  //* Define the Constructor for using the State
  constructor() {
    super();
    /* Please remember that state is the object */
    this.state = {
      title: "The Avengers",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/516FQSpAR8L._SX300_SY300_QL70_FMwebp_.jpg",
      plot: "Super Natural Power Shown in the Movie",
      price: 99,
      ratings: "8.9",
      stars: 0,
      fav: false,
      cart: false,
    };
  }

  increaseStars() {
    if (this.state.stars >= 5) {
      return;
    }

    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  }

  decreaseStars() {
    if (this.state.stars <= 0) {
      return;
    }
    //* Second form of setState function
    this.setState((prevState) => {
      return {
        stars: prevState.stars - 0.5,
      };
    });
  }

  handleFav() {
    this.setState({ fav: !this.state.fav });
  }

  handleCart() {
    this.setState((prevState) => ({ cart: !prevState.cart }));
  }
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="MovieLogo" src={this.state.image} />
          </div>
          <div className="right">
            <div className="title">{this.state.title}</div>
            <div className="plot">{this.state.plot}</div>
            <div className="price">{this.state.price}/- INR</div>
            <div className="footer">
              <div className="rating">{this.state.ratings}/10</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9210/9210950.png"
                  alt="decrease"
                  className="stars"
                  onClick={this.decreaseStars.bind(this)}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10134/10134048.png"
                  alt="star"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8162/8162972.png"
                  alt="increase"
                  className="stars"
                  onClick={this.increaseStars.bind(this)}
                />
                <span className="starCount">{this.state.stars}</span>
              </div>
              {/* {this.state.fav ? (
                <button
                  className="favourite-btn"
                  // Bind this keyword in handleFav to "this" objects
                  onClick={this.handleFav.bind(this)}
                >
                  Favourite
                </button>
              ) : (
                <button
                  className="unfavourite-btn"
                  // Bind this keyword in handleFav to "this" object
                  onClick={this.handleFav.bind(this)}
                >
                  Un-favourite
                </button>
              )} 
               <button className="favourite-btn">Favourite</button>
              <button className="unfavourite-btn">Un-favourite</button> */}
              {/* 
                We Can Add Conditional Rendering by just adding the conditions on 
                classname and content
              */}
              <button
                className={this.state.fav ? "favourite-btn" : "unfavourite-btn"}
                onClick={this.handleFav.bind(this)}
              >
                {this.state.fav ? <>Un-favourite</> : <>Favourite</>}
              </button>
              <button className="cart-btn" onClick={this.handleCart.bind(this)}>
                {this.state.cart ? <>Remove From Cart</> : <>Add to Cart</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
