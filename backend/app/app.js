const express = require('express');
const app = express();
//const cors = require('cors');
//app.use(cors());
const http = require('http');
const server = http.createServer(app);
/*const { Server } = require("socket.io");
const io = new Server(server);*/



const io = require("socket.io")(server, {
  allowRequest: (req, callback) => {
    const noOriginHeader = req.headers.origin !== undefined;
    callback(null, noOriginHeader);
  }
});



io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3333, () => {
  console.log('listening on *:3333');
});