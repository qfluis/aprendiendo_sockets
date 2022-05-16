const express = require('express');
const http     = require('http');
const cors = require('cors');
//const { socketController } = require('../sockets/controller');
const Sockets = require('./sockets');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // HTTP Server
        this.server = http.createServer(this.app);

        // Sockets
        this.io = require('socket.io')(this.server, {
            cors: {
              origin: "http://localhost:3000",  //ws://?
              methods: ["GET", "POST"]
            }
        });


        this.paths = {        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        
        //this.app.use( this.paths.auth, require('../routes/auth'));        
    }

    sockets() {
        //this.io.on('connection', socketController);
        new Sockets ( this.io );        
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;
