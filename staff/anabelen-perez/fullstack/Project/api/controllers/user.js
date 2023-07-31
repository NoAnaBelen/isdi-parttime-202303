//importar dependencias y modulos//
const User = require("../models/user");


//pruebas
const pruebaUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviado desde: controllers/user.js"
    });
}

//registro de usuarios//
const register = (req, res) => {

    //recoger datos de la petición//
    let params = req.body;
    

    //comprobar q llegan bien y validar//
    if(!params.name || !params.email || !params.password || !params.nick){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar",
        });
    }
    //crear objeto de usuario//
    let user_to_save = new User(params);

    //control usuarios duplicados//
    User.find({$or: [
        {email: user_to_save_email.toLowerCase()},
        {nick: user_to_save.nick.toLowerCase()}

    ]}).exec((error, users) => {
        if(error) return res.status(500).json({status: "error", message: "Error en la consulta de usarios"});
        if(users && users.length >= 1) {
            return res.status(200).send({
                status: "success",
                message: "El usuario ya existe"
            });
         
            //cifrar la contraseña//

            //guardar usario en la bd//

            //devolver resultado
            return res.status(200).json({
                status: "success",
                message: "Acción de registro de usuarios",
                user_to_save
            });
            
        }
    })
    
}

//exportar acciones//
module.exports = {
    pruebaUser,
    register
}