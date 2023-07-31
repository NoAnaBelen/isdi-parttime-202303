const express = require("express");
const router = express.Router();
const UserContoller = require("../controllers/user");

//definir rutas//
router.get("/prueba-usuario", UserContoller.pruebaUser);
router.post("/register", UserContoller.register);

//exportar router//
module.exports = router;
