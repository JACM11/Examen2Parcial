const express = require("express");

const router = express.Router();
const {citas} = require("../controllers");
const Prueba = new citas();

router.get('/' ,Prueba.listar);

router.post('/add', Prueba.add);

router.put('/:id', Prueba.actualizar);

router.put('/:id', Prueba.eliminar);

router.put('/:fecha', Prueba.buscarentrefecha);



module.exports = router;