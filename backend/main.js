/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const redis = require('redis');
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

app.listen(port,()=>{
    console.log(`Servidor de grpc-app corriendo en: http://localhost:${port}.`)
});