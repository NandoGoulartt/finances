const express = require("express");
const movimentsRoutes = require("./routes/moviments");
const usersRoutes = require("./routes/users");
const connectDB = require("./db/db");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/moviments", movimentsRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("Steste");
});
