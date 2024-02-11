import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
/* 
  If we want to See Only DOM Statements or we can say if we only want 
  to render the Real DOM not the virtual DOM ,that we can do by removing 
  the strict Mode  
*/
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
