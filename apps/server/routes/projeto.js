const Projeto = require("../db/schemas/projeto");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await Projeto.find());
});

router.get("/:id", async (req, res) => {
  Projeto.findById(req.params.id, (err, Projeto) => {
    if (err) return res.status(500).send(err);
    if (!Projeto) return res.status(404).send("Contas Receber não encontrado");
    res.send(Projeto);
  });
});

router.post("/", async (req, res) => {
  const ProjetoObj = await new Projeto(req.body);
  responde = await ProjetoObj.save();
  res.send(responde);
});

router.put("/:id", (req, res) => {
  Projeto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, Projeto) => {
      if (err) return res.status(500).send(err);
      if (!Projeto) return res.status(404).send("Contas Receber não encontrado");
      res.send(Projeto);
    }
  );
});

router.delete("/:id", (req, res) => {
  Projeto.findByIdAndDelete(req.params.id, (err, Moviment) => {
    if (err) return res.status(500).send(err);
    if (!Projeto) return res.status(404).send("Contas Receber não encontrado");
    res.send(Projeto);
  });
});

module.exports = router;