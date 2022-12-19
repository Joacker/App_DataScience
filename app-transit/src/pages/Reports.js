import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MapView from '../components/MapView.js';
import axios from "axios";
import Piechart from '../components/charts/Piechart.js';


function Reports() {

    let [data, setData] = useState();
    let [query_num, setQueryNum] = useState();
    let [input_value, setInputValue] = useState();
    let [loading, setLoading] = useState(false);
    let [loadedChart, setLoadedChart] = useState(false);

    const handleChangeInput = (event,x) => {
        const result = event.target.value.replace(/\D/g, '');
        setInputValue(result);
        setQueryNum(x)
    };

    const submitQuery = (e) => {
        e.preventDefault();
        setLoading(true)
        setLoadedChart(false);
        axios.post("http://localhost:8000/query" + query_num, { datos: [input_value] })
            .then(res => {
                setLoading(false);
                setData(res.data)
                console.log(data)
                setLoadedChart(true);
            })
            .catch(err => console.log(err))
    }

    /*useEffect(() => {
        setQueryNum(1);
    }, [])*/

    return (
        <div>
            <Container>
                <form onSubmit={submitQuery}>
                    <label>Cantidad de fallecidos:</label>
                    <input
                        name="input"
                        type="text"
                        placeholder="Ej: 4"
                        value={input_value}
                        onChange={(event,x=1)=>{handleChangeInput(event,x)}}
                    />
                    <input type="submit" value="Enviar" />
                </form>
            </Container>
            {loading &&
                <Container>
                    <div className='loaderContainer'>
                        <div className='spinner'>
                        </div>
                    </div>
                </Container>
            }
            {loadedChart && 
                <h1>hola</h1>    
                        
            }
            <Piechart data={data} >
                </Piechart>
            {/* <MapView /> */}
        </div>
    )
}


export default Reports;