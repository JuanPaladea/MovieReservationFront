import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { UserContext } from "../context/UserContext";
import MoviesAdminComponent from "../components/MoviesAdminComponent"
import ErrorComponent from "../components/ErrorComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import PaginationComponent from "../components/PaginationComponent";
import { BACKEND_URL } from "../utils/utils";
import { MovieType, UserType } from "../types/types";

const AdminMovies = () => {
  const [movies, setMovies] = useState<MovieType[] | undefined>(undefined);
  const [page, setPage] = useState(1);
  const { user } = useContext(UserContext) as { user: UserType | null };
  const [size] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/movies`, { params: { page, size }, withCredentials: true } )
        if (response.data.data.length === 0) {
          toast('No more movies to show')
          setPage(page - 1)
          return
        }
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
        <>
          <MoviesAdminComponent movies={movies} />
          <PaginationComponent page={page} setPage={setPage} />
        </>
      ) : (
        <SpinnerComponent />
      )
    ) : (
      <ErrorComponent error_number={403} error_title="Forbidden" error_message="You are not authorized to view this page" />
    )
  )
}

export default AdminMovies;