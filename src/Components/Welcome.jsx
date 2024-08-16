import { Link } from "react-router-dom"
import React from 'react';

export const Welcome = () => {
    return (
        <>
            <h1>Bienvenido a Batalla Naval</h1>
            <Link to={"/partidas"}>Ver partidas</Link>
            <Link to={"/jugar"}>Jugar</Link>
        </>
    )
}