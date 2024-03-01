const Pool = require('pg').Pool
require('dotenv').config()

console.log('USERNAME:', process.env.USER);
console.log('PASSWORD:', process.env.PASSWORD);
console.log('HOST:', process.env.HOST);
console.log('DBPORT:', process.env.DBPORT);

const pool = new Pool({
    
    user:process.env.USER,
    password:process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database:'todoapp'
    /*
    user:'postgres',
    password:'acs010305',
    host: 'localhost',
    port:5432,
    database:'todoapp'
    */
})

module.exports=pool