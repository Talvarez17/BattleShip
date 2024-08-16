import { Link } from "react-router-dom"
import React from 'react';

export const Partidas = () => {
    return (
        <>
            <Link to={"/welcome"}>Regresar</Link>
            <table>
                <th>ID</th>
                <th></th>
                <tr>
                    <td>1234567</td>
                    <td><Link>Ver</Link></td>
                </tr>
            </table>
        </>
    )
}