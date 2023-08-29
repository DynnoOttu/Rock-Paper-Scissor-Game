import { useState } from "react";
import "./App.css";
// import Header from "./Components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import Play from "./Components/play";

const App = () => {
  const [score, setScore] = useState(0);
  const [myChoice, setMyChoice] = useState("");

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home setMyChoice={setMyChoice} />} />
        <Route
          path={"/game"}
          element={
            <Play myChoice={myChoice} setScore={setScore} score={score} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
