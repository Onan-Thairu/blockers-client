import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import CreateBlocker from "./CreateBlocker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blockers-list" element={ <Home /> } />
        <Route path="/create-blocker" element={ <CreateBlocker /> } />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/login" element={ <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages;