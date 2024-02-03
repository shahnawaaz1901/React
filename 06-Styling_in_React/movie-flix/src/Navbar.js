import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      /* 
        In Our HTML style attribute takes the string but in JSX it takes an 
        object so we need to write two curly braces one denotes that we write
        an js inside and anotherone is the object of js.

        We need to note one thing that in css we can use hyphen(-) but because 
        we use javascript hyphen is not allowed in keys so instead of hyphen for 
        seprating words we can use the camelCassing for differenciate words.

        In React Applications inline Styling is not prefferable or suggested 
        because inline css over ride the styles which is written in CSS file
        and also it's messy to write also we can't use the same type of class
        for multiple elements
    */
      <nav
        style={{
          width: "100%",
          backgroundColor: "rgb(20, 20, 96)",
          color: "white",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
          boxSizing: "border-box",
        }}
      >
        <div className="website-logo">Movie Flix</div>
        <div className="cart">
          <span className="cart-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="Cart-Icon"
            />
            <sup className="cart-item">0</sup>
          </span>
        </div>
      </nav>
    );
  }
}

/*

nav {
  width: 100%;
  height: 70px;
  background-color: rgb(20, 20, 96);
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 30px;
  box-sizing: border-box;
}

*/
