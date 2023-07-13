const ContasReceber = require("../db/schemas/contasReceber");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await ContasReceber.find());
});

router.get("/:id", async (req, res) => {
  ContasReceber.findById(req.params.id, (err, ContasReceber) => {
    if (err) return res.status(500).send(err);
    if (!ContasReceber) return res.status(404).send("Contas Receber não encontrado");
    res.send(ContasReceber);
  });
});

router.post("/", async (req, res) => {
  const ContasReceberObj = await new ContasReceber(req.body);
  responde = await ContasReceberObj.save();
  res.send(responde);
});

router.put("/:id", (req, res) => {
  ContasReceber.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, ContasReceber) => {
      if (err) return res.status(500).send(err);
      if (!ContasReceber) return res.status(404).send("Contas Receber não encontrado");
      res.send(ContasReceber);
    }
  );
});

router.delete("/:id", (req, res) => {
  ContasReceber.findByIdAndDelete(req.params.id, (err, Moviment) => {
    if (err) return res.status(500).send(err);
    if (!ContasReceber) return res.status(404).send("Contas Receber não encontrado");
    res.send(ContasReceber);
  });
});

module.exports = router;