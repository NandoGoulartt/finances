const mongoose = require("mongoose");

const movimentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  tipo: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Moviment = mongoose.model("moviments", movimentSchema);

module.exports = Moviment;
