const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


/*
const { Server } = require('socket.io');
const io = new Server(3000);

io.on('connection', (socket) => {
    // Envia mensaje a cliente
    socket.emit("eventoServer", "holiwi 🖖");

    //io.emit('broadcast', 'mensaje para todos');

    // Recibir mensaje del cliente
    socket.on("eventoCliente", (arg) => {
        console.log(arg); // imprime mensaje de cliente
    });
});
*/



app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});