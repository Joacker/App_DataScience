const Pool = require('pg').Pool

const pool_ds = {
    host: "postgres",
    user: "postgres",
    password: "password",
    database: "siniestros",
    port: 5432 
};

const client = new Pool(pool_ds)

module.exports = {
    client,
}