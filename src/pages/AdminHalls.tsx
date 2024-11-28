import { useContext, useEffect, useState } from "react"
import HallAdminComponent from "../components/HallsAdminComponent"
import { UserContext } from "../context/UserContext"
import ErrorComponent from "../components/ErrorComponent"
import axios from "axios";
import SpinnerComponent from "../components/SpinnerComponent";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const AdminHalls = () => {
  const [halls, setHalls] = useState(null);
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/halls`, { withCredentials: true })
        setHalls(response.data.data)
      } catch (error) {
        console.error(error)
        toast.error("Failed to fetch halls")
      }
    }
    fetchData()
  }, [])

  return (
    user?.role == 'admin' ? (
      halls ? (
        <HallAdminComponent halls={halls} />
      ) : (
        <SpinnerComponent />
      )
    ) : (
      <ErrorComponent error_number={403} error_title="Forbidden" error_message="You are not authorized to view this page" />
    )
  )
}

export default AdminHalls;