import { useContext, useEffect, useState } from "react";
import MoviesAdminComponent from "../components/MoviesAdminComponent"
import axios from "axios";
import { UserContext } from "../context/UserContext";
import ErrorComponent from "../components/ErrorComponent";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext)
  // const [size , setSize] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/movies`, { params: { page }, withCredentials: true } )
        setMovies(response.data.data)
      } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies")
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page])

  return (
     user.role == 'admin' ? (
      <MoviesAdminComponent movies={movies} />
    )  : (
      <ErrorComponent error_number={403} error_title="Forbidden" error_message="You are not authorized to view this page" />
    )
  )
}

export default AdminMovies;