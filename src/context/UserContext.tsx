import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<{ user: any, setUser: React.Dispatch<React.SetStateAction<any>> | null }>({ user: null, setUser: null })

export const UserProvider = ({children}: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken as any);
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}