var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "i guess it really is mySQL",
    database: "burger_db"
});

connection.connect((err, res)=>{
    if (err) {
        console.error("oops..." + error.stack);
        return;
    }
    console.log("database accessed as id " + connection.threadId);
});

module.exports = connection;