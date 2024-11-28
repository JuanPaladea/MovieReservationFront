import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import SpinnerComponent from "./SpinnerComponent";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AddMovieForm = () => {
  const [movieData, setMovieData] = useState({ title: '' , genre: '', duration: 0, rating: '', release_date: '', description: '', thumbnails: '' });
  const [loading, setLoading] = useState(false);

  const handleAddMovie = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/movies`, movieData, { withCredentials: true });
      if (response.status === 201) {
        toast.success('Movie added successfully');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add movie');
    } finally {
      setLoading(false);
      setMovieData({ title: '' , genre: '', duration: 0, rating: '', release_date: '', description: '', thumbnails: '' });
    }
  }

  return (
    <div className="mt-10 sm:mx-auto lg:w-1/2 px-5">
      { loading && <SpinnerComponent />}
      <form action="#" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Title
          </label>
          <div className="mt-2">
            <input
              id="movie_title"
              name="title"
              type="text"
              required
              autoComplete="title"
              value={movieData.title}
              onChange={(e) => setMovieData({ ...movieData, title: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="genre" className="block text-sm/6 font-medium text-gray-900">
            Genre
          </label>
          <div className="mt-2">
            <input
              id="genre"
              name="genre"
              type="text"
              required
              autoComplete="genre"
              value={movieData.genre}
              onChange={(e) => setMovieData({ ...movieData, genre: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm/6 font-medium text-gray-900">
            Duration
          </label>
          <div className="mt-2">
            <input
              id="duration"
              name="duration"
              type="number"
              required
              autoComplete="duration"
              value={movieData.duration}
              onChange={(e) => setMovieData({ ...movieData, duration: +e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm/6 font-medium text-gray-900">
            Rating
          </label>
          <div className="mt-2">
            <input
              id="rating"
              name="rating"
              type="text"
              required
              autoComplete="rating"
              value={movieData.rating}
              onChange={(e) => setMovieData({ ...movieData, rating: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="release_date" className="block text-sm/6 font-medium text-gray-900">
            Release Date
          </label>
          <div className="mt-2">
            <input
              id="release_date"
              name="release_date"
              type="date"
              required
              autoComplete="release_date"
              value={movieData.release_date}
              onChange={(e) => setMovieData({ ...movieData, release_date: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
            Description
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              required
              autoComplete="description"
              value={movieData.description}
              onChange={(e) => setMovieData({ ...movieData, description: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="thumbnails" className="block text-sm/6 font-medium text-gray-900">
            Thumbnails
          </label>
          <div className="mt-2">
            <input
              id="thumbnails"
              name="thumbnails"
              type="text"
              required
              autoComplete="thumbnails"
              value={movieData.thumbnails}
              onChange={(e) => setMovieData({ ...movieData, thumbnails: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>


        <div>
          <button
            onClick={handleAddMovie}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Movie
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMovieForm;