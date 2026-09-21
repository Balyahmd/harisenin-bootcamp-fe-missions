import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCourses } from "../services/api/courseApi";
import { setCourses, setLoading, setError } from "../store/redux/courseReducer";

export default function ListView() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        dispatch(setLoading(true));
        dispatch(setError(null));

        const data = await getCourses();

        dispatch(setCourses(data));

        console.log(data)
      } catch (error) {
        dispatch(setError("Gagal mengambil data course"));
      }
    };

    fetchCourses();
  }, [dispatch]);

  return null;
}
