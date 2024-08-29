import React, { useContext, useEffect } from "react";
import useGame from "../hooks/useGame";
import Board from "./Display/Board";
import { SocketContext } from "../context/SocketContext";
import { Link} from "react-router-dom"
import "./css/vista.css"

export const Vista = () => {
    const socket = useContext(SocketContext);
    const { opponentState, myState } = useGame(true, socket);

    useEffect(() => {
        // Modify useGame to include a "viewOnly" mode or filter socket events
        // Set up connection to view a random game without playing
    }, []);

    return (
        <div className="game-container">
            <h1 className="game-title">[ Juego en curso ]</h1>

            <div className="header">
                <Link to={"/partidas"} className="back-button">Regresar</Link>
            </div>
            
            <div className="display">
                <Board state={myState} />
                <Board state={opponentState} />
            </div>
        </div>
    );
};

export default Vista;