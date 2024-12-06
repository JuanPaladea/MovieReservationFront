import { createContext, useEffect, useState } from "react";
import axios from "axios";

import { BACKEND_URL } from "../utils/utils";
import type { UserType } from "../types/types";

export const UserContext = createContext<{ user: UserType | null, setUser: React.Dispatch<React.SetStateAction<UserType | null>>} | undefined>(undefined)

export const UserProvider = ({children}: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null)

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