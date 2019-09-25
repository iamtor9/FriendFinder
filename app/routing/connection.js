// set up and create MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
host: "localhost",
port: 8889,
user: "root",
password: "root",
database: "friends_db"
});

//create the connection for the sql table
connection.connect(function(err) {
if (err) {
console.error("error connecting: " + err.stack);
return;
}
console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
console.log(friends_db);