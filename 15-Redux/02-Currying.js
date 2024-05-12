/*
    Higher Order functions : Higher order functions is the function which accepts the function as 
            parameter and/or return a function.
*/

/*
    Closure : Closure is the Javascript Property which helps to retrieve outer function variables or 
            anything values inside the inner function after removing the scope
*/

/*
    Currying : Combine the usage of functions in Javascript is called currying. Name Currying is comes 
            from american mathematician Rescal Curry which work a lot on combining the mathematical 
            functions.

        Currying is based on the Closures and it concepts says that if we have a higher order function 
        with multiple parameters then converts the function into multiple inner functions where each 
        function should takes the only one argument
*/

/* Normal function with Multiple Arguments */
function sum(a, b, c) {
  return a + b + c;
}

/* Higher Order function using Currying Concept with Only Single argument */
function sumWithCurrying(a) {
  return function SumB(b) {
    return function SumC(c) {
      return a + b + c;
    };
  };
}

//* Call the Normal Sum function
console.log(sum(10, 20, 30));

//* Call the Higher Order function

//? Individual function calls
const sumBResult = sumWithCurrying(10);
const sumCResult = sumBResult(20);
const finalResult = sumCResult(30);
console.log(finalResult);

//? One function Call for All
const result = sumWithCurrying(10)(20)(30);
console.log(result);
