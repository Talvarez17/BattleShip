import React from "react";
import "./App.css";
import Boards from "./Components/Boards/";
import LogList from "./Components/Log";
import Heading from "./Components/Heading";
import useGame from "./hooks/useGame";

const App = () => {
  const { state, newGame } = useGame();
  const { messages, myShips, opponentShips } = state;

  return (
    <>
      <Heading />
      <Boards
        {...{
          myShips: myShips,
          opponentShips: opponentShips,
        }}
      />
      <LogList {...{ messages, newGame }} />
    </>
  );
};

export default App;
