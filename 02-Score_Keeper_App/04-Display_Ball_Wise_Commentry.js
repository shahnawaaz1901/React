console.log("Script is Connected !!");
let score = 0;
let wicket = 0;
/* 
    Instead of writing function for every number to increase the score we can 
    just create a single function which increase the score but question is how
    can we pass whatever number we want to increase because we can't use brackets
    to call the function we need to pass the function as reference for fixing
    this problem we need to use inline function which is nothing but an arrow
    function in which we can call function by the arguments

function incrementOne() {
  score++;
  element.render(<App />);
  console.log(score);
}
function incrementTwo() {
  score += 2;
  element.render(<App />);
  console.log(score);
}
function incrementThree() {
  score += 3;
  element.render(<App />);
  console.log(score);
}
function incrementFour() {
  score += 4;
  element.render(<App />);
  console.log(score);
}
function incrementFive() {
  score += 5;
  element.render(<App />);
  console.log(score);
}
function incrementSix() {
  score += 6;
  element.render(<App />);
  console.log(score);
}

*/

//* Store Every Score of A Ball in a Single Array
const scoreBallWise = [];

/* Only Single function for All types of Score Increment */
function increaseScore(num) {
  scoreBallWise.push(num);
  score += num;
  element.render(<App />);
  //   if (scoreBallWise.length > 6) {
  //     scoreBallWise.splice(0, 6);
  //   }
  console.log(scoreBallWise);
}

function increaseWicket() {
  scoreBallWise.push("W");
  //   if (scoreBallWise.length > 6) {
  //     scoreBallWise.splice(0, 6);
  //   }
  console.log(scoreBallWise);
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
  element.render(<App />);
}

function handleButtonClicks(num) {}

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
      <Result /> 
      */}
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
  console.log(event);
}

function Form() {
  return (
    <>
      {/* 
        here on the top of the form onSubmit event is triggered when user 
        submit the commentry 
      */}
      <form onSubmit={handleFormSubmit}>
        <input type="number" id="run" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="commentry" placeholder="Commentry" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="submit" id="submit-btn" />
      </form>
      <hr />
    </>
  );
}

function Result() {
  return (
    <>
      {scoreBallWise.map((b, index) => (
        <>
          {index % 6 == 0 ? <br /> : ""}
          <span key={index}>{b ? b : "."}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </>
      ))}
    </>
  );
}

const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<App />);
