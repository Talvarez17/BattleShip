import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";

const socket = io("http://172.16.21.62:3001");

export const Partidas = () => {
    const [partidas, setPartidas] = useState();

    useEffect(() => {
        socket.on("partidas-actuales", (clients) => {
            setPartidas(clients);
        });
        socket.emit("obtener-partidas");
    })

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
                                <td><button disabled={partida == null}>Ver</button></td>
                            </tr>
                        )
                    }
                })}
            </table>
        </>
    )
}