const mongoose = require("mongoose");

const contasPagarSchema = new mongoose.Schema({
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

const ContasPagar = mongoose.model("contasPagar", contasPagarSchema);

module.exports = ContasPagar;
