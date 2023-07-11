const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/finances", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro na conexão com o banco de dados:", error);
  }
};

module.exports = connectDB;