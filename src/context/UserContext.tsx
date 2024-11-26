import { createContext, useState } from "react";

export const UserContext = createContext<{ user: any, setUser: React.Dispatch<React.SetStateAction<any>> | null }>({ user: null, setUser: null })

export const UserProvider = ({children}: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}