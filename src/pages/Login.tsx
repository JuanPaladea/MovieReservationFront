import { useContext } from "react";

import LoginComponent from "../components/LoginComponent"
import { UserContext } from "../context/UserContext";
import ErrorComponent from "../components/ErrorComponent";
import { UserType } from "../types/types";

const Login = () => {
  const {user} = useContext(UserContext) as {user: UserType | null}

  return (
    user ? (
      <ErrorComponent error_number={403} error_message="You are already logged in" error_title="Error" />
    ) : (
      <LoginComponent />
    )
  )
}

export default Login;