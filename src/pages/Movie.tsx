import { useParams } from "react-router-dom";
import MovieComponent from "../components/MovieComponent"
import UpcomingShowtimesComponent from "../components/UpcomingShowtimesComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import SpinnerComponent from "../components/SpinnerComponent";

interface MovieType {
  movie_id: number;
  title: string;
  genre: string;
  duration: number;
  rating: string;
  release_date: string;
  description: string;
  thumbnails: string;
}

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/movies/${id}`);
        setMovie(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  } , [id]);

  return (
    <>
      { movie ? (
        <>
          <MovieComponent movie={movie}/>
          <UpcomingShowtimesComponent movieId={movie.movie_id} />
        </>
      ) : (
        <SpinnerComponent />
      )}
    </>
  )
}

export default Movie;