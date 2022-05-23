const Salas = require('./salas');



// AUTENTICACIÓN CON JWT - https://desarrolloactivo.com/blog/jwt-socket-io/

class Sockets {
    constructor( io ) {

        this.salas = new Salas();
        // TODO: Listado usuarios x sala ¿?
        // TODO: Actualizar lista usuarios

        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log("Cliente conectado", socket.id);
            socket.join(this.salas[0]); // Por defecto en primera sala (general)

            socket.emit('lista-salas', this.salas.getSalas());

            socket.on('disconnect', () => {
                console.log("Cliente desconectado", socket.id);
            });
           
            socket.on("entrar-sala", (/*salaAnterior, */sala) => {
                // TODO: socket.leave(salaAnterior)
                // https://socket.io/docs/v3/rooms/
                console.log(socket.rooms);
                socket.join(sala);
                console.log(socket.id, "Entra en sala " + sala);
                // emit("entrar-sala ¿?")
                // emit("salir-sala ¿?")
            });

            //TODO: salir-sala¿?

            socket.on('enviar-mensaje', ({sala, usuario, mensaje}) => {
                socket.to(sala).emit('recibir-mensaje', {usuario, mensaje});
            });        
        });
    }


}

module.exports = Sockets;