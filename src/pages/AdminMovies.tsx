import { useContext, useEffect, useState } from "react";
import MoviesAdminComponent from "../components/MoviesAdminComponent"
import axios from "axios";
import { UserContext } from "../context/UserContext";
import ErrorComponent from "../components/ErrorComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AdminMovies = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const { user } = useContext(UserContext)
  // const [size , setSize] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/movies`, { params: { page }, withCredentials: true } )
        setMovies(response.data.data)
      } catch (error) {
        console.error(error)
        toast.error("Error fetching movies")
      }
    }
    fetchData();
  }, [page])

  return (
    user?.role === 'admin' ? (
      movies ? (
        <MoviesAdminComponent movies={movies} />
      ) : (
        <SpinnerComponent />
      )
    ) : (
      <ErrorComponent error_number={403} error_title="Forbidden" error_message="You are not authorized to view this page" />
    )
  )
}

export default AdminMovies;