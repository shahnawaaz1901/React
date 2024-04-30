import React from "react";
import styles from "./Chapter.module.css";
import { useParams } from "react-router-dom";
function Chapter(props) {
  // console.log(useParams());
  console.log(props);
  return (
    <div>
      <p className={styles.para}></p>
      <h1></h1>
      <h2></h2>
      <hr/>
      <p className={styles.chapterDetails}></p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        {/* <video src={`${courseData.video}`} controls></video> */}
        <iframe
          width="800"
          height="560"
          src={`${"https://www.youtube.com/embed/FZ0cG47msEk"}`}
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
