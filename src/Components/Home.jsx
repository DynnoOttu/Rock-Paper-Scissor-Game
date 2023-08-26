import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setMyChoice }) => {
  const coiceHandler = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <>
      <Link to="/game">
        <div onClick={coiceHandler} data-id="Batu">
          Batu
        </div>
      </Link>
      <Link to="/game">
        <div onClick={coiceHandler} data-id="Gunting">
          Gunting
        </div>
      </Link>
      <Link to="/game">
        <div onClick={coiceHandler} data-id="Kertas">
          Kertas
        </div>
      </Link>
    </>
  );
};

export default Home;
