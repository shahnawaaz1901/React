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

/* Only Single function for All types of Score Increment */
function increaseScore(num) {
  score += num;
  element.render(<App />);
}

function increaseWicket() {
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
function App() {
  return (
    <>
      <h1>Score Keeper</h1>
      <h2>
        Score : {score}/{wicket}
      </h2>
      <div>
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
      </div>
    </>
  );
}

const element = ReactDOM.createRoot(document.getElementById("root"));
element.render(<App />);
