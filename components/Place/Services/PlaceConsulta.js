const dal = require("../PlaceDAL");

module.exports = async ({userId}, res) => 
{
    let status = 200;
    
        const consulta = await dal.findAll({
            where: {
                userId: userId,
            }
        });
    res.status(status).json(consulta);
};