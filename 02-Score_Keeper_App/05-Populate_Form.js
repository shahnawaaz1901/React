console.log("Script is Connected !!");

let score = 0;
let wicket = 0;

//* For Storing the Score or Wicket Value
let hit = 0;

//* For Storing the Commentry
let commentry = "";

//* Store Every Score of A Ball in a Single Array
const scoreBallWise = [];

/* Only Single function for All types of Score Increment */
function increaseScore(num) {
  //   scoreBallWise.push(num);
  //   score += num;
  hit = num;
  console.log(hit);
  element.render(<App />);
}

function increaseWicket() {
  //   scoreBallWise.push("W");
  //   console.log(scoreBallWise);
  //   wicket += 1;
  //   if (wicket == 10) {
  //     element.render(
  //       <>
  //         <h1>Score Keeper</h1>
  //         <h2>Final Score : {score}</h2>
  //       </>
  //     );
  //     return;
  //   }
  hit = "W";
  console.log(hit);
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
  scoreBallWise.unshift(hit);
  console.log({ hit, commentry });
  commentry = "";
  hit = 0;
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
        <input
          type="text"
          id="commentry"
          placeholder="Commentry"
          onChange={handleCommentryForm}
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
          <div key={index}>{b ? b : "."}</div>
        </>
      ))}
    </div>
  );
}

const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<App />);
