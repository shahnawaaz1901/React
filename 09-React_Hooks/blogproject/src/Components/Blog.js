//Blogging App using Hooks
import { useState } from "react";
export default function Blog() {
  //* Set State
  const [blogsData, updateBlogData] = useState([]);
  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    let title = e.target[0].value;
    let content = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";
    updateBlogData([{ title, content }, ...blogsData]);
  }

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>
      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogsData.map((every, index) => (
        <div key={index} className="blog">
          <h3>{every.title}</h3>
          <p>{every.content}</p>

          <div className="blog-btn">
            <button className="btn">Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
