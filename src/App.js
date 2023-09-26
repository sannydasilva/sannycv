import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import Header from "./components/header/Header";
import Exp from "./exp/Exp";
import ErrorPage from "./404/ErrorPage";
import Form from "./formation/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sannycv" element={<Home />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>

          <Route path="/exp" element={<Exp />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
