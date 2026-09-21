import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "courses",

  initialState,

  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.loading = false;
      state.error = null;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    addCourse: (state, action) => {
      state.courses.unshift(action.payload);
    },

    updateCourse: (state, action) => {
      const index = state.courses.findIndex(
        (course) => String(course.id) === String(action.payload.id),
      );

      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },

    removeCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => String(course.id) !== String(action.payload),
      );
    },
  },
});

export const {
  setCourses,
  setLoading,
  setError,
  addCourse,
  updateCourse,
  removeCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
