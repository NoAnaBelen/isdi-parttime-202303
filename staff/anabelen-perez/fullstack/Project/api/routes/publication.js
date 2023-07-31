const express = require("express");
const router = express.Router();
const PublicationContoller = require("../controllers/publication");

//definir rutas//
router.get("/prueba-publication", PublicationContoller.pruebaPublication);

//exportar router//
module.exports = router;