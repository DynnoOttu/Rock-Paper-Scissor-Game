import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Play from "./Components/Play";

const App = () => {
  const [score, setScore] = useState(0);
  const [myChoice, setMyChoice] = useState("");

  return (
    <>
      <Header score={score} />
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
