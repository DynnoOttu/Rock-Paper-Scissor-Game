import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Play from "./Components/play";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game"} element={<Play />} />
      </Routes>
    </>
  );
};

export default App;
