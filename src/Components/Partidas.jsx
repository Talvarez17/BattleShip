import { Link, useNavigate } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from "../context/SocketContext";
import "./css/partidas.css"


export const Partidas = () => {
    const socket = useContext(SocketContext);

    const [partidas, setPartidas] = useState();
    const navigator = useNavigate();

    useEffect(() => {
        socket.on("partidas-actuales", (clients) => {
            setPartidas(clients);
        });
        socket.emit("obtener-partidas");
        return () => {
            socket.off("partidas-actuales")
        }
    })

    const viewGame = (p1, p2) => {
        localStorage.setItem("players", JSON.stringify([p1, p2]));
        socket.emit("view-game", [p1, p2]);
        navigator("/ver");
    }

    return (
        <div className="container">

            <h1 className="game-title">[ Partidas disponibles ]</h1>

            <div className="header">
                <Link to={"/"} className="back-button">Regresar</Link>
            </div>

            <div className="content">
                <div className="table-container">
                    <table className="game-table">
                        <thead>
                            <tr>
                                <th scope="col">Jugador 1</th>
                                <th scope="col">Jugador 2</th>
                                <th scope="col">Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partidas && Object.keys(partidas).map((partida, index) => {
                                if ((index % 2) > 0 || index === 0) {
                                    return (
                                        <tr key={partida}>
                                            <td>{partida}</td>
                                            <td>{partidas[partida]}</td>
                                            <td><button className="btn-secondary" disabled={partida == null || partidas[partida] == null} onClick={() => { viewGame(partida, partidas[partida]); }}>Ver Partida</button></td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}