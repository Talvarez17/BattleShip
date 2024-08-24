import React from "react";

const TileButtons = ({ clearTiles, confirmTiles }) => {
  return (
    <div>
      <button onClick={confirmTiles}>Confirmar</button>
      <button className="cancel" onClick={clearTiles}>Limpiar</button>
    </div>
  );
};

export default TileButtons;