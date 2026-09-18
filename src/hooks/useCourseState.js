import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

export function useCourseState() {
  const ctx = useContext(CourseContext);

  const {
    courses,
    loading,
    error,
  } = ctx;

  return {
    courses,
    loading,
    error,
  };
}