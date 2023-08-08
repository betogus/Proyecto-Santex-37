const express = require('express');

const router = express.Router();
const ClienteControllers = require('../controllers/cliente-controllers');

router.get('/', ClienteControllers.getAllClientes);
router.post('/', ClienteControllers.signUpCliente);
router.get('/:dni', ClienteControllers.getByDniCliente);
router.put('/', ClienteControllers.editCliente);
router.delete('/:dni', ClienteControllers.deleteCliente);
module.exports = router;
