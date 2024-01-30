import React from "react";
import "./styles.css";
/*
    We Can Directly import Component from React and directly extends 
    withOut using the React Keyword

    import { Component } from "react";
    export default class MovieCard extends Component{}
*/
export default class MovieCard extends React.Component {
  //* Define the Constructor for using the State
  constructor() {
    /* 
      Because we are inherit the properties from React.Component, So that we
      need to first call the class which we used to inherit the property from
      that, so here we inherit properties of React.Component so we need to first
      call the React.Component class constructor which we can call using the 
      "super" keyword which is reserve for calling the constructor of parent class
    */
    super();
    /* Please remember that state is the object */
    this.state = {
      title: "The Avengers",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/516FQSpAR8L._SX300_SY300_QL70_FMwebp_.jpg",
      plot: "Super Natural Power Shown in the Movie",
      price: 99,
      ratings: "8.9",
    };
  }

  render() {
    /*
      We can also create variables for title, plot, images by using the 
      object destructuring like this :
      
      const { title, image, plot, price, ratings } = this.state;
    */
    /* 
        We Need to remember that class is reserver keyword in JS for creating 
        the classes so we need to use the className for adding the Css classes 
    */
    return (
      <div className="main">
        <div className="movie-card">
          {/* 
            Because in Movie card we have one image and another one is movie 
            detail section so left section is for movie image and right is
            for movie description
        */}
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
                />
                <span className="starCount">5</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-bt">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
