import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export function useCourseActions() {
  const ctx = useContext(CourseContext);

  const { fetchCourses, addCourse, updateCourse, removeCourse } = ctx;
  return { fetchCourses, addCourse, updateCourse, removeCourse };
}