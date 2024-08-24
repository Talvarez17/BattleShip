import React from "react";

const NewGameButton = ({ newGame }) => {
  return (
    <div className="new-game">
      <button onClick={newGame}>Nueva Partida</button>
    </div>
  );
};

export default NewGameButton;