'use-strict';
/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const axios = require('axios');

/* CONFIGS */
const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())

/* VARIABLES */
var port = process.env.PORT || 8031;

/* ROUTES */

app.get("/", (req, res, next) => {
    res.send("Hello World! askdjhasdk");
    
});

app.get("/api", (req, res, next) => {
    axios.get('http://ia:80/api')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

app.listen(port,()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}.`)
});