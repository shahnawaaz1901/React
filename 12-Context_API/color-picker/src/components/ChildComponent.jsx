/* 
  Because here we want to access the value of context so here two ways 
  are provided, one is by using the React hook (useContext), by using 
  the hook we can able to access the value whatever provider provies to
  the child components, because hooks support only in functional based
  component we can't access or comsume the context in the class based 
  componet so fo class based component we can access by wrap inside the 
  consumer boundary just like we wrap component inside the provider 
  boundary this method also works in functional component
*/
//* Import useContext Hook
// import { useContext } from "react"

/* 
  Import the COntext in which we want to extract the value because it may 
  be possible that our app have multipl context that's why we need to import 
  the context in which we want to extract the value
*/
import colorContext from "../Context"
//* Access the Value of Context by using the Hooks (Only Possible in Functional Component)
// function ChildComponent() {
//   /* 
//     WhatEver value colorContext has useContext extract that value and returns 
//     us and we store that value inside the variabe for future use 
//   */
//   const context = useContext(colorContext);
//   return <h1 style={{margin:100+'px', color : context}}>Color : {context
//   }</h1>
// }

//* Access the value of Context by using the Boundaries(Works on Both functional and Class Based Component)
/* Inside the Bounderies a function is written which returns some JSX */
function ChildComponent(){
  return <><colorContext.Consumer>
  {(value)=>{
    console.log(value)
    return <h1 style={{margin:100+'px', color : value}}>Color : {value
        }</h1>
  }}
  </colorContext.Consumer></>
}
export default ChildComponent