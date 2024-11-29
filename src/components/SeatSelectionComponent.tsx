import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerComponent from "./SpinnerComponent";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

interface seat {
  seat_id: number;
  showtime_id: number;
  row_number: number;
  seat_number: number;
  status: string;
}

const SeatSelectionComponent = ({ showtime } : any) => {
  const [seats, setSeats] = useState<seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [groupedSeats, setGroupedSeats] = useState<any>({});

  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/seats/showtime/${showtime.showtime_id}`);
        setSeats(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSeats();
  }, [showtime.showtime_id]);

  useEffect(() => {
    if (seats.length > 0) {
      const groupedSeats = seats.reduce((acc: any, seat) => {
        if (!acc[seat.row_number]) {
          acc[seat.row_number] = [];
        }

        acc[seat.row_number].push(seat);
        return acc
      }, {});

      setGroupedSeats(groupedSeats);
    }
  }, [seats])

  const handleConfirmSelection = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${BACKEND_URL}/reservations`, { seatIds: selectedSeats }, { withCredentials: true });
      toast.success('Seats reserved successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to reserve seats');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 py-12">Select Your Seats</h2>
          { loading ? (
            <SpinnerComponent />
          ) : (
            seats && (
              <>
                <div className="grid gap-10 mx-auto">
                  {/* Display seats by row for each row_number, show seat_number and display status if reserved in red if available in gray, set selected in green */}
                  {Object.keys(groupedSeats).map((rowNumber) => (
                    <div key={rowNumber} className="grid grid-cols-12 gap-4">
                      {groupedSeats[rowNumber].map((seat: seat) => (
                        <button
                          key={seat.seat_id}
                          className={`py-2 px-4 rounded ${seat.status === "reserved" ? "bg-red-500" : seat.status === "available" ? "bg-gray-400" : "bg-green-500"} text-white`}
                          onClick={() => {
                            if (seat.status === "available") {
                              setSelectedSeats((prev) => [...prev, seat.seat_id]);
                            } else if (seat.status === "selected") {
                              setSelectedSeats((prev) => prev.filter((selectedSeat) => selectedSeat !== seat.seat_id));
                            } else if (seat.status === "reserved") {
                              return;
                            }
                          }}
                        >
                          {seat.row_number} | {seat.seat_number}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="py-12">
                  <h3 className="text-xl font-semibold">Selected Seats:</h3>
                  <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
                </div>
                <button 
                onClick={handleConfirmSelection}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                  Confirm Selection
                </button>
              </>
            )
          )}
        </div>
      </div>

    </section>
  );
};

export default SeatSelectionComponent;
