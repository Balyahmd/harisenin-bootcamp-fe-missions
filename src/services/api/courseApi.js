import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);

  return response.data;
};

export const createCourse = async (form) => {
  const now = Date.now();

  const response = await axios.post(`${API_URL}/courses`, {
    ...form,
    createdAt: now,
    updatedAt: now,
  });

  return response.data;
};

export const editCourse = async (id, form) => {
  const response = await axios.put(`${API_URL}/courses/${id}`, {
    ...form,
    updatedAt: Date.now(),
  });

  return response.data;
};

export const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}/courses/${id}`);

  return id;
};
