import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:3333";
const socket = io(ENDPOINT);

socket.on('connect', () => {
    console.log('Conectado');
    lblOnline.current.style.display = '';
    lblOffline.current.style.display = 'none';  
});

socket.on('disconnect', () => {
    console.log('Desconectado');

    lblOnline.current.style.display = 'none';
    lblOffline.current.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

module.exports = socket;