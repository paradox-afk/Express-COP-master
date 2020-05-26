/**
 * Rutas de Lugares
 */
// Libs
const express = require("express");
const cors = require("cors");
const services = require("./Services");

const Calificaciones = express.Router();
Calificaciones.use(express.urlencoded({ extended: false }));
Calificaciones.use(express.json());
Calificaciones.use(cors());

Calificaciones.post("/modificarCalificacion", (req, res) =>{
  services.modificar(req.body, res);
});

Calificaciones.post("/consultarCalificacion", (req, res) =>{
  services.consultar(req.body, res);
});

Calificaciones.post("/crearCalificacion", (req, res) =>{
  services.create(req.body, res);
});


module.exports = Calificaciones;