//* Element Created using JSX *//
const jsxElement = <h1 className="Header">Helo JSX</h1>;

/* 
    How Ever We Create Element like this in jsx fasion but internally working is 
    same like 
        React.createElement("h1",{className : "Header"},Helo JSX);
    We can check this by inspecting the Element code and see the last script file
    which is linked inside the head tag where our JSX file code converting into
    the plain react code.

    Nesting in React is Posible means if we want to write html like this
    <div><h1></h1></div>

    then internally working is :
    React.createElement("div",null,React.createElement("h1",null););
*/
ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
