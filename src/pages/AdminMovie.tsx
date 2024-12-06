import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import MovieComponent from "../components/MovieComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import EditMovieFormComponent from "../components/EditMovieFormComponent";
import { UserContext } from "../context/UserContext";
import ErrorComponent from "../components/ErrorComponent";
import AddShowtimeFormComponent from "../components/AddShowtimeFormComponent";
import UpcomingShowtimesComponent from "../components/UpcomingShowtimesComponent";
import { BACKEND_URL } from "../utils/utils";
import { MovieType, UserType } from "../types/types";

const AdminMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);
  const { user } = useContext(UserContext) as { user: UserType | null };

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
      { 
        user?.role == 'admin' ? ( 
          movie ? (
            <>
              <MovieComponent movie={movie} />
              <EditMovieFormComponent movie={movie} />
              <AddShowtimeFormComponent movieId={movie.movie_id} />
              <UpcomingShowtimesComponent movieId={movie.movie_id} />
            </>
          ) : (
            <SpinnerComponent />
          )
        ) : (
          <ErrorComponent error_number={403} error_title="Forbidden" error_message="You are not authorized to view this page" />
        )
      }
    </>
  ) 
}

export default AdminMovie;