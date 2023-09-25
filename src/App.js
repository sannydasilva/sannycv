import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sannycv" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
