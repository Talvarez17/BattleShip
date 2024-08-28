import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";


export const Welcome = () => {

  const socket = useContext(SocketContext);

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
