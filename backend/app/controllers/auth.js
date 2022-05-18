const { response, request } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const Usuario = require('../models/Usuario');

const login = async (req = request, res = response) => {

    const { email, pass } = req.body;


    const { API_LOGIN_EMAIL, API_LOGIN_PASS } = process.env;
 
    // TODO: validar user y pass en BD

    /*
    if (email !== API_LOGIN_EMAIL || pass !== API_LOGIN_PASS ) {
        res.status(400).json({
            msg: "email y/o contraseña incorrectos"
        });
        return;
    }
    */

    // Generar JWT
    const token = await generarJWT( email );

    res.json({
        msg: "login correcto 👍",
        token
    });    
}

const register = async (req = request, res= response) => {

    const { email, pass, nickName  } = req.body;
    // TODO: ENCRIPTAR PASS
    // comprobar email único
    // comprobar nickName único
    try {
        const usuario = new Usuario({ email, pass, nickName, rol:'USER' });
        await usuario.save();
    } catch (err) {
        res.status(500).json({
            msg:"Error en BD"
        });
    }
    
    res.status(201).json({
        msg:"usuario creado correctamente"
    });

}








const authNotFound = (req, res) => {
    res.status(400).json({
        msg: req.path + " - Endpoint no válido"
    });
}

module.exports = { login, register, authNotFound }