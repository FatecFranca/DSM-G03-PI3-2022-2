const mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(
    `mongodb+srv://api_pet:123456jv@cluster0.v4fnoqw.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  mongoose.connection.on("connected", () =>
    console.log("** Mongoose conectado ao servidor remoto **")
  );

  mongoose.connection.on("error", (erro) =>
    console.error("*** Mongoose: ERRO DE CONEXÃO. Causa: " + erro)
  );
};
