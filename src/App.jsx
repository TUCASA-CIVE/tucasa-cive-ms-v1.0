import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/login"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
