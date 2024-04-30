import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import { Link, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Learn() {
  const {courseId,chapterId} = useParams();
  const navigate = useNavigate();
  const mainCourse = coursesData.find((c)=> c.id === courseId);
  const chapter = mainCourse.chapters[chapterId]
  function goToPreviousPage(){
    navigate("/courses");
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
          <ul>{/*Task4: List of Chapters must be rendered here  */
          mainCourse.chapters.map((eachCourse,index)=>(
            <Link key={index} to={`chapter/${index}`}>
            <div  className={style.chapterId}>{eachCourse.title}</div>
            </Link>
          ))
          }</ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
        {/* {mainCourse.chapters.map((eachChapter, index)=> (<Chapter key={index} chapter={eachChapter}/>))} */}
        {/* 
          Because we want to pass data to the Outlet component so Outlet comes up
          with the property called context which is nothing but like props which we
          use to pass the data from parent component to child component, so we can
          say instead of directly normal props it accept only one prop called 
          "context" which value we can get at the child component by using the hook 
          called "useOutletContext()"
        */}
        <Outlet context={chapter}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
