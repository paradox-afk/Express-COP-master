const dal = require("../PlaceDAL");

module.exports = ({name, image, lat, lon, description,id}, res) => {

    dal.update({
        name:name, 
        image:image, 
        lat:lat, 
        lon:lon, 
        description:description,
      }, {
        where: {
            id:id
        }
      }
    );
    res.status(200).json({
        message: "Lugar creado",
    });


/*

    if(name && image && lat && lon && description && userId) {
        dal.create({
            name, 
            image, 
            lat, 
            lon, 
            description,
            userId
        });
        res.status(200).json({
            message: "Lugar creado",
        });
    }
    else
    {
        res.status(400).json(
        {
            message: "No se enviaron correctamente los parametros.",
            parameters: ["name", "image", "lat", "lon", "description, userId"],
        });
    }
    */
};