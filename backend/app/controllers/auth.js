const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
const Usuario = require('../models/Usuario');

const login = async (req = request, res = response) => {

    const { email, pass } = req.body;


    const { API_LOGIN_EMAIL, API_LOGIN_PASS } = process.env;
 
    // TODO: validar email y pass en BD

    /*
    if (email !== API_LOGIN_EMAIL || pass !== API_LOGIN_PASS ) {
        res.status(400).json({
            msg: "email y/o contraseña incorrectos"
        });
        return;
    }
    */

    // Generar JWT
    // obtener ROL DEL USUARIO Y AÑADIRLO AL PAYLOAD DE JWT
    const token = await generarJWT( email );

    return res.json({
        msg: "login correcto 👍",
        token
    });    
}

const register = async (req = request, res= response) => {

    const { email, pass, nickName } = req.body;
    
    // Comprobaciones valores únicos BD
    const existeEmail = await Usuario.findOne({email});
    if (existeEmail) {
        return res.status(400).json({
            msg:"Email existente en BD"
        });
    }
    const existeNickName = await Usuario.findOne({nickName});
    if (existeNickName) {
        return res.status(400).json({
            msg:"Nickname existente en BD"
        });
    }

    // Encriptar pass
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);

    // Usuario creados, por defecto son USERs
    try {
        const usuario = new Usuario({ email, pass:hash, nickName, rol:'USER', fechaCreacion:new Date() });
        await usuario.save();
    } catch (err) {
        return res.status(500).json({
            msg:"Error en BD"
        });
    }    
    return res.status(201).json({
        msg:"usuario creado correctamente"
    });
}

const authNotFound = (req, res) => {
    res.status(400).json({
        msg: req.path + " - Endpoint no válido"
    });
}

module.exports = { login, register, authNotFound }