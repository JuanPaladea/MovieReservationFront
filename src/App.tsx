import { BrowserRouter } from "react-router-dom"
import MainRouter from "./router/MainRouter"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App