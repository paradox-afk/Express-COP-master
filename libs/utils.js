const bcrypt = require("bcrypt");
const jwtConfig = require("./jwtConfig");

module.exports = {
    hashPassword: (password) => bcrypt.hashSync(password, 10),
    verifyPassword: (plaintTextPassword, encryptedPassword) => bcrypt.compareSync(plaintTextPassword, encryptedPassword),
    jwtConfig,
};