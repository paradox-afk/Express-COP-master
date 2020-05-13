const dal = require("../UserDAL");

module.exports = ({nombre, ap_paterno, ap_materno, correo, usuario, contraseña, fecha_nacimiento}, res) => 
{
    if(nombre && ap_paterno && ap_materno && correo && usuario && contraseña && fecha_nacimiento) {
        dal.create(
        {
            nombre, 
            ap_paterno, 
            ap_materno, 
            correo, 
            usuario,
            contraseña,
            fecha_nacimiento,
        });
        res.status(200).json({
            message: "Usuario creado",
        });
    }
    else
    {
        res.status(400).json(
        {
            message: "No se enviaron correctamente los parametros.",
            parameters: ["nombre", "ap_paterno", "ap_materno", "correo", "usuario", "contraseña", "fecha_nacimiento"],
        });
    }
};