import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./components/home"
import Registrat from "./components/registration"

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registration" element={<Registrat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App