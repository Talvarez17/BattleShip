import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";

const socket = io("http://192.168.137.1:3001");

export const Partidas = () => {
    const [partidas, setPartidas] = useState();

    useEffect(() => {
        socket.on("partidas-actuales", (clients) => {
            setPartidas(clients);
        });
    })

    return (
        <>
            <Link to={"/welcome"}>Regresar</Link>
            <table>
                <th>Jugador 1</th>
                <th>Jugador 2</th>
                <th>Ver</th>
                {partidas && Object.keys(partidas).map((partida) => {
                    return (
                        <tr key={partida}>
                            <td>{partida}</td>
                            <td>{partidas[partida]}</td>
                            <td><button>Ver</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}