import React, { useContext, useEffect } from "react";
import useView from "../hooks/useView";
import Board from "./Display/Board";
import { SocketContext } from "../context/SocketContext";
import { Link} from "react-router-dom"
import "./css/vista.css"

export const Vista = () => {
    const socket = useContext(SocketContext);
    const players = JSON.parse(localStorage.getItem("players"));
    const state1  = useView(true, socket, players[0]);
    const state2 = useView(true, socket, players[1]);

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
                <Board state={state1.opponentState} />
                <Board state={state2.opponentState} />
            </div>
        </div>
    );
};

export default Vista;