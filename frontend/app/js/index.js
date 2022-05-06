import { io } from "socket.io-client";
const socket = io("ws://localhost:3000");

// Recibe mensaje del server
socket.on("eventoServer", (arg) => {
    console.log(arg);
})

// Envia mensaje al server
socket.emit("eventoCliente", "Mensaje para el server");