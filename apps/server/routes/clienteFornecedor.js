const ClienteFornecedor = require("../db/schemas/clienteFornecedor");
const express = require("express");
const router = express.Router();
const auth = require("../authController");

router.use(auth);

router.get("/", async (req, res) => {
  res.send(await ClienteFornecedor.find());
});

router.get("/:id", async (req, res) => {
  ClienteFornecedor.findById(req.params.id, (err, ClienteFornecedor) => {
    if (err) return res.status(500).send(err);
    if (!ClienteFornecedor)
      return res.status(404).send("Cliente ou Fornecedor não encontrado");
    res.send(ClienteFornecedor);
  });
});

router.post("/", async (req, res) => {
  const ClienteFornecedorObj = await new ClienteFornecedor(req.body);
  responde = await ClienteFornecedorObj.save();
  res.send(responde);
});

router.put("/:id", (req, res) => {
  ClienteFornecedor.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, ClienteFornecedor) => {
      if (err) return res.status(500).send(err);
      if (!ClienteFornecedor)
        return res.status(404).send("Cliente ou Fornecedor não encontrado");
      res.send(ClienteFornecedor);
    }
  );
});

router.delete("/:id", (req, res) => {
  ClienteFornecedor.findByIdAndDelete(
    req.params.id,
    (err, ClienteFornecedor) => {
      if (err) return res.status(500).send(err);
      if (!ClienteFornecedor)
        return res.status(404).send("Cliente ou Fornecedor não encontrado");
      res.send(ClienteFornecedor);
    }
  );
});

module.exports = router;
