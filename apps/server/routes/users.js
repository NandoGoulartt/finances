const User = require("../db/schemas/user");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get("/", async (req, res) => {
  res.send(await User.find());
});

router.get("/:id", async (req, res) => {
  User.findById(req.params.id, (err, User) => {
    if (err) return res.status(500).send(err);
    if (!User) return res.status(404).send("Usuário não encontrado");
    res.send(User);
  });
});

router.post("/", async (req, res) => {

  //verifica se ja existe email com essa conta
  const selectedUser = await User.findOne({ email: req.body.email})
  if(selectedUser) return res.status(400).send('Email ja existe')
  
  //criptografa a senha
  req.body.senha = bcrypt.hashSync(req.body.senha);
  
  const UserObj = new User(req.body);
  responde = await UserObj.save();
  res.send(responde);
});

router.post("/login", async (req, res) => {
  const UserObj = await new User(req.body);
  responde = await UserObj.save();
  res.send(responde);
});

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, User) => {
      if (err) return res.status(500).send(err);
      if (!User) return res.status(404).send("Usuário não encontrado");
      res.send(User);
    }
  );
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, User) => {
    if (err) return res.status(500).send(err);
    if (!User) return res.status(404).send("Usuário não encontrado");
    res.send(User);
  });
});

module.exports = router;
