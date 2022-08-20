// conexion a mongodb
const mongo = require('mongoose')
//local = mongodb://127.0.0.1:27017
//mongodb atlas = mongodb+srv://memosk8:Password123@cluster0.nuhhssx.mongodb.net/HyperOrganize?retryWrites=true&w=majority
mongo.connect('mongodb+srv://memosk8:Password123@cluster0.nuhhssx.mongodb.net/HyperOrganize?retryWrites=true&w=majority')
  .then(() => console.log("\n-- Base de datos conectada --\n"))
  .catch(err => console.log(err));
