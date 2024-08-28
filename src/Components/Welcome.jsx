import React from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://172.16.21.62:3001");

export const Welcome = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    socket.emit('seleccion', {type: 'VIEWER'});
    navigate("/partidas");
  };
  
  const handlePlayClick = () => {
    socket.emit('seleccion', {type: 'PLAYER'});
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
