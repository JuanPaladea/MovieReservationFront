import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import SpinnerComponent from "./SpinnerComponent";
import PaginationComponent from "./PaginationComponent";
import { BACKEND_URL } from "../utils/utils";
import { ReservationType } from "../types/types";

const UserReservationsComponent = () => {
  const [reservations, setReservations] = useState<ReservationType[] | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading
        const response = await axios.get(`${BACKEND_URL}/reservations/user`, { params: { page }, withCredentials: true });
        if (response.data.data.length === 0) {
          toast('No more reservation to show')
          setPage(page - 1)
        }
        setReservations(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [page]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Reservations</h1>
        </div>
        <div className="flex flex-wrap -m-2">
          { loading && <SpinnerComponent /> }
          { reservations && (
            <>
              {
              reservations.map((reservation: any) => (
                <Link to={`/reservation/${reservation.reservation_id}`} className="p-2 lg:w-1/4 md:w-1/2 w-full" key={reservation.reservation_id}>
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">{reservation.reservation_date}</h2>
                      <p className="text-gray-700">{reservation.status}</p>
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

export default UserReservationsComponent;