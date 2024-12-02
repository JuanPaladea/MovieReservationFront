import axios from "axios";
import { useEffect, useState } from "react";
import ReservationComponent from "../components/ReservationComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Reservation = () => {
  const {id} = useParams();
  const [reservation, setReservation] = useState(null)

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