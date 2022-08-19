// conexion a mongodb
const mongo = require('mongoose')
mongo.connect('mongodb://127.0.0.1:27017/hyperOrganize')
  .then(() => console.log("\n-- Base de datos conectada --\n"))
  .catch(err => console.log(err));
