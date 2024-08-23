import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate("/view");
  };

  const handlePlayClick = () => {
    navigate("/play");
  };

  return (
    <div>
      <h1>Welcome to the Game</h1>
      <button onClick={handleViewClick}>View</button>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  );
};

export default Welcome;
