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
            in the component at line 34
        */}
        <colorContext.Provider value="red">
        <ChildComponent color={color}/>
    </colorContext.Provider>
    </>)
}

export default Parent;