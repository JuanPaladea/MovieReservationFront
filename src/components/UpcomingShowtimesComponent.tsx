import axios from "axios";
import { useEffect, useState } from "react";
import SpinnerComponent from "./SpinnerComponent";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const UpcomingShowtimesComponent = ({ movieId }: any) => {
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/showtimes/upcoming/${movieId}`);
        setShowtimes(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchShowtimes();
  }, [movieId]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Upcoming showtimes</h1>
        </div>

        <div className="flex flex-wrap -m-2">  
          { showtimes ? showtimes.map((showtime: any) => (
            <Link to={`/showtime/${showtime.showtime_id}`} className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium"> {new Date(showtime.show_date).toLocaleDateString()} </h2>
                  <p className="text-gray-700"> {showtime.show_time} </p>
                  <p className="text-gray-500"> Hall: {showtime.hall_id} </p>
                </div>
              </div>
            </Link>
          )) : <SpinnerComponent />
          }
        </div>
      </div>
    </section>
  )
}

export default UpcomingShowtimesComponent;