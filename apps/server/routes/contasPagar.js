const ContasPagar = require("../db/schemas/contasPagar");
const express = require("express");
const router = express.Router();
const auth = require("../authController");

router.use(auth);

router.get("/", async (req, res) => {
  res.send(await ContasPagar.find());
});

router.get("/:id", async (req, res) => {
  ContasPagar.findById(req.params.id, (err, ContasPagar) => {
    if (err) return res.status(500).send(err);
    if (!ContasPagar)
      return res.status(404).send("Contas Receber não encontrado");
    res.send(ContasPagar);
  });
});

router.post("/", async (req, res) => {
  const ContasPagarObj = await new ContasPagar(req.body);
  responde = await ContasPagarObj.save();
  res.send(responde);
});

router.put("/:id", (req, res) => {
  ContasPagar.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, ContasPagar) => {
      if (err) return res.status(500).send(err);
      if (!ContasPagar)
        return res.status(404).send("Contas Receber não encontrado");
      res.send(ContasPagar);
    }
  );
});

router.delete("/:id", (req, res) => {
  ContasPagar.findByIdAndDelete(req.params.id, (err, Moviment) => {
    if (err) return res.status(500).send(err);
    if (!ContasPagar)
      return res.status(404).send("Contas Receber não encontrado");
    res.send(ContasPagar);
  });
});

module.exports = router;
