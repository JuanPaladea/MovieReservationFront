import { useContext, useEffect, useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";

import HallAdminComponent from "../components/HallsAdminComponent"
import { UserContext } from "../context/UserContext"
import ErrorComponent from "../components/ErrorComponent"
import SpinnerComponent from "../components/SpinnerComponent";
import { BACKEND_URL } from "../utils/utils";
import { HallType, UserType } from "../types/types";

const AdminHalls = () => {
  const [halls, setHalls] = useState<HallType[] | undefined>(undefined)
  const { user } = useContext(UserContext) as { user: UserType | null }

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