import { useContext } from "react";
import AddShowtimeFormComponent from "../components/AddShowtimeFormComponent";
import ErrorComponent from "../components/ErrorComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import { UserContext } from "../context/UserContext";

const AdminShowtimes = () => {
  const { user } = useContext(UserContext)


  return (
    <AddShowtimeFormComponent/>
  )
}