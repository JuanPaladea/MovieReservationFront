import { Link } from "react-router-dom";

const DashboardComponent = () => {
return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Dashboard</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <Link to="/admin-movies" className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYu1_r93_Pmh6kx7_um-CY-oJhbUYsE5CCQ&s" />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">Movies</h2>
                <p className="mb-4">Handle Movies Creation, Update and Deletion</p>
              </div>
            </div>
          </Link>
          <Link to="/admin-halls" className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-cinema-movie-theater-with-blank-screen-and-red-seat-png-image_5805360.png" />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">Halls</h2>
                <p className="mb-4">Handle Halls Creation and Deletion</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default DashboardComponent;