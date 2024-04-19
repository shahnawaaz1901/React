import { Link } from "react-router-dom";

function Home() {
  /*
    Link Component is nothing but the extended version of anchor tag
    in which we link the pages and switch between paths withOut load
    the web page
  */
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <Link to="/about">Go to About</Link>&nbsp;&nbsp;
        <Link to="/items">Go to Items</Link>
      </main>
    </>
  );
}

export default Home;
