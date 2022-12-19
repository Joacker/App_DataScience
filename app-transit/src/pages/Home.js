import React, { useState, useEffect } from 'react';
import { Container} from 'react-bootstrap';
import '../App.css';
import MapView from '../components/MapView.js';
import axios from "axios";
import Piechart from '../components/charts/Piechart.js';
import ActivePie from '../components/charts/ActivePie';


function Home() {

    let [data, setData] = useState();
    let [query_num, setQueryNum] = useState();
    let [input_value, setInputValue] = useState();
    let [input_value2, setInputValue2] = useState();
    let [loading, setLoading] = useState(false);
    let [loadedChart, setLoadedChart] = useState(false);

    const handleChangeInput = event => {
        const result = event.target.value.replace(/\D/g, '');
        setInputValue(result);
    };
    const handleChangeInput2 = event => {
        const result = event.target.value.replace(/\D/g, '');
        setInputValue2(result);
    };

    const submitQuery = (e) => {
        e.preventDefault();
        setLoading(true)
        setLoadedChart(false);

        let datos = []

        if (query_num == 3) {
            datos = [input_value2, input_value]
        }
        else if (query_num == 7) {
            datos = [input_value, input_value2]
        }
        else {
            datos = [input_value]

        }

        axios.post("http://localhost:8000/query" + query_num, {datos: datos})
            .then(res => {
                let response = []
                setLoading(false);
                if (query_num != 0 || query_num != 3 || query_num != 7) {
                    Object.entries(res.data.dp1).map(([key, value]) => {
                        if (value != 0) {
                            response.push({ name: key, value: value })
                        }
                    })
                }
                setData(response)
                setLoadedChart(true);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setQueryNum(0);
    }, [])

    return (
        <div>
            <Container fluid>
                <form onSubmit={submitQuery}>
                    {(query_num == 1 || query_num == 4 ||
                        query_num == 5 || query_num == 6) &&
                        <label>Cantidad de fallecidos: </label>
                    }
                    {(query_num == 0 || query_num == 7 ||
                    query_num == 3) &&
                        <label>Código de comuna: </label>
                    }
                    {query_num == 2 &&
                        <label>Código de causa: </label>
                    }
                    {(query_num == 8 || query_num == 9 ||
                        query_num == 10) &&
                        <label>Código de mes: </label>
                    }
                    {query_num == 3}
                    <input
                        name="input"
                        type="text"
                        placeholder="Ej: 4"
                        value={input_value}
                        onChange={handleChangeInput}
                    />
                    {(query_num == 7 || query_num == 3) &&
                        <label>Código de tipo: </label> &&
                        <input
                            name="input2"
                            type="text"
                            placeholder="Ej: 1"
                            value={input_value2}
                            onChange={handleChangeInput2}
                        />
                    }
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
            {loadedChart && (
                query_num == 1 || query_num == 8 ||
                query_num == 4) &&
                <Piechart data={data} >
                </Piechart>
            }
            {loadedChart && (
                query_num == 5 || query_num == 6 ||
                query_num == 2 || query_num == 9 ||
                query_num == 10) &&
                <ActivePie data={data}>
                </ActivePie>
            }
            {/* <MapView /> */}
        </div>
    )
}

export default Home;