import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import SpinnerComponent from "./SpinnerComponent";
import PaginationComponent from "./PaginationComponent";
import { BACKEND_URL } from "../utils/utils";
import { ShowtimeType } from "../types/types";

const UpcomingShowtimesComponent = ({ movieId }: any) => {
  const [showtimes, setShowtimes] = useState<ShowtimeType[] | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [size] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/showtimes/upcoming/${movieId}`, { withCredentials: true, params: { page, size} });
        if (response.data.data.length === 0) {
          toast('No more showtimes to show')
          setPage(page - 1)
        }
        setShowtimes(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchShowtimes();
  }, [movieId, page, size]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Upcoming showtimes</h1>
        </div>

        <div className="flex flex-wrap -m-2">  
          { loading && <SpinnerComponent /> }
          { showtimes && (
            <>
             {
               showtimes.map((showtime: any) => (
                 <Link to={`/showtime/${showtime.showtime_id}`} className="p-2 lg:w-1/4 md:w-1/2 w-full">
                   <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                     <div className="flex-grow">
                       <h2 className="text-gray-900 title-font font-medium"> {new Date(showtime.show_date).toLocaleDateString('en-GB')} </h2>
                       <p className="text-gray-700"> {showtime.show_time} </p>
                       <p className="text-gray-500"> Hall: {showtime.hall_id} </p>
                     </div>
                   </div>
                 </Link>
               )) 
             }
             <PaginationComponent page={page} setPage={setPage} /> 
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default UpcomingShowtimesComponent;