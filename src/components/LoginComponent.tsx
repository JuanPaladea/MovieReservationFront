import { useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { UserContext } from "../context/UserContext";
import SpinnerComponent from "./SpinnerComponent";
import { UserType } from "../types/types";
import { BACKEND_URL } from "../utils/utils";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState<{ email: string, password: string }>({ email: '', password: '' });
  const { setUser } = useContext(UserContext) as { setUser: React.Dispatch<React.SetStateAction<UserType | null>> };
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/session/login`, credentials, { withCredentials: true });
      const token = response.data.data.token
      const decodedToken = jwtDecode(token);
      const user = decodedToken as UserType;
      setUser(user);
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to login');
      console.error(error);
    } finally {
      setLoading(false);
      setCredentials({ email: '', password: '' });      
    }
  }

  return (
    <>
      { loading ? (
        <SpinnerComponent />
      ) : (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Movie logo"
            src="https://png.pngtree.com/element_pic/16/11/18/4f829e85866bd52d062ca58b4e1ecef5.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register
            </a>
          </p>
        </div>
      </div>
      )}
    </>
  )
}

export default LoginComponent