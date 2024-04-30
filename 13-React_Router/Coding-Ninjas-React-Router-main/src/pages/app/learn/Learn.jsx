import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chapter from "../chapter/Chapter";

function Learn() {
  const {courseId} = useParams();
  const navigate = useNavigate();
  const mainCourse = coursesData.find((c)=> c.id === courseId);
  function goToPreviousPage(){
    navigate(-1);
  }
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <h2 className={style.back} onClick={goToPreviousPage}>{"<<"}</h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{mainCourse.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul >{/*Task4: List of Chapters must be rendered here  */
          mainCourse.chapters.map((eachCourse,index)=>(
            <li key={index}>{eachCourse.title}</li>
          ))
          }</ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
        {mainCourse.chapters.map((eachCourse, index)=> (<Chapter key={index} courseData={eachCourse}/>))}
      </div>
    </div>
</div>
  );
}

export default Learn;
