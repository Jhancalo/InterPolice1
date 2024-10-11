//conexion a la base de datos.
// INSTACIAR la libreria MySQL
const mysql = require("mysql2"); // principio de inmutalidad

// cadena de conexion
const cnx =  mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "interpolice"
});

cnx.query("Select * from citizen",(error,resultado)=>{
    console.log(resultado)
})

cnx.connect((error) => {
  if (error) {
    console.log(`Error en la conexoin \n ${error}`);
  } else {
    console.log(" conexion Exitosa a la BD!");
  }
});
module.exports = cnx;