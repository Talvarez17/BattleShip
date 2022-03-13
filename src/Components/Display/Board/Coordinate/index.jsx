import React from "react";
import "./Coordinate.css";
import CoordinateList from "./CoordinateList";

const Coordinate = ({ placedShips, clickTile, chosenTiles, shot }) => {
  const lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(
      <CoordinateList
        {...{ key: i, clickTile, row: i, placedShips, chosenTiles, shot }}
      />
    );
  }
  

  return <div className="coordinate">{lst}</div>;
};

export default Coordinate;
