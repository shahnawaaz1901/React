//Blogging App using Hooks
import { useState, useRef, useEffect, useReducer } from "react";

function blogsReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [action.blogData, ...state];
    }

    case "REMOVE": {
      return state.filter((each, index) => index !== action.blogId);
    }

    default:
      return [];
  }
}

export default function Blog() {
  //* Set State
  // const [blogsData, updateBlogData] = useState([]);
  const [blogsData, dispatch] = useReducer(blogsReducer, []);
  const titleRef = useRef("");
  const contentRef = useRef("");

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    let title = e.target[0].value;
    let content = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";
    document.title = title;
    /* 
      Type Indicates which operation we want to perform and another property 
      blogData represents the data which we use to perform the operation 
      we dont require the updateBlogData function anymore

      updateBlogData([{ title, content }, ...blogsData]);
    */
    dispatch({ type: "ADD", blogData: { title, content } });
  }

  function removeBlog(id) {
    dispatch({ type: "REMOVE", blogId: id });
    // updateBlogData(blogsData.filter((data, index) => index !== id));
  }

  /* 
    Because we only want to called the useEffect only at once when component 
    is render initially because after re rendering we focus the input title 
    box when in the handleSubmit function, so we dont need to focus ony twice
    that's empty array means useEffect called only at once on initial Rendering
    howEver we can remove focus on title from handleSubmit function and put it
    inside the useEffect withOut passing the dependency that's means useEffect
    works as both componentDidMount as well as componentDidUpdate
  */
  useEffect(() => {
    titleRef.current.focus();
  });

  /* 
    We Added the blogsData inside the Dependency Array because is blogsData 
    is getting changed then and only then title of page is change otherwise 
    not 
  */
  useEffect(() => {
    console.log("Inside");
    if (blogsData.length && blogsData[0].title) {
      document.title = blogsData[0].title;
    } else {
      document.title = "No blog";
    }
  }, [blogsData]);
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
              ref={titleRef} //* Reference for Name Field
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              ref={contentRef} //* Reference For Content Field
              required
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

          <div className="blog-btn" onClick={() => removeBlog(index)}>
            <button className="btn remove">Delete</button>
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
