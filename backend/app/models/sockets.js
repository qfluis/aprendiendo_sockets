const Salas = require('./salas');

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
           
            socket.on("entrar-sala", (sala) => {
                socket.join(sala);
                console.log(socket.id, "Entra en sala " + sala);
                // emit("entrar-saña ¿?")
            });

            //TODO: salir-sala¿?

            socket.on('enviar-mensaje', ({sala, usuario, mensaje}) => {
                socket.to(sala).emit('recibir-mensaje', {usuario, mensaje});
            });        
        });
    }


}

module.exports = Sockets;