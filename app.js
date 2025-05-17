const express = require("express");
const cardsRouter = require("./routes/cards");
const usersRouter = require("./routes/users");

const app = express();
const { PORT = 3000 } = process.env;

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.get((req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
