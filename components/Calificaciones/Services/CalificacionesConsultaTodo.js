const dal = require("../CalificacionesDAL");

module.exports = async ({placeId}, res) => 
{
    let status = 200;
    const consulta = await dal.findAll({
    });
    res.status(status).json(consulta);
};