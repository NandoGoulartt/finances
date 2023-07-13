const mongoose = require("mongoose");

const clienteFornecedorSchema = new mongoose.Schema({
  idUsuario: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    require: true,
  },

  tipo: {
    type: String,
    require: true,
  },

  contato: {
    type: String,
  },

  nome: {
    type: String,
  },

  razaoSocial: {
    type: String,
  },

  nomeFantasia: {
    type: String,
  },

  inscricaoEstadual: {
    type: String,
  },

  rg: {
    type: String,
  },

  cpfCnpj: {
    type: String,
  },

  logradouro: {
    type: String,
    require: true,
  },

  numero: {
    type: String,
    require: true,
  },

  bairro: {
    type: String,
    require: true,
  },

  cidade: {
    type: String,
    require: true,
  },

  estado: {
    type: String,
    require: true,
  },

  cep: {
    type: String,
    require: true,
  },

  numeroTelefone: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ClienteFornecedor = mongoose.model(
  "clienteFornecedor",
  clienteFornecedorSchema
);

module.exports = ClienteFornecedor;
