const dal = require("../UserDAL");
const {hashPassword} = require("../../../libs/utils");

const usuarios = [];
const usuariosDB = require("../UserDAL");


module.exports = ({nombre, ap_paterno, ap_materno, correo, usuario, contraseña, fecha_nacimiento}, res) => 
{
    var usuarios = [];
    var palanca = false;

    usuariosDB.findAll(
        {attributes: ['correo']}
      ).then(projects => {
        for(var i=0;i<projects.length;i++){
            if(projects[i].dataValues.correo==correo){
                palanca = true;
            }
        }
        insertar(nombre, ap_paterno, ap_materno, correo, usuario, contraseña, fecha_nacimiento,palanca,res);
    });
      
    /*for(var i=0;i<usuarios.length;i++)
    {
        console.log(usuarios[i]);
        if(usuarios[i] == correo)
            palanca = true;
    }*/
    /*
    if(!palanca)
    {
        contraseña = hashPassword(contraseña);
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
                message: "Usuario creado correctamente",
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
    }
    else{
        res.status(200).json(
            {
                message: "Correo utilizado.",
            });
    }*/
};

function insertar (nombre, ap_paterno, ap_materno, correo, usuario, contraseña, fecha_nacimiento,palanca,res){
    if(!palanca)
    {
        contraseña = hashPassword(contraseña);
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
                message: "Usuario creado correctamente",
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
    }
    else{
        res.status(200).json(
            {
                message: "Correo utilizado.",
            });
    }
}