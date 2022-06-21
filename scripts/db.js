const mysql = require('mysql');
const con = mysql.createConnection({
    host     : process.env.DB_HOST,
    database : process.env.DB_BASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
})

con.connect(err => {
    if (err) console.log(err);
    console.log("DB | Connected")
});

const util = require('util');
const query = util.promisify(con.query).bind(con);

module.exports = query;