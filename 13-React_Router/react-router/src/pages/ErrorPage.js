import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*
    WhenEver our app encounter any error and render this ErrorPage Component we 
    should automatically go back where we were before encounter the error, so after
    some delay of 4 to 5 second we need to go back automatically where we were with
    Out clicking or doing anything it should be done programatically, so for this
    we need to use the useNavigate.
*/
function ErrorPage() {
  /*
    useNavigate returns us a function which we can use to navigate between the pages
    it's similar like location.reload("/") which takes us to the url which we pass
    but that's load the full page not just the component so for the component we 
    use the navigat function in which we pass that "/" slash means whenever we
    encounter the error after 3 seconds we should go to the home page
  */
  const navigate = useNavigate();

  /* 
    Because setTimeout is the side effect so we need to do inside the useEffect 
    and because we only want to perform sideEffect when Component is Mount so for
    we pass the empty array in the dependency array
    */
  useEffect(() => {
    setTimeout(() => {
      /*
        Either we can pass the path to the navigate function or we can pass a 
        nagative number which number takes you to that last page means if we pass
        -1 and if our app encounter error so from the component which error is 
        encounter we go back for that component and if we pass the -2 so we go
        automatically just previous to the component which encounter the error
        this is called delta number means how much steps you want to go back
        when encounter the Error, so passing the number is good option instead
        of path because path is hard coded and delta number take to the previous
        components in which user have
      */
      navigate(-2);
      //   navigate("/");
    }, 3000);
  }, []);
  return <h1>Oops !! Something Went Wrong !!</h1>;
}
export default ErrorPage;
