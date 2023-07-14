const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  senha: {
    type: String,
    require: true,
  },

  cpf: {
    type: String,
  },

  cnpj: {
    type: String,
  },

  valorHora: {
    type: Number,
  },

  numeroTelefone: {
    type: Number,
  },

  dataCreated: {
    type: Date,
    default: Date.now,
  },

  dataNascimento: {
    type: Date
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
