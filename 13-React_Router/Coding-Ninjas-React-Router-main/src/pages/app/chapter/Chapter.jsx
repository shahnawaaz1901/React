import React from "react";
import styles from "./Chapter.module.css";
import { useOutletContext} from "react-router-dom";

function Chapter() {
  /* 
    we import useOutletContext() because we use the Outlet component to render the 
    chapter component so we need to pass the value of chapter as per user click so
    we pass value of context which is like a prop for Outlet component in which we
    pass the value of chapters, because we want to get the value of context so we
    need to use the hook called "useOutletContext()" which helps us to extract the
    value from context props and we can access that value inside this component by
    using the hook
  */

  const data = useOutletContext();
  console.log(data);

  return (
    <div>
      {/* <p className={styles.para}>{data.chapter}</p> */}
      <h1>{data.title}</h1>
      <br/>
      <h2>{data.description}</h2>
      <hr/>
      <br/>
      <p className={styles.chapterDetails}>{data.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        {/* <video src={`${courseData.video}`} controls></video> */}
        <iframe
          width="800"
          height="560"
          src={`${data.video}`}
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
