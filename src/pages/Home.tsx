import { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import MoviesComponent from "../components/MoviesComponent";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/movies`)
        console.log(response.data)
        setMovies(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData();
  }, [])

  return (
    <main>
      <HeroComponent />
      <MoviesComponent />
    </main>
  );
}

export default Home;