import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();


export const SocketProvider = ({children}) => {
    // TODO: PASAR JWT¿?
    // TODO: SE CONECTA SOCKET ANTES DEL LOGIN...
    const { socket, online } = useSocket('http://localhost:3333');

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    )


}