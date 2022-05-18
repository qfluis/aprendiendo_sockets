const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { login, register, authNotFound } = require('../controllers/auth');

const router = Router();
// login
router.post('/login', [
    check('email', 'Debes especificar un email válido').isEmail(),
    check('pass', 'Debes introducir un password de al menos 6 caracteres').isLength({min:6}),
    validarCampos
], login);

// register
router.post('/register', [
    check('email', 'Debes especificar un email válido').isEmail(),
    check('pass', 'Debes introducir un password de al menos 6 caracteres').isLength({min:6}),
    check('nickName', 'Debes introducir un nickName de al menos 3 caracteres').isLength({min:3}),
    validarCampos
], register);

// Not found
router.use(authNotFound);



module.exports = router;