const Moviment = require("../db/schemas/moviment");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await Moviment.find());
});

router.get("/:id", async (req, res) => {
  Moviment.findById(req.params.id, (err, Moviment) => {
    if (err) return res.status(500).send(err);
    if (!Moviment) return res.status(404).send("Movimento não encontrado");
    res.send(Moviment);
  });
});

router.post("/", async (req, res) => {
  const MovimentObj = await new Moviment(req.body);
  responde = await MovimentObj.save();
  res.send(responde);
});

router.put("/:id", (req, res) => {
  Moviment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, Moviment) => {
      if (err) return res.status(500).send(err);
      if (!Moviment) return res.status(404).send("Movimento não encontrado");
      res.send(Moviment);
    }
  );
});

router.delete("/:id", (req, res) => {
  Moviment.findByIdAndDelete(req.params.id, (err, Moviment) => {
    if (err) return res.status(500).send(err);
    if (!Moviment) return res.status(404).send("Movimento não encontrado");
    res.send(Moviment);
  });
});

module.exports = router;