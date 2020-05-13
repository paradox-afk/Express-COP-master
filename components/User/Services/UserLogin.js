const dal = require("../UserDAL");
const jwt = require("jsonwebtoken");
const {verifyPassword, jwtConfig} = require("../../../libs/utils");

module.exports = async ({correo, contraseña}, res) => 
{
    let status = 500;
    let response = {
        message: "Error al autentificar el usuario",
        parameters: ["correo","contraseña"],
    };
    if(correo && contraseña) {
        const user = await dal.findOne({
            where: {
                correo: correo,
            }
        });
        if(user && user instanceof dal && verifyPassword(contraseña, user.contraseña)){
            const token = jwt.sign
            (
                {
                    id:user.id,
                    nombre:user.nombre,
                    ap_paterno:user.ap_paterno,
                    ap_materno:user.ap_materno,
                    correo:user.correo,
                    usuario:user.usuario,
                    fecha_nacimiento:user.fecha_nacimiento,
                },
                jwtConfig.privateKey,
                {
                    expiresIn: jwtConfig.expiration,
                },
            );
            if(token){
                status = 200;
                response = {
                    message: "autenticado correctamente",
                    data: {
                        user: {
                            id:user.id,
                            nombre:user.nombre,
                            ap_paterno:user.ap_paterno,
                            ap_materno:user.ap_materno,
                            correo:user.correo,
                            usuario:user.usuario,
                            fecha_nacimiento:user.fecha_nacimiento,
                        },
                        token,
                    },
                };
            }
        }
    }
    res.status(status).json(response);
};