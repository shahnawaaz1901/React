import React from "react";
import ChildComponent from "./ChildComponent"
import { useState } from "react";
import colorContext from "../Context";
function Parent(){
    /* 
        colorContext here have two things one is consumer and another one 
        is provider, as name suggest it's mentioning who's consume the context
        and who's provide the context, because we want to make available parent
        state to all the children so we need to keep inside the boundary just
        like we handle the error
    */
    const [color, setColor] = useState("");
    function handleColorChange(e){
        setColor(e.target.value)
    }
    /* 
        colorContext.Provides means we want to provide state from this 
        component to the children component, but kept inside the whole
        JSX inside the boundary it's also fine but we want to the state
        only in childComponent so we also have an option to only kept
        childComponent for sharing the state only that component
    */
    return (<>
        <h1>Pick a Color</h1>
        <input type="color" onChange={handleColorChange} value={color}/>
        {/* 
            Whenever we wrap any component inside the context we need pass 
            another attribut called value which takes any value either number 
            string or anything, because we pass value we can skip passing props
            in the component at line 34, now whatever value we specified in value
            attribute we can use that value anywhere in the child component no
            metters we want to access in child or grand child component we can
            use it and there are two ways to access context Value inside the child
            component, here value are attribute so it's fix and we are not able
            change because whatever value we want to share across the children
            we need to add it insid the value attribute
        */}
        {/* 
            And just like a props we can also specify the value containing state 
            and updateState function 
        */}
        <colorContext.Provider value={color}>
        <ChildComponent />
    </colorContext.Provider>
    </>)
}

export default Parent;