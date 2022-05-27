class Salas {
    constructor() {
        this.salas = [];//["general", "petanca", "ganchillo", "taxidermismo"];
    }

    addSala(nombreSala) {
        if (this.salas.indexOf(nombreSala) === -1) this.salas.push(nombreSala);
    }

    getSalas(){
        return this.salas;
    }
}

module.exports = Salas;