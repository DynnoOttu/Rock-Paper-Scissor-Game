import React, { useEffect, useState } from "react";

const Play = ({ myChoice, setScore, score }) => {
  const [computerChoice, setcomputerChoice] = useState("");
  const [gameResult, setGameResult] = useState("");

  const randomComputer = () => {
    const pilihan = ["Batu", "Gunting", "Kertas"];
    setcomputerChoice(pilihan[Math.floor(Math.random() * 3)]);
  };

  const result = () => {
    if (myChoice === "Batu" && computerChoice === "Gunting") {
      setGameResult("Anda Menang");
      setScore(score + 1);
    } else if (myChoice === "Batu" && computerChoice === "Kertas") {
      setGameResult("Anda Kalah");
      setScore(score - 1);
    } else if (myChoice === "Gunting" && computerChoice === "Kertas") {
      setGameResult("Anda Menang");
      setScore(score + 1);
    } else if (myChoice === "Gunting" && computerChoice === "Batu") {
      setGameResult("Anda Kalah");
      setScore(score - 1);
    } else if (myChoice === "Kertas" && computerChoice === "Batu") {
      setGameResult("Anda Menang");
      setScore(score + 1);
    } else if (myChoice === "Kertas" && computerChoice === "Gunting") {
      setGameResult("Anda Kalah");
      setScore(score - 1);
    } else {
      setGameResult("Seri");
    }
  };

  useEffect(() => {
    randomComputer();
  }, []);

  useEffect(() => {
    result();
  }, [computerChoice]);

  return (
    <>
      <div>Player memilih: {myChoice}</div>
      <div>Komuter memilih: {computerChoice}</div>
      <div>{gameResult}</div>
    </>
  );
};

export default Play;
