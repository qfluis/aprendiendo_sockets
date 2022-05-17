const { Schema, modle } = require('mongoose');
const usuarioSchema = Schema({
    email: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    }
});

module.exports = ein;