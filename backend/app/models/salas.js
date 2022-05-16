class Salas {
    constructor() {
        this.salas = ["general", "petanca", "ganchillo", "taxidermismo"];
    }

    addSala(nombreSala) {
        this.salas.push(nombreSala);
    }

    getSalas(){
        return this.salas;
    }
}

module.exports = Salas;