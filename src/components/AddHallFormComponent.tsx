import { useState } from "react";
import SpinnerComponent from "./SpinnerComponent";
import toast from "react-hot-toast";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AddHallFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [hallData, setHallData] = useState({
    name: '',
    total_rows: 0,
    seat_per_rows: 0
  });

  const handleAddHall = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/halls`, hallData, { withCredentials: true });
      if (response.status === 201) {
        toast.success('Hall added successfully');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add hall');
    } finally {
      setLoading(false);
      setHallData({ name: '', total_rows: 0, seat_per_rows: 0 });
      window.location.reload();      
    }
  }

  return (
    <div className="mt-10 sm:mx-auto lg:w-1/2 px-5">
      { loading && <SpinnerComponent />}
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              id="movie_title"
              name="title"
              type="text"
              required
              autoComplete="title"
              value={hallData.name}
              onChange={(e) => setHallData({ ...hallData, name: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm/6 font-medium text-gray-900">
            Total Rows
          </label>
          <div className="mt-2">
            <input
              id="genre"
              name="genre"
              type="number"
              required
              value={hallData.total_rows}
              onChange={(e) => setHallData({ ...hallData, total_rows: parseInt(e.target.value) })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm/6 font-medium text-gray-900">
            Seat Per Rows
          </label>
          <div className="mt-2">
            <input
              id="duration"
              name="duration"
              type="number"
              required
              value={hallData.seat_per_rows}
              onChange={(e) => setHallData({ ...hallData, seat_per_rows: parseInt(e.target.value) })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleAddHall}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Hall
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddHallFormComponent;