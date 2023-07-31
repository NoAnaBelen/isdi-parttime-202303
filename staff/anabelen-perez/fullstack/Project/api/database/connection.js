const mongoose = require("mongoose");


const connection = async() => {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/mi_zilustracion", {

        });
        console.log("Conectado correctamente a bd: mi_zilustracion");

    } catch(error) {
        console.log(error);
        throw new Error("No se ha podido conectar con la base de datos");
    }
}
module.exports = connection