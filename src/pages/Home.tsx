import { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import MoviesComponent from "../components/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent";
import axios from "axios";
import SpinnerComponent from "../components/SpinnerComponent";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [size , setSize] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/movies`, { params: { page } })
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
    <main>
      <HeroComponent />
      { loading ? (
        <SpinnerComponent />
      ) : (
        <MoviesComponent movies={movies} />
      )}
      <PaginationComponent page={page} setPage={setPage} />
    </main>
  );
}

export default Home;