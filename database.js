var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "database",
    user: "root",
    password: "password",
    database: 'test',
    insecureAuth : true
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;