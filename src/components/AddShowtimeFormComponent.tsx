import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import SpinnerComponent from "./SpinnerComponent";
import { useNavigate } from "react-router-dom";


const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AddShowtimeFormComponent = ({ movieId }: any) => {
  const [showtimeData, setShowtimeData] = useState({ movieId: movieId, hallId: '', showDate: '', showTime: '', price: 0 });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddShowtime = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/showtimes`, showtimeData, { withCredentials: true });
      if (response.status === 201) {
        toast.success('Showtime added successfully');
        navigate('/user');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add showtime');
    } finally {
      setLoading(false);
      setShowtimeData({ movieId: '', hallId: '', showDate: '', showTime: '', price: 0 });
    }
  }

  return (
    <div className="mt-10 sm:mx-auto lg:w-1/2 px-5">
      { loading && <SpinnerComponent />}
      <form action="#" method="POST" className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900">Add Showtime</h1>
        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            hallId
          </label>
          <div className="mt-2">
            <input
              id="hall_id"
              name="hallId"
              type="text"
              required
              autoComplete="hallId"
              value={showtimeData.hallId}
              onChange={(e) => setShowtimeData({ ...showtimeData, hallId: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            showDate
          </label>
          <div className="mt-2">
            <input
              id="show_date"
              name="showDate"
              type="date"
              required
              autoComplete="showDate"
              value={showtimeData.showDate}
              onChange={(e) => setShowtimeData({ ...showtimeData, showDate: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            showTime
          </label>
          <div className="mt-2">
            <input
              id="show_time"
              name="showTime"
              type="time"
              required
              autoComplete="showTime"
              value={showtimeData.showTime}
              onChange={(e) => setShowtimeData({ ...showtimeData, showTime: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            price
          </label>
          <div className="mt-2">
            <input
              id="price"
              name="price"
              type="number"
              required
              autoComplete="price"
              value={showtimeData.price}
              onChange={(e) => setShowtimeData({ ...showtimeData, price: parseInt(e.target.value) })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleAddShowtime}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Showtime
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddShowtimeFormComponent;