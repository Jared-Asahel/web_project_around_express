const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const cardPath = path.join(__dirname, "../data/cards.json");

router.get("/", (req, res) => {
  fs.readFile(cardPath, (err, data) => {
    if (err) {
      return res.status(505).send({ error: "Error interno del servidor" });
    }

    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = router;
