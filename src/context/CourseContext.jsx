import {
  createContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import axios from "axios";

export const CourseContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL;

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(`${API_URL}/courses`);

      setCourses(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Terjadi kesalahan saat mengambil data",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const addCourse = async (form) => {
    try {
      const now = Date.now();

      const res = await axios.post(`${API_URL}/courses`, {
        ...form,
        createdAt: now,
        updatedAt: now,
      });

      const newCourse = res.data;

      setCourses((prev) => [...prev, newCourse]);

      return newCourse;
    } catch (err) {
      throw new Error(
        err.response?.data?.message ||
          err.message ||
          "Gagal menambahkan course",
      );
    }
  };

  const updateCourse = async (id, form) => {
    try {
      const res = await axios.put(`${API_URL}/courses/${id}`, {
        ...form,
        updatedAt: Date.now(),
      });

      const updated = res.data;

      setCourses((prev) =>
        prev.map((course) =>
          String(course.id) === String(id)
            ? updated
            : course,
        ),
      );

      return updated;
    } catch (err) {
      throw new Error(
        err.response?.data?.message ||
          err.message ||
          "Gagal memperbarui course",
      );
    }
  };

  const removeCourse = async (id) => {
    try {
      await axios.delete(`${API_URL}/courses/${id}`);

      setCourses((prev) =>
        prev.filter(
          (course) => String(course.id) !== String(id),
        ),
      );
    } catch (err) {
      throw new Error(
        err.response?.data?.message ||
          err.message ||
          "Gagal menghapus course",
      );
    }
  };

  const value = {
    courses,
    loading,
    error,
    fetchCourses,
    addCourse,
    updateCourse,
    removeCourse,
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
}