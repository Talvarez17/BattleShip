import React, { createContext, useMemo } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({children}) => {
    const socket = useMemo(()=> io('http://localhost:3001'), []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}