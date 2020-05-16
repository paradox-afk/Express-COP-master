/**
 * @author Guillermo Dominguez Gameros
 * @description API de Express bajo CBD
 */
// Libs
const express = require("express");
const cors = require("cors");
/*const bcrypt = require("bcrypt");

let hash = bcrypt.hashSync("holamundo123", 10);
console.log(hash);
let condicion = bcrypt.compareSync("holamundo123", hash);
console.log(condicion);*/

// Components
const Place = require("./components/Place/Place");
const User = require("./components/User/User");


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/lugares", Place.api);
app.use("/usuarios", User.api);

app.listen(3000, () => {
  // Set up
  console.log("Servidor corriendo en puesto 3000");
});
