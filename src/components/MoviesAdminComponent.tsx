import { Link, useNavigate } from "react-router-dom";
import AddMovieForm from "./AddMovieForm";
import axios from "axios";
import toast from "react-hot-toast";
import SpinnerComponent from "./SpinnerComponent";
import { useState } from "react";

interface MoviesComponentProps {
  movies: any[];
}

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const MoviesAdminComponent = ({ movies }: MoviesComponentProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleDeleteMovie = async (movieId: number) => {
    try {
      setLoading(true);
      const response = await axios.delete(`${BACKEND_URL}/movies/${movieId}`, { withCredentials: true });
      if (response.status === 200) {
        toast.success('Movie deleted successfully');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete movie');
    } finally {
      setLoading(false);
      navigate('/admin-movies');
    } 
  }

  return (
    <section className="text-gray-600 body-font">
      { loading && <SpinnerComponent />}
      <AddMovieForm />
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {movies.map((movie) => (
            <Link to={`movie/${movie.movie_id}`} key={movie.movie_id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-100 rounded w-full object-cover object-center mb-6" src={movie.thumbnails} alt={movie.title + ' poster'} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"> {movie.genre} </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{movie.title}</h2>
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit</button>
                <button onClick={() => handleDeleteMovie(movie.movie_id)} className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoviesAdminComponent;