const Salas = require('./salas');

class Sockets {
    constructor( io ) {

        this.salas = new Salas();

        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log("Cliente conectado", socket.id);

            socket.emit('lista-salas', this.salas.getSalas());

            socket.on('disconnect', () => {
                console.log("Cliente desconectado", socket.id);
            });

            socket.on('disconnect', () => {
                console.log("Cliente desconectado", socket.id);
            });
           
            socket.on("entrar-sala", (sala) => {
                socket.join(sala);
                console.log(socket.id, "Entra en sala " + sala)
            });

            socket.on('enviar-mensaje', (data) => {
                console.log(data);
                socket.to(data.sala).emit('recibir-mensaje', data.mensaje);
            });

            

            /*

            // Emitir al cliente, todas las bandas
            socket.emit('current-bands', this.bandList.getBands());         
            
            // Votar banda
            socket.on('votar-banda', (id) => {
                this.bandList.increaseVotes( id );
                this.io.emit('current-bands', this.bandList.getBands());  
            });
            // Borrar banda
            socket.on('borrar-banda', (id) => {
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands());  
            });
            // Cambiar nombre banda
            socket.on('cambiar-nombre-banda', ({id, nuevoNombre}) => {
                this.bandList.changeName(id,nuevoNombre);
                this.io.emit('current-bands', this.bandList.getBands());  
            });

            // Añadir banda
            socket.on('agregar-banda', (nombre) => {
                this.bandList.addBand(nombre);
                this.io.emit('current-bands', this.bandList.getBands());  
            });
            */
        
        });
    }


}

module.exports = Sockets;