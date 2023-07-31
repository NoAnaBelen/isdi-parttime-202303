//importar dependencias //
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

//mensaje bienvenida//
console.log("API NODE para Zilustracion arrancada");

// conexion a la base de datos //
connection();

// crear servidor node //
const app = express();
const puerto = 3900;

// configurar cors //
app.use(cors());

// convertir los datos del body a objetos js //
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//cargar conf rutas//
const UserRoutes = require("./routes/user");
const PublicationRoutes = require("./routes/publication");
const FollowRoutes = require("./routes/follow");

app.use("/api/user", UserRoutes);
app.use("/api/public", PublicationRoutes);
app.use("/api/follow", FollowRoutes);

//ruta de prueba//
app.get("/ruta-prueba", (req, res) => {
    return res.status(200).json(
        {
            "id": 1,
            "nombre": "Zi",
            "web": "zilustracion.es"
        }
    );
})

// poner servidor a escuchar las peticiones http //
app.listen(puerto, () => {
    console.log("Servidor de node corriendo en el puerto: ", puerto)
});