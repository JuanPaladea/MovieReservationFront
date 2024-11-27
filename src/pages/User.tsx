import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import ReservationsComponent from "../components/ReservationsComponent"
import UserInformationComponent from "../components/UserInformationComponent"
import ErrorComponent from "../components/ErrorComponent"
import DashboardComponent from "../components/DashboardComponent"

const User = () => {
  const {user} = useContext(UserContext) as any

  return (
    user ? (
      <>
        <UserInformationComponent user={user} />
        { user.role === 'admin' ? (
          <DashboardComponent />
        ) : null }
        <ReservationsComponent />
      </>
    ) : (
      <ErrorComponent error_number={401} error_message="You are not logged in" error_title="Error" />
    )
  )
}

export default User