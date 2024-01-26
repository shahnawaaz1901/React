console.log("Script is Connected !!");

let score = 0;
let wicket = 0;

//* For Storing the Score or Wicket Value
let hit = 0;

//* For Storing the Commentry (Only in Case of onChange Event)
let commentry = "";

//* Use the React Reference to access the value of commentry input field
//* createRef using React Constructor
let inputRef = React.createRef();

//* Store Every Ball
const scoreBallWise = [];

/* Only Single function for All types of Score Increment */
function increaseScore(num) {
  hit = num;
  console.log(hit);
  element.render(<App />);
}

function increaseWicket() {
  hit = "W";
  console.log(hit);
  element.render(<App />);
}

//* Always write first character of the Component in Capital letter for Rendering using the Angular brackets
const ScoreButtons = () => (
  <>
    <button
      onClick={() => {
        increaseScore(0);
      }}
    >
      0
    </button>
    <button
      /* 
        Just Pass the Arrow function So that we can able to fetch which 
        number user click 
        */
      onClick={() => {
        increaseScore(1);
      }}
    >
      1
    </button>
    <button
      onClick={() => {
        increaseScore(2);
      }}
    >
      2
    </button>
    <button
      onClick={() => {
        increaseScore(3);
      }}
    >
      3
    </button>
    <button
      onClick={() => {
        increaseScore(4);
      }}
    >
      4
    </button>
    <button
      onClick={() => {
        increaseScore(5);
      }}
    >
      5
    </button>
    <button
      onClick={() => {
        increaseScore(6);
      }}
    >
      6
    </button>
    <button onClick={increaseWicket}>Wicket</button>
  </>
);

function App() {
  return (
    <>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <div>
        {/* 
            For Render a Component using Angular bracket we need to create 
            component function Using Capital Letter 
        */}
        <ScoreButtons />
      </div>
      <Form />

      {/* 
          We Need to Render the Result when User Submit the Commentry So we are not 
          rendering the result directly 
        */}
      <Result />
    </>
  );
}

function handleFormSubmit(event) {
  /* 
    Because Internally HTML Buttons have the default behaviour like in form case buttons 
    have default behaviour to reload the page this is called synthetic events means event
    preDefine internally by the HTML, e.preventDefault stops default behaviour of en HTML
    tag
  */
  event.preventDefault();
  scoreBallWise.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>);
  /* 
    Access Input Ref using the variable name but actual value is stores 
    in current object which is inside th inputRef Object   
*/
  if (hit != "W") {
    score += hit;
  } else {
    wicket += 1;
    if (wicket == 10) {
      element.render(
        <>
          <h1>Score Keeper</h1>
          <h2>Final Score : {score}</h2>
        </>
      );
      return;
    }
  }
  hit = 0;
  /* 
        We Need to set this inputRef.current.value equal to zero because
        reference in React is not component based that's why value of
        this inputRef.current.value is not set automatically again we need 
        to set this manually, so that we can say react reference is not
        component based or component controlled it's uncontrolled and not
        dependent on react components
    */
  inputRef.current.value = "";

  element.render(<App />);
}

function handleCommentryForm(event) {
  commentry = event.target.value;
}

function Form() {
  return (
    <>
      {/* 
        here on the top of the form onSubmit event is triggered when user 
        submit the commentry 
      */}
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="run" value={hit} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* 
            We Can access value of this input field which id is commentry by 
            adding the onChange event and collect the event from 
            handleCommentryForm function and access the value of input field 
            but instead of this we access the value of the field by using React 
            references which provides us to access the value from any node in 
            DOM and use it whenever we want 
        <input
          type="text"
          id="commentry"
          placeholder="Commentry"
          onChange={handleCommentryForm}
    />*/}
        <input
          type="text"
          id="commentry"
          placeholder="Commentry"
          ref={inputRef}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="submit" id="submit-btn" />
      </form>
      <hr />
    </>
  );
}

function Result() {
  return (
    <div>
      {scoreBallWise.map((b, index) => (
        <>
          <div key={index}>
            {/* 
                Access Reference value using the variable name and inside the 
                current object  
            */}
            {b}
          </div>
        </>
      ))}
    </div>
  );
}

const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<App />);
