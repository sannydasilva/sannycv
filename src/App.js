import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import Header from "./components/header/Header";
import Exp from "./exp/Exp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sannycv" element={<Home />}></Route>
          <Route path="/sannycv/*" element={<Home />}></Route>

          <Route path="/exp" element={<Exp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
