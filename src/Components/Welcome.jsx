import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/partidas");
  };

  const handlePlayClick = () => {
    navigate("/jugar");
  };

  return (
    <div>
      <h1>Welcome to the Game</h1>
      <button onClick={handleViewClick}>Ver Partidas</button>
      <button onClick={handlePlayClick}>Jugar</button>
    </div>
  );
};

export default Welcome;
