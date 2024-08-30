import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import "./css/welcome.css"


export const Welcome = () => {

  const socket = useContext(SocketContext);

  const navigate = useNavigate();

  const handleViewClick = () => {
    socket.emit('seleccion', { type: 'VIEWER' });
    navigate("/partidas");
  };

  const handlePlayClick = () => {
    socket.emit('seleccion', { type: 'PLAYER' });
    navigate("/jugar");
  };

  return (

    <div className="container">

      <h1 className="title">[ Battleship ]</h1>

      <div className="content-box">
        <button className="btn" onClick={handleViewClick}>Ver Partidas</button>
        <button className="btn1" onClick={handlePlayClick}>Jugar</button>
      </div>
    </div>
  );
};

export default Welcome;
