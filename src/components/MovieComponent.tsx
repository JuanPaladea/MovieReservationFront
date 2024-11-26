interface MovieType {
  movie_id: number;
  title: string;
  genre: string;
  duration: number;
  rating: string;
  release_date: string;
  description: string;
  thumbnails: string;
}

const MovieComponent = ({ movie }: { movie: MovieType }) => {
  const movieDate = new Date(movie.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day : 'numeric' });
    
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt={`${movie.title} poster`} className="lg:w-1/3 h-fit rounded" src={movie.thumbnails} />
          <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4"> {movie.title} </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
            </div>
            <p className="leading-relaxed mb-4"> {movie.description} </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Genre</span>
              <span className="ml-auto text-gray-900"> {movie.genre} </span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Duration</span>
              <span className="ml-auto text-gray-900"> {movie.duration} min</span>
            </div>
            <div className="flex border-t border-b border-gray-200 py-2">
              <span className="text-gray-500">Rating</span>
              <span className="ml-auto text-gray-900"> {movie.rating} </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Release Date</span>
              <span className="ml-auto text-gray-900"> {movieDate} </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieComponent;