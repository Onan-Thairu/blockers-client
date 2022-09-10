import Home from "./Home";
import CreateBlocker from "./CreateBlocker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blockers-list" element={ <Home /> }></Route>
        <Route path="/create-blocker" element={ <CreateBlocker /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages;