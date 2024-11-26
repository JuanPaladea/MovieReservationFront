import { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import MoviesComponent from "../components/MoviesComponent";
import PaginationComponent from "../components/PaginationComponent";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [size , setSize] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/movies`, { params: { page } })
        setMovies(response.data.data)
      } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies")
      }
    }
    fetchData();
  }, [page])

  return (
    <main>
      <HeroComponent />
      { movies ? (
        <MoviesComponent movies={movies} />
      ) : (
        <div>Loading...</div>
      )}
      <PaginationComponent page={page} setPage={setPage} />
    </main>
  );
}

export default Home;