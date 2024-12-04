import { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import MoviesComponent from "../components/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent";
import axios from "axios";
import SpinnerComponent from "../components/SpinnerComponent";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [size , setSize] = useState(8);
  const [loading, setLoading] = useState(false);

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
      { movies ? (
        <>
          <MoviesComponent movies={movies} />
          <PaginationComponent page={page} setPage={setPage}/>
        </>
      ) : (
        <SpinnerComponent />
      )}
    </main>
  );
}

export default Home;