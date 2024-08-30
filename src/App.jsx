import React, { useContext } from "react";
import "./App.css";
import Display from "./Components/Display";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import { SocketContext } from "./context/SocketContext";
import useGame from "./hooks/useGame";
import "../src/Components/css/partidas.css"
import { Link } from "react-router-dom";

const App = () => {
  const socket = useContext(SocketContext);
  const { myState, opponentState, logState } = useGame(false, socket);

  return (
    <>
      <Heading />
      <div className="header">
        <Link to={"/"} className="back-button">Regresar</Link>
      </div>
      
      <Display {...{ myState, opponentState }} />
      <LogList {...logState} />
    </>
  );
};

export default App;
