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
    client.connect()
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
        //console.log("impimiendoasd weas,",data[0]["dp"])
        const response = []
        for (let i = 1; i < data[0]["id"].length+1; i++) {
            console.log(data[0]["id"][i-1])
            response.push(await client.query(SQLquery, [data[0]["id"][i-1]]))
            //console.log(response)
            const output = (response[i-1].rows[0]["causa__con"])
            dp1[output] = data[0]["dp"][i]
            //console.log(data["dp"][i])
            
        }
        //console.log(dp1)
        //console.log("prueba impresión de response: ",response[1].rows[0]["cód_causa"]);
        const sql = `SELECT 
                            x, y 
                        FROM 
                             siniestros_2018 
                       WHERE 
                             encoded_comuna = $1
                       AND
                             cód_causa = $2`
        const response2 = [] 
        let coords = [
            {
                x : "",
                y : ""
            }
        ]           
        for (let i = 0; i < response.length; i++) {
           //Extract from the response código causa and encoded comuna
            
            //console.log("la hola ",hola)
            console.log(data[1][0])
            response2.push(await client.query(sql,[data[1][0], response[i].rows[0]["cód_causa"]]))
            for (let j = 0; j < response2[i].rows.length; j++) {
                coords.push({
                    y : response2[i].rows[j]["x"],
                    x : response2[i].rows[j]["y"]
                })
            }
            //response2.push(await client.query(sql,[data[1][0]]))
        }
        //quitar vacios de coords
        coords.shift()
        console.log(coords)
        //const response2 = await client.query(sql, [comuna])
        // pass all the data to the frontend
        res.send({dp1 : dp1, coords : coords})

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
    client.connect()
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
            //console.log(data["id"][i] + output)
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
    client.connect()
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
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            //console.log(response)
            const output = (response[i].rows[0]["comuna"])
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
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos} = req.body;
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
                                cód_ubica
                            FROM 
                                siniestros_2018
                            group by 
                                cód_ubica
                                `

        const response1 = await client.query(SQLquery)
        const output1 = (response1.rows)
        //console.log(output1)
        // Extract the data from the array of json objects
        const output = response1.rows.map((row) => {
             return row["cód_ubica"]
        })
        //console.log(output)
        //parse al the array to strings
        const output2 = output.map((row) => {
            return row.toString()
        })
        //console.log(output2)
        //sort the array lexigraphically
        const output3 = output2.sort()
        //console.log(output3)
        //parse int
        const output4 = output3.map((row) => {
            return parseInt(row)
        })
        //console.log(output4)

        const SQLquery1 = `SELECT
                                ubicación,
                                cód_ubica
                            FROM
                                siniestros_2018
                            WHERE
                                cód_ubica = $1
                            group by
                                ubicación,
                                cód_ubica`
        safe = data;
        let dp1 = {}
        const response = []
        console.log(data)
        for (let i = 0; i < output4.length; i++) {
            response.push(await client.query(SQLquery1, [output4[i]]))
            const output = (response[i].rows[0]["ubicación"])
            dp1[output] = data[0]["dp"][i+1]
        }
        //console.log(dp1)
        
        const sql1 = `SELECT 
                            x,y
                        FROM
                            siniestros_2018
                        WHERE
                            cód_ubica = $1
                        AND 
                            encoded_comuna = $2`
        const response2 = []
        //extraer coordenadas de cada comuna de data
        //console.log(data[1][0])
        let coords = [
            {
                x : "",
                y : ""
            }
        ]  
        for(let i = 0; i < output4.length; i++){
            response2.push(await client.query(sql1, [data[1][0],output4[i]]))
            for(let j = 0; j < response2[i].rows.length; j++){
                coords.push({
                    y : response2[i].rows[j]["x"],
                    x : response2[i].rows[j]["y"]
                })
            }
        }
        coords.shift()
        res.send({dp1 : dp1, coords : coords})                      
    })
    .catch(error => {
        console.log(error);
    });
});

app.post("/query4", (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query4`, {
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
                                cód_estad,
                                estado_cal
                            FROM 
                                siniestros_2018
                            WHERE
                                cód_estad = $1
                            group by 
                                cód_estad,
                                estado_cal`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            //console.log(response)
            const output = (response[i].rows[0]["estado_cal"])
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

app.post("/query5", (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos } = req.body;
    fetch(`http://ia:80/query5`, {
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
                                cód_est_1,
                                estado_atm 
                            FROM 
                                siniestros_2018
                            WHERE
                                cód_est_1 = $1
                            group by 
                                cód_est_1,
                                estado_atm`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            console.log(response[i].rows[0]["estado_atm"])
            const output = (response[i].rows[0]["estado_atm"])
            //console.log(data["id"][i] + output)
            dp1[output] = data["dp"][i+1]
            //console.log(data["dp"][i])
            
        }
        console.log(dp1)
        res.send({dp1})
    })
    .catch(error => {
        console.log(error);
    });

});
app.post("/query6", (req, res, next) => {
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query6`, {
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
                                Cód_Causa,
                                causa__con
                            FROM 
                                siniestros_2018
                            WHERE
                                Cód_Causa = $1
                            group by 
                                Cód_Causa,
                                causa__con`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            //console.log(response)
            const output = (response[i].rows[0]["causa__con"])
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

app.post("/query7", (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos} = req.body;
    fetch(`http://ia:80/query7`, {
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
                                Cód_Estad
                            FROM 
                                siniestros_2018
                            group by 
                                Cód_Estad
                                `

        const response1 = await client.query(SQLquery)
        const output1 = (response1.rows)
        console.log(output1)
        // Extract the data from the array of json objects
        const output = response1.rows.map((row) => {
             return row["cód_estad"]
        })
        //console.log(output)
        //parse al the array to strings
        const output2 = output.map((row) => {
            return row.toString()
        })
        //console.log(output2)
        //sort the array lexigraphically
        const output3 = output2.sort()
        //console.log(output3)
        //parse int
        const output4 = output3.map((row) => {
            return parseInt(row)
        })
        //console.log(output4)
        //estado_cal
        const SQLquery1 = `SELECT
                                estado_cal,
                                Cód_Estad
                            FROM
                                siniestros_2018
                            WHERE
                                Cód_Estad = $1
                            group by
                                estado_cal,
                                Cód_Estad`
        safe = data;
        let dp1 = {}
        const response = []
        console.log(data)
        console.log(data[0]["dp"])
        for (let i = 0; i < output4.length; i++) {
            response.push(await client.query(SQLquery1, [output4[i]]))
            const output = (response[i].rows[0]["estado_cal"])
            dp1[output] = data[0]["dp"][i+1] 
        }
        //console.log(dp1)
        let sql = `SELECT 
                        x,y
                    FROM
                        siniestros_2018
                    WHERE
                        encoded_comuna = $1
                    AND
                        cód__tipo = $2`
        let response2 = []
        let coords = [
            {
                x : "",
                y : ""
            }
        ]  
        for (let i = 0; i < output4.length; i++) {
            response2.push(await client.query(sql, [data[1][0], output4[i]]))
            for (let j = 0; j < response2[i].rows.length; j++) {
                coords.push({
                    y : response2[i].rows[j]["x"],
                    x : response2[i].rows[j]["y"]
                })
            }
        }
        coords.shift()
        res.send({dp1 : dp1, coords : coords})               
    })
    .catch(error => {
        console.log(error);
    });
});

app.post("/query8", (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query8`, {
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
                                Cód_Causa,
                                causa__con
                            FROM 
                                siniestros_2018
                            WHERE
                                Cód_Causa = $1
                            group by 
                                Cód_Causa,
                                causa__con`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            //console.log(response)
            const output = (response[i].rows[0]["causa__con"])
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

app.post("/query9", (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos, comuna } = req.body;
    fetch(`http://ia:80/query9`, {
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
            //console.log(data["id"][i] + output)
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

app.post("/query10", (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos } = req.body;
    fetch(`http://ia:80/query10`, {
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
                                Cód_Est_1,
                                estado_atm 
                            FROM 
                                siniestros_2018
                            WHERE
                                cód_est_1 = $1
                            group by 
                                cód_est_1,
                                estado_atm`

        safe = data;
        console.log(safe)
        let dp1 = {}
        const response = []
        for (let i = 0; i < data["id"].length; i++) {
            response.push(await client.query(SQLquery, [data["id"][i]]))
            console.log(response[i].rows[0]["estado_atm"])
            const output = (response[i].rows[0]["estado_atm"])
            //console.log(data["id"][i] + output)
            dp1[output] = data["dp"][i+1]
            //console.log(data["dp"][i])
            
        }
        console.log(dp1)
        res.send({dp1})
    })
    .catch(error => {
        console.log(error);
    });

});

app.post("/query11", async (req, res, next) => {
    client.connect()
    let safe = {}
    res.header("Access-Control-Allow-Origin","*");
    const { datos } = req.body;
    const sql = `SELECT x, y, comuna FROM siniestros_2018 WHERE encoded_comuna = $1`
    let response = await client.query(sql, [datos])
    console.log(response.rows)
});

app.listen(port,()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}.`)
});