console.log("Script is Connected !!");
let score = 0;
let wicket = 0;

/* 
    for increasing the Score and Wicket we need to handle the Event just 
    Like we handle the event in plain HTML just like we handle the event
    in JSX but some things is change in JSX. Like for click event, we
    handle the click event in HTML by writing the attribute of onclick
    that is trigerred when click event is occur on that element
*/
/*
    But in Plain HTML we write the onlclick attribute in smallcase and assign
    a string, but in JSX attribute is in camelcase and instead of a string we
    assign an expression to it
*/

function incrementScore(e) {
  console.log(e.view);
  score++;
  //* Render App Component Again After Increment the score variable
  /* 
    Re-Rendering of the Component is Important when me make some changes 
    dynamically in UI, and because we just change the one component of App
    and also in App only change the score then in react only this score
    is re render in the browser instead of re render the whole DOM tree
    */
  element.render(<App />);
  console.log(score);
}
function App() {
  return (
    <>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <div>
        {/* 
            for event onClick we need to pass alertBox function without bracket to 
            handle the click event instead of calling because when our program is 
            run if we write brackets then it's directly called the alertBox function
            instead of checking event is occure or not, passing a function will be
            called when event is triggered
        */}
        {/* 
            If we Click on One then Score variable is changed but we can't see the 
            changes on to the Screen, this will be happen because we increment the
            score but we are not render the page again after the incrementation of
            the Score, so for make changes on the screen we need to render app component
            again after the incrementation
        */}
        <button onClick={incrementScore}>1</button>
        <button onClick={incrementScore}>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>Wicket</button>
      </div>
    </>
  );
}

const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<App />);
