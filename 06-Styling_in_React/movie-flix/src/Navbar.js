import React from "react";
import styled from "styled-components";
import styles from "./Navbar.module.css";
/*
Inline Styling is the makes code very messi and Lengthy so instead of passing
object like this we can create seprate object of styling called styles and
inside style write many classes which is used for every object so we can say
we are create a object which contains styling of multiple elements

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "rgb(20, 20, 96)",
    color: "white",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 30px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "30px",
    color: "#fff",
    fontWeight: 600,
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    marginLeft: 20,
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    height: "48px",
    marginRight: 20,
  },
  cartCount: {
    backgroundColor: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: "12px",
  },
};
 
  Now Question is if we use external css and include that css file in the 
  main App component then why it's required to use the inline css because 
  index.css or whatever css file we created externally it's have the global
  scope and if our app has many component then it's high chance that some
  of the classes are conflict that's why global scope of css is also dangerous
  But Also inline styles is also not recommend because arrangement of code
  is not good because one component have elements and styles so it's not look
  so pretty also we are not using the inline css but we use style component
  and css modules which provides more better way to us to writing the style
*/

//* Add Styling using the Styled Component
/* 
  For Writing Styles using the styled component we need to use styled keyword 
*/
/*
const Nav = styled.nav`
  width: 100%;
  background-image: linear-gradient(170deg, #1bc059, #0d47a1);
  //rgb(20, 20, 96))
  color: white;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  box-sizing: border-box;
`;
*/
const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  transition: all 0.1s ease;
  /*
    For using the seudo classes we need to write ampersant seprated by the colon 
    same single or double color which we give in css for seudo elements and after
    the seudo elements white styles in the bracket
  */
  &:hover {
    color: yellow;
    cursor: pointer;
    margin-top: 8px;
  }
`;
const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    margin-top: -5px;
    margin-left: -5px;
  }
`;

const Image = styled.img`
  height: 48px;
  margin-right: 20;
`;

const CartCount = styled.span`
  /*
    Internally props is recieved as argument so that we can use props to 
    change color or add styles dynamically, this can be changed using the
    through props which is very powerful tool of react
  */
  /*
    This is One way how we can set Visiblity in CSS
    background-color: ${(props) => (props.show ? props.color : "transparent")};
    color: ${(props) => (props.show ? "white" : "transparent")};
  */

  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10;
  top: -5;
  font-size: 12px;
  /* Another method by set the visiblity property to hidden */
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
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
      //* Added the Object key by using the Module CSS
      <nav className={styles.nav}>
        <Title>Movie Flix</Title>
        <CartContainer>
          <Image
            src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
            alt="Cart-Icon"
          />
          {/* 
            Suppose if we want change color dynamically then how can we do this we 
            do by using the props which is automatically passed when we specify any
            attribute in the styled component
          */}
          <CartCount color="green" show={true}>
            {this.props.count}
          </CartCount>
        </CartContainer>
      </nav>
    );
  }
}
