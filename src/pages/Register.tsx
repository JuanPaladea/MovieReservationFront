import { useContext } from "react"
import ErrorComponent from "../components/ErrorComponent"
import RegisterComponent from "../components/RegisterComponent"
import { UserContext } from "../context/UserContext"

const Register = () => {
  const {user} = useContext(UserContext) as any
  return (
    user ? (
      <ErrorComponent error_number={403} error_message="You are already logged in" error_title="Error" />
    ) : (
      <RegisterComponent />
    )
  )
}

export default Register;