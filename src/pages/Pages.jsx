import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blockers" element={ <Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages;