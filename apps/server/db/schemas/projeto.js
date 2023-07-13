const mongoose = require("mongoose");

const projetoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  idClienteFornecedor: {
    type: String,
    required: true,
  },

  idUsuario: {
    type: String,
    required: true,
  },

  descricao: {
    type: String,
    required: true,
  },

  horasUsadas: {
    type: Number,
  },

  dataPrazo: {
    type: Date,
  },

  dataCreated: {
    type: Date,
    default: Date.now,
  }
});

const Projeto = mongoose.model("projeto", projetoSchema);

module.exports = Projeto;
