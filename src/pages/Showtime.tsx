import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SpinnerComponent from "../components/SpinnerComponent";
import MovieComponent from "../components/MovieComponent";
import SeatSelectionComponent from "../components/SeatSelectionComponent";
import { BACKEND_URL } from "../utils/utils";
import type { ShowtimeType, MovieType } from "../types/types";

const Showtime = () => {
  const { id } = useParams<{ id: string }>();
  const [showtime, setShowtime] = useState<ShowtimeType | undefined>(undefined);
  const [movie, setMovie] = useState<MovieType | undefined>(undefined);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const showtimeResponse = await axios.get(`${BACKEND_URL}/showtimes/${id}`);
        const fetchedShowtime = showtimeResponse.data.data;
        setShowtime(fetchedShowtime);

        const movieResponse = await axios.get(`${BACKEND_URL}/movies/${fetchedShowtime.movie_id}`);
        setMovie(movieResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    loading ? (
      <SpinnerComponent />
    ) : (
      movie && showtime && (
        <>
          <MovieComponent movie={movie} />
          <SeatSelectionComponent showtime={showtime} />
        </>
      )
    )
  );
};

export default Showtime;
