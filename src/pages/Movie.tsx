import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MovieComponent from "../components/MovieComponent"
import UpcomingShowtimesComponent from "../components/UpcomingShowtimesComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import { BACKEND_URL } from "../utils/utils";
import { MovieType } from "../types/types";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);

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