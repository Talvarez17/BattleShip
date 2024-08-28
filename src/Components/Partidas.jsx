import { Link, useNavigate } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from "../context/SocketContext";


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
        socket.emit("view-game", [p1, p2]);
        navigator("/ver");
    }

    return (
        <>
            <Link to={"/"}>Regresar</Link>
            <table>
                <th>Jugador 1</th>
                <th>Jugador 2</th>
                <th>Ver</th>
                {partidas && Object.keys(partidas).map((partida, index) => {
                    if ((index % 2) > 0 || index == 0) {
                        return (
                            <tr key={partida}>
                                <td>{partida}</td>
                                <td>{partidas[partida]}</td>
                                <td><button disabled={partida == null || partidas[partida] == null} onClick={() => {viewGame(partida, partidas[partida])}}>Ver</button></td>
                            </tr>
                        )
                    }
                })}
            </table>
        </>
    )
}