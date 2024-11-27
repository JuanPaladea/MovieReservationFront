import { Route, Routes } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import Home from "../pages/Home";
import FooterComponent from "../components/FooterComponent";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Movie from "../pages/Movie";
import SeatSelection from "../pages/SeatSelection";
import User from "../pages/User";
import Error from "../pages/Error";
import { Toaster } from "react-hot-toast";
import AdminMovies from "../pages/AdminMovies";

const MainRouter = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin-movies" element={<AdminMovies />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default MainRouter;