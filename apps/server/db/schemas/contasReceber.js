const mongoose = require("mongoose");

const contasReceberSchema = new mongoose.Schema({
  status: {
    type: String,
  },

  idUsuario: {
    type: String,
    required: true,
  },

  idClienteFornecedor: {
    type: String,
    required: true,
  },

  idProjeto: {
    type: String,
  },

  description: {
    type: String,
  },

  valor: {
    type: Number,
    required: true,
  },

  valorDesconto: {
    type: Number,
  },

  valorPago: {
    type: Number,
  },

  valorAberto: {
    type: Number,
  },

  valorIndicado: {
    type: Number,
  },

  dataCreated: {
    type: Date,
    default: Date.now,
  },

  dataCancelamento: {
    type: Date,
  },

  dataVencimento: {
    type: Date,
  },
});

const ContasReceber = mongoose.model("contasReceber", contasReceberSchema);

module.exports = ContasReceber;
