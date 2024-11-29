import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinnerComponent from "../components/SpinnerComponent";
import MovieComponent from "../components/MovieComponent";
import SeatSelectionComponent from "../components/SeatSelectionComponent";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Showtime = () => {
  const { id } = useParams<{ id: string }>();
  const [showtime, setShowtime] = useState<any>(null);
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch showtime
        const showtimeResponse = await axios.get(`${BACKEND_URL}/showtimes/${id}`);
        const fetchedShowtime = showtimeResponse.data.data;
        setShowtime(fetchedShowtime);

        // Fetch movie based on showtime.movie_id
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
        <div className="container mx-auto px-4 py-8">
          <MovieComponent movie={movie} />
          <SeatSelectionComponent showtime={showtime} />
        </div>
      )
    )
  );
};

export default Showtime;
