const express = require("express");
const router = express.Router();
const FollowContoller = require("../controllers/follow");

//definir rutas//
router.get("/prueba-follow", FollowContoller.pruebaFollow);

//exportar router//
module.exports = router;