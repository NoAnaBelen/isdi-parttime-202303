//pruebas
const pruebaFollow = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/follow.js"
    });
}

//exportar acciones
module.exports = {
    pruebaFollow
}