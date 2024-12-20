import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerComponent from "./SpinnerComponent";
import toast from "react-hot-toast";
import { SeatType } from "../types/types";
import { BACKEND_URL } from "../utils/utils";


interface SelectedSeat {
  seat_id: number;
  row_number: number;
  seat_number: number;
}

const SeatSelectionComponent = ({ showtime }: any) => {
  const [seats, setSeats] = useState<SeatType[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<SelectedSeat[]>([]);
  const [groupedSeats, setGroupedSeats] = useState<Record<number, SeatType[]>>({});
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/seats/showtime/${showtime.showtime_id}`);
        setSeats(response.data.data);
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, [showtime.showtime_id]);

  useEffect(() => {
    if (seats.length > 0) {
      const groupedSeats = seats.reduce((acc: Record<number, SeatType[]>, seat) => {
        if (!acc[seat.row_number]) {
          acc[seat.row_number] = [];
        }
        acc[seat.row_number].push(seat);
        return acc;
      }, {});
      setGroupedSeats(groupedSeats);
    }
  }, [seats]);

  const toggleSeatSelection = (seat: SeatType) => {
    setSelectedSeats((prev) => {
      const isAlreadySelected = prev.some((selectedSeat) => selectedSeat.seat_id === seat.seat_id);
      if (isAlreadySelected) {
        return prev.filter((selectedSeat) => selectedSeat.seat_id !== seat.seat_id);
      } else {
        return [...prev, { seat_id: seat.seat_id, row_number: seat.row_number, seat_number: seat.seat_number }];
      }
    });
  };

  const handleConfirmSelection = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const seatIds = selectedSeats.map((seat) => seat.seat_id);
      await axios.post(`${BACKEND_URL}/reservations`, { seatIds }, { withCredentials: true });
      toast.success("Seats reserved successfully");
      navigate("/");
    } catch (error: any) {
      // If the error is due to the user not being logged in, redirect to login page
      if (error.response.status === 401) {
        toast.error("You need to be logged in to reserve seats");
        navigate("/login");
        return
      }
      toast.error("Failed to reserve seats");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="w-1/2 lg:pl-10 lg:py-6 mb-6 lg:mb-0 mx-auto">
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Showtime</span>
            <span className="ml-auto text-gray-900"> {new Date(showtime.show_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} | {showtime.show_time}</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 py-12">Select Your Seats</h2>
          {loading ? (
            <SpinnerComponent />
          ) : (
            <>
              <div className="grid gap-6 mx-auto">
                {Object.entries(groupedSeats).map(([rowNumber, rowSeats]) => (
                  <div key={rowNumber} className="flex justify-center items-center space-x-2">
                    <span className="font-bold mr-4">Row {rowNumber}</span>
                    {rowSeats.map((seat) => (
                      <button
                        key={seat.seat_id}
                        onClick={() => toggleSeatSelection(seat)}
                        className={`w-10 h-10 rounded text-white ${
                          selectedSeats.some((selectedSeat) => selectedSeat.seat_id === seat.seat_id)
                            ? "bg-green-500"
                            : seat.status === "reserved"
                            ? "bg-red-500 cursor-not-allowed"
                            : "bg-gray-400 hover:bg-gray-500"
                        }`}
                        disabled={seat.status === "reserved"}
                      >
                        {seat.seat_number}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              <div className="py-12">
                <h3 className="text-xl font-semibold">Selected Seats:</h3>
                <p>
                  {selectedSeats.length > 0
                    ? selectedSeats
                        .map((seat) => `${seat.row_number} - ${seat.seat_number}`)
                        .join("; ")
                    : "None"}
                </p>
              </div>
              <button
                onClick={handleConfirmSelection}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Confirm Selection
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SeatSelectionComponent;