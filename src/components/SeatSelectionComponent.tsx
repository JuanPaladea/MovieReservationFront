import { useState } from "react";

const SeatSelectionComponent = () => {
  // Define the seating layout (e.g., 5 rows and 8 seats per row)
  const rows = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) => `${row}-${col}`)
  );

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Handle seat selection toggle
  const toggleSeatSelection = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 py-12">Select Your Seats</h2>
          <div className="grid gap-10">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center space-x-10">
                {row.map((seat) => (
                  <button
                    key={seat}
                    onClick={() => toggleSeatSelection(seat)}
                    className={`w-10 h-10 rounded 
                    ${selectedSeats.includes(seat) ? "bg-green-500" : "bg-gray-200"} 
                    hover:bg-gray-300`}
                  >
                    {seat.split("-")[1]} {/* Display seat number */}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div className="py-12">
            <h3 className="text-xl font-semibold">Selected Seats:</h3>
            <p>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Confirm Selection
          </button>
        </div>
      </div>

    </section>
  );
};

export default SeatSelectionComponent;
