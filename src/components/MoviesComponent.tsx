import { Link } from "react-router-dom";

interface MoviesComponentProps {
  movies: any[];
}

const MoviesComponent = ({ movies }: MoviesComponentProps) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Movies</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {movies.map((movie) => (
            <Link to={`movie/${movie.movie_id}`} key={movie.movie_id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-100 rounded w-full object-cover object-center mb-6" src={movie.thumbnails} alt={movie.title + ' poster'} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"> {movie.genre} </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{movie.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoviesComponent;