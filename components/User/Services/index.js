const create = require("./UserCreate");
const validate = require("./UserLogin");
const isAuth = require("./UserAudth");

module.exports = {
    create,
    validate,
    isAuth
};