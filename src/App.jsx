import React, { useContext } from "react";
import "./App.css";
import Display from "./Components/Display";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import { SocketContext } from "./context/SocketContext";
import useGame from "./hooks/useGame";

const App = () => {
  const socket = useContext(SocketContext);
  const {myState, opponentState, logState} = useGame(false, socket);

  return (
    <>
      <Heading />
      <Display {...{ myState, opponentState }} />
      <LogList {...logState} />
    </>
  );
};

export default App;
