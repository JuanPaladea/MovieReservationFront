import { useContext } from "react"

import { UserContext } from "../context/UserContext"
import UserInformationComponent from "../components/UserInformationComponent"
import ErrorComponent from "../components/ErrorComponent"
import DashboardComponent from "../components/DashboardComponent"
import UserReservationsComponent from "../components/UserReservationsComponent"
import type { UserType } from "../types/types"

const User = () => {
  const { user } = useContext(UserContext) as { user: UserType | null }

  return (
    user ? (
      <>
        <UserInformationComponent user={user} />
        { user.role === 'admin' ? (
          <DashboardComponent />
        ) : null }
        <UserReservationsComponent />
      </>
    ) : (
      <ErrorComponent error_number={401} error_message="You are not logged in" error_title="Error" />
    )
  )
}

export default User