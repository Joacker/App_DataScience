'use-strict';
/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const axios = require('axios');
const {client} = require('../config/database')
/* const fetch = require('node-fetch') */
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


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

client.connect()

app.get("/", async (req, res, next) => {
    res.send("Hello World! askdjhasdk");
    const response = await client.query('SELECT * FROM siniestros_2018')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })
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

app.post("/query0", (req, res, next) => {
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query0`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body:JSON.stringify({
            datos:datos
        }),
    })
    .then(response => response.json())
    .then( async (data) => {

        const SQLquery = `SELECT 
                                cód_causa,
                                causa__con 
                            FROM 
                                siniestros_2018
                            WHERE
                                cód_causa = $1
                            group by 
                                cód_causa,
                                causa__con`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 1; i < data["id"].length+1; i++) {
            response.push(await client.query(SQLquery, [data["id"][i-1]]))
            //console.log(response)
            const output = (response[i-1].rows[0]["causa__con"])
            dp1[output] = data["dp"][i]
            //console.log(data["dp"][i])
            
        }
        console.log(dp1)
        res.send({dp1})

        // const values = safe["id"];
        // const response = await client.query(SQLquery,values);       
        //console.log(response)
        //res.send(safe);
        

    })
    .catch(error => {
        console.log(error);
    });
    

    // axios.post('http://ia:80/query0', req.body)
    // .then(response => {
    //     console.log(response.data);
    //     safe=(response.data);
    //     res.send(safe);
    //     console.log(safe["dp"]);
    //     console.log(safe["id"]);
        
        

        
    // })
    // .catch(error => {
    //     console.log(error);
    // });
    
});

app.post("/query1", (req, res, next) => {
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query1`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body:JSON.stringify({
            datos:datos
        }),
    })
    .then(response => response.json())
    .then( async (data) => {

        const SQLquery = `SELECT 
                                encoded_comuna,
                                comuna 
                            FROM 
                                siniestros_2018
                            WHERE
                                encoded_comuna = $1
                            group by 
                                encoded_comuna,
                                comuna`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            //console.log(response)
            const output = (response[i].rows[0]["comuna"])
            console.log(i + output)
            dp1[output] = data["dp"][i]
            //console.log(data["dp"][i])
            
        }
        console.log(dp1)
        res.send({dp1})
    })
    .catch(error => {
        console.log(error);
    });

});

//*************** 
//     SEBA
//*************** 
app.post("/query2", (req, res, next) => {
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query2`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body:JSON.stringify({
            datos:datos
        }),
    })
    .then(response => response.json())
    .then( async (data) => {

        const SQLquery = `SELECT 
                                comuna,
                                encoded_comuna
                            FROM 
                                siniestros_2018
                            WHERE
                                encoded_comuna = $1
                            group by 
                                encoded_comuna,
                                comuna`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 1; i < data["id"].length+1; i++) {
            response.push(await client.query(SQLquery, [data["id"][i-1]]))
            //console.log(response)
            const output = (response[i-1].rows[0]["comuna"])
            dp1[output] = data["dp"][i]
            //console.log(data["dp"][i])
            
        }
        console.log(dp1)
        res.send({dp1})
    })
    .catch(error => {
        console.log(error);
    });
});
//*************** 
//     SEBA
//*************** 

app.post("/query3", (req, res, next) => {
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query3`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
        body:JSON.stringify({
            datos:datos
        }),
    })
    .then(response => response.json())
    .then( async (data) => {

        const SQLquery = `SELECT 
                                cód_ubica,
                                ubicación
                            FROM 
                                siniestros_2018
                            WHERE
                                cód__tipo = $1
                            AND
                                encoded_comuna = $2
                            group by 
                                cód_ubica,
                                ubicación`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 1; i < data["id"].length+1; i++) {
            response.push(await client.query(SQLquery, [data["id"][i-1]]))
            //console.log(response)
            const output = (response[i-1].rows[0]["ubicación"])
            dp1[output] = data["dp"][i]
            //console.log(data["dp"][i])
            
        }
        console.log(dp1)
        res.send({dp1})
    })
    .catch(error => {
        console.log(error);
    });
});

app.listen(port,()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}.`)
});