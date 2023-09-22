import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/login"
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
