const express = require("express");
const contasReceberRoutes = require("./routes/contasReceber");
const contasPagarRoutes = require("./routes/contasPagar");
const projetoRoutes = require("./routes/projeto");
const usersRoutes = require("./routes/users");
const clienteFornecedorRoutes = require("./routes/clienteFornecedor");
const connectDB = require("./db/db");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/contaReceber", contasReceberRoutes);
app.use("/contaPagar", contasPagarRoutes);
app.use("/users", usersRoutes);
app.use("/projeto", projetoRoutes);
app.use("/clienteFornecedor", clienteFornecedorRoutes);

app.listen(port, () => {});
