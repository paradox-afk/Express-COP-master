/**
 * Usuerios
 */
// Libs
const express = require("express");
const cors = require("cors");
const services = require("./Services");

const User = express.Router();
const middleware = require("../Middleware");
User.use(express.urlencoded({ extended: false }));
User.use(express.json());
User.use(cors());

User.get("/", (req, res) => {
  res.status(200).json({
    message: "Metodo get"
  });
});

User.post("/login", (req, res) => {
  console.log("holi");
  services.validate(req.body, res);

});

User.post("/isAuth", middleware, (req, res) => {
  services.isAuth(req, res);
});

User.put("/", (req, res) => {
  res.status(200).json({
    message: "Metodo put"
  });
});

User.delete("/", (req, res) => {
  res.status(200).json({
    message: "Metodo delete"
  });
});

module.exports = User;
