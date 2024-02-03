import React from "react";
import "./styles.css";

export default class MovieCard extends React.Component {
  render() {
    const { title, image, plot, price, ratings, stars, fav, isInCart } =
      this.props.movies;
    /* Get the functions and id of the movie */
    const { id, addStars, decStars, updateFav, handleCart } = this.props;
    return (
      <div className="main" key={id}>
        <div className="movie-card">
          <div className="left">
            <img alt="MovieLogo" src={image} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}/- INR</div>
            <div className="footer">
              <div className="rating">{ratings}/10</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9210/9210950.png"
                  alt="decrease"
                  className="stars"
                  onClick={() => decStars(this.props.movies)}
                  // onClick={this.decreaseStars.bind(this)}
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
                  onClick={() => addStars(this.props.movies)}
                  // onClick={this.increaseStars.bind(this)}
                />
                <span className="starCount">{stars}</span>
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
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                // onClick={this.handleFav.bind(this)}
                onClick={() => updateFav(this.props.movies)}
              >
                {fav ? <>Un-favourite</> : <>Favourite</>}
              </button>
              <button
                className={isInCart ? "unfavourite-btn" : "cart-btn"}
                onClick={() => handleCart(this.props.movies)}
                // onClick={this.handleCart.bind(this)}
              >
                {isInCart ? <>Remove from Cart</> : <>Add to Cart</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
