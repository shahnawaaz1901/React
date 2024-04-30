import React from "react";
import styles from "./Chapter.module.css";

function Chapter(props) {
  const {courseData} = props;
  console.log(courseData);
  return (
    <div>
      <h1>{courseData.title}</h1>
      <h2>{courseData.description}</h2>
      <p className={styles.para}>{courseData.chapter}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        {/* <video src={`${courseData.video}`} controls></video> */}
        <iframe
          width="800"
          height="560"
          src={`${courseData.video}`}
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
