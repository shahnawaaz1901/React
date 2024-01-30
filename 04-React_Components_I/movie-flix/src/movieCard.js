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
      stars: 0,
    };
  }
  /*
  If we dont want to bind the explicitly then we can write using the arrow function
  because arrow function not contains the any value of this so that it look for parent
  because parent is our class so it reffer to the this class object
  increaseStars = () => {
    console.log("Star is Increased !!", this.state.stars);
  };
  */

  increaseStars() {
    console.log("Star is Increased !!", this.state.stars);
  }

  decreaseStars() {
    console.log("Star is Decreased !!", this.state.stars);
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
                  /*
                    onClick={this.decreaseStars} we are not pass the function because passing 
                    of the function is responsible for value of this is nulll so we need to call 
                    explicitly inside the arrow function
                  */
                  /* we can use arrow function like this or we can bind this  
                    onClick={() => this.decreaseStars()}
                 */
                  //* Bind decreaseStars function to the object using "this" keyword
                  /* Without binding value of "this" will be lost */
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
                  /*
                    onClick={this.increaseStars}  we are not pass the function because passing 
                    of the function is responsible for value of this is nulll so we need to call 
                    explicitly inside the arrow function
                  */
                  // onClick={() => this.increaseStars()}
                  onClick={this.increaseStars.bind(this)}
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
