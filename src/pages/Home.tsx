import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import HeroComponent from "../components/HeroComponent";
import MoviesComponent from "../components/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import { BACKEND_URL } from "../utils/utils";
import { MovieType } from "../types/types";

const Home = () => {
  const [movies, setMovies] = useState<MovieType[] | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [size] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${BACKEND_URL}/movies`, { params: { page, size } })
        if (response.data.data.length === 0) {
          toast('No more movies to show')
          setPage(page - 1)
        }
        setMovies(response.data.data)
      } catch (error) {
        console.error(error)
        toast.error("Error fetching movies")
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [page, size])

  return (
    <main>
      <HeroComponent />
      {loading && <SpinnerComponent />}
      { movies && (
        <>
          <MoviesComponent movies={movies} />
          <PaginationComponent page={page} setPage={setPage}/>
        </>
      )}
    </main>
  );
}

export default Home;