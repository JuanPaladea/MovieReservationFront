import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const UserContext = createContext<{ user: any, setUser: React.Dispatch<React.SetStateAction<any>> | null }>({ user: null, setUser: null })

export const UserProvider = ({children}: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/session/user`, { withCredentials: true })
        if (response.status === 200) {
          setUser(response.data.data.user)
        } else {
          setUser(null)
        }
      } catch (error) {
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}