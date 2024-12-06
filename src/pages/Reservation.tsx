import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ReservationComponent from "../components/ReservationComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import { BACKEND_URL } from "../utils/utils";
import { ReservationType } from "../types/types";

const Reservation = () => {
  const {id} = useParams();
  const [reservation, setReservation] = useState<ReservationType | undefined>(undefined);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/reservations/${id}`, { withCredentials: true });
        setReservation(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservation();
  }, []);

  return (
    reservation ? (
      <ReservationComponent reservation={reservation} />
    ) : 
      <SpinnerComponent />
  )
}

export default Reservation;