
module.exports = (req,res)=>{
    let status =500;
    let response ={
        message: req.userData,
    };
    res.status(status).json(response);
}; 