const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const userPath = path.join(__dirname, "../data/users.json");

router.get("/", (req, res) => {
  fs.readFile(userPath, (err, data) => {
    if (err) {
      return res.status(505).send({ error: "Error interno del servidor" });
    }

    const users = JSON.parse(data);
    res.send(users);
  });
});

router.get("/:id", (req, res) => {
  fs.readFile(userPath, (err, data) => {
    if (err) {
      return res.status(500).send({ error: "Error interno del servidor" });
    }

    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);

    if (!user) {
      return res.status(404).send({ message: "ID del usuario no encontrado" });
    }

    res.send(user);
  });
});

module.exports = router;
