
import './index.css';
import Modal from '../components/Modal';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MapView from '../components/MapView.js';
import axios from "axios";
import{Route,Routes,useNavigate} from 'react-router-dom'
import Piechart from '../components/charts/Piechart.js';
import ActivePie from '../components/charts/ActivePie';
const Home = () => {

    const navigate = useNavigate();

	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	const [estadoModal2, cambiarEstadoModal2] = useState(false);
	const [estadoModal3, cambiarEstadoModal3] = useState(false);
	const [estadoModal4, cambiarEstadoModal4] = useState(false);
	const [estadoModal5, cambiarEstadoModal5] = useState(false);
	const [estadoModal6, cambiarEstadoModal6] = useState(false);
	const [estadoModal7, cambiarEstadoModal7] = useState(false);
	const [estadoModal8, cambiarEstadoModal8] = useState(false);
	const [estadoModal9, cambiarEstadoModal9] = useState(false);
	const [estadoModal10, cambiarEstadoModal10] = useState(false);
	const [estadoModal11, cambiarEstadoModal11] = useState(false);

    //************************
    //************************
    let [dato, setDato] = useState();
    let [query_num, setQueryNum] = useState();
    let [input_value, setInputValue] = useState();
	let [input_value2, setInputValue2] = useState();
    let [loading, setLoading] = useState(false);
    let [loadedChart, setLoadedChart] = useState(false);
	let [data,setData] = useState();

    const handleChangeInput = (event,x) => {
        const result = event.target.value.replace(/\D/g, '');
        setInputValue(result);
        setQueryNum(x)
    };
	const handleChangeInput2 = (event,x) => {
        const result = event.target.value.replace(/\D/g, '');
        setInputValue2(result);
        setQueryNum(x)
    };

    const submitQuery = (e) => {
        e.preventDefault();
        setLoading(true)
        setLoadedChart(false);
        axios.post("http://localhost:8000/query" + query_num, { datos: [input_value] })
            .then(res => {
                setLoading(false);
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
                setDato(res.data)
                console.log("que es esto?: ",dato)
                setLoadedChart(true);
            })
            .catch(err => console.log(err))
    }

	const submitQuery2 = (e) => {
        e.preventDefault();
        setLoading(true)
        setLoadedChart(false);
        axios.post("http://localhost:8000/query" + query_num, { datos: [input_value,input_value2] })
            .then(res => {
                setLoading(false);
                setDato(res.data)
                console.log("que es esto?: ",dato)
                setLoadedChart(true);
            })
            .catch(err => console.log(err))
    }

    //************************
    //************************

	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Modal 1</Boton>
				<Boton onClick={() => cambiarEstadoModal2(!estadoModal2)}>Modal 2</Boton>
				<Boton onClick={() => cambiarEstadoModal3(!estadoModal3)}>Modal 3</Boton>
			</ContenedorBotones>

			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal4(!estadoModal4)}>Modal 4</Boton>
				<Boton onClick={() => cambiarEstadoModal5(!estadoModal5)}>Modal 5</Boton>
				<Boton onClick={() => cambiarEstadoModal6(!estadoModal6)}>Modal 6</Boton>
			</ContenedorBotones>

			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal7(!estadoModal7)}>Modal 7</Boton>
				<Boton onClick={() => cambiarEstadoModal8(!estadoModal8)}>Modal 8</Boton>
				<Boton onClick={() => cambiarEstadoModal9(!estadoModal9)}>Modal 9</Boton>
			</ContenedorBotones>

			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal10(!estadoModal10)}>Modal 10</Boton>
				<Boton onClick={() => cambiarEstadoModal11(!estadoModal11)}>Modal 11</Boton>
			</ContenedorBotones>

			{/* Modal 1 */}
			<Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="CAUSA EN FUNCIÓN DE COMUNA"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
                scrollable={true}
			>

                <Contenido>
                        <div>
                    <Container>
						<h1></h1>
                        <form onSubmit={submitQuery}>
                            <label>Ingrese codigo de una comuna:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=0)=>{handleChangeInput(event,x)}}
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
                   
                <div>
                    <MapView datito={dato}/>
                </div>
                    
                    </div> 
                    }
                </div>
				</Contenido>
			</Modal>
			
			{/* Modal 2 */}
			<Modal
				estado={estadoModal2}
				cambiarEstado={cambiarEstadoModal2}
				titulo="COMUNA CON MAYOR PROBABILIDAD DE X FALLECIDOS "
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
					<div>
					<Piechart data={data} >
                </Piechart>
					</div>
                    </div> 
                    }
                </div>
				</Contenido>
			</Modal>

			{/* Modal 3 */}
			<Modal
				estado={estadoModal3}
				cambiarEstado={cambiarEstadoModal3}
				titulo="COMUNA MÁS PROBABLE PARA CIERTA CAUSA"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Codigo de causa de accidente:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=2)=>{handleChangeInput(event,x)}}
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
						<ActivePie data={data}>
                </ActivePie>
						</div>
                    </div> 
                    }
                </div>
				</Contenido>
			</Modal>

			{/* Modal 4 */}
			<Modal
				estado={estadoModal4}
				cambiarEstado={cambiarEstadoModal4}
				titulo="TIPO DE UBICACIÓN EN FUNCIÓN DEL TIPO DE ACCIDENTE Y COMUNA"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery2}>
                            <label>Codigo de causa de accidente:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=3)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
							<label>Codigo de la comuna:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value2}
                                onChange={(event,x=3)=>{handleChangeInput2(event,x)}}
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
                    	<MapView datito={dato}/>
                	</div>
                    </div> 

					

					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 5 */}
			<Modal
				estado={estadoModal5}
				cambiarEstado={cambiarEstadoModal5}
				titulo="ESTADO DE CALZADA EN FUNCIÓN DE X FALLECIDOS"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Cantidad de fallecidos:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=4)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
					<Piechart data={data} >
                </Piechart>
					</div>
                    </div> 
					
					

					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 6 */}
			<Modal
				estado={estadoModal6}
				cambiarEstado={cambiarEstadoModal6}
				titulo="CLIMA EN FUNCIÓN DE X FALLECIDOS"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Cantidad de fallecidos:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=5)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
						<ActivePie data={data}>
                </ActivePie>
						</div>
                    </div> 

					

					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 7 */}
			<Modal
				estado={estadoModal7}
				cambiarEstado={cambiarEstadoModal7}
				titulo="CAUSA EN FUNCIÓN DE X FALLECIDOS"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Cantidad de fallecidos:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=6)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
						<ActivePie data={data}>
                </ActivePie>
						</div>
                    </div> 

					

					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 8 */}
			<Modal
				estado={estadoModal8}
				cambiarEstado={cambiarEstadoModal8}
				titulo="ESTADO DE LA CALLE EN RELACIÓN A UNA COMUNA Y UN TIPO DE CALZADA"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery2}>
                            <label>codigo comuna:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=7)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
							<label>Codigo de tipo de calzada:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value2}
                                onChange={(event,x=7)=>{handleChangeInput2(event,x)}}
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
                    	<MapView datito={dato}/>
                	</div>
                    </div> 
					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 9 */}
			<Modal
				estado={estadoModal9}
				cambiarEstado={cambiarEstadoModal9}
				titulo="EN FUNCIÓN DEL MES DETERMINA CAUSA"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Elija un mes:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=8)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
					<Piechart data={data} >
                </Piechart>
					</div>
                    </div> 

					

					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 10 */}
			<Modal
				estado={estadoModal10}
				cambiarEstado={cambiarEstadoModal10}
				titulo="EN FUNCIÓN DEL MES DETERMINA COMUNA"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Elija un mes:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=9)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
						<ActivePie data={data}>
                </ActivePie>
						</div>
                    </div> 

					

					}
                </div>
				</Contenido>
			</Modal>

			{/* Modal 11 */}
			<Modal
				estado={estadoModal11}
				cambiarEstado={cambiarEstadoModal11}
				titulo="Ventana 11"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
                        <div>
                    <Container>
                        <form onSubmit={submitQuery}>
                            <label>Elija un mes:</label>
                            <input
                                name="input"
                                type="text"
                                placeholder="Ej: 4"
                                value={input_value}
                                onChange={(event,x=9)=>{handleChangeInput(event,x)}}
                            />
							<p>-</p>
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
                    <div>
                        {Object.keys(dato.dp1).map((key, i) => (
                          <p key={i}>
                            <span style={{'font-size':15}} >{key} - {dato.dp1[key]}</span>
                            <span></span>
                          </p>
                        ))}
						<div>
						<ActivePie data={data}>
                </ActivePie>
						</div>
                    </div> 

					

					}
                </div>
				</Contenido>
			</Modal>
		</div>
	);
}
 
export default Home;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
