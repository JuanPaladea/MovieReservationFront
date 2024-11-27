import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface UserContextType {
  user: any;
  setUser: (user: any) => void;
}

const NavBarComponent = () => {
  const { user, setUser } = useContext(UserContext) as UserContextType;
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  }
  
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Movie Reservation</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
        {user ? (
          <>
            <Link to="/user" className="inline-flex items-center bg-gray-100 border-0 py-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{user.email}
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              </svg>
            </Link>
            <button onClick={handleLogout} className="inline-flex items-center bg-gray-100 border-0 py-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign-Out
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </>
        ) : (
        <Link to="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign-In
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        )}
      </div>
    </header>
  );
}

export default NavBarComponent;