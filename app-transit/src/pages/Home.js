import React, {useState} from 'react';
import './index.css';
import Modal from '../components/Modal';
import styled from 'styled-components';

const Home = () => {
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
				titulo="Ventana 1"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 1
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal1(!estadoModal1)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>
			
			{/* Modal 2 */}
			<Modal
				estado={estadoModal2}
				cambiarEstado={cambiarEstadoModal2}
				titulo="Ventana 2"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 2
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal2(!estadoModal2)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 3 */}
			<Modal
				estado={estadoModal3}
				cambiarEstado={cambiarEstadoModal3}
				titulo="Ventana 3"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 3
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal3(!estadoModal3)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 4 */}
			<Modal
				estado={estadoModal4}
				cambiarEstado={cambiarEstadoModal4}
				titulo="Ventana 4"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 4
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal4(!estadoModal4)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 5 */}
			<Modal
				estado={estadoModal5}
				cambiarEstado={cambiarEstadoModal5}
				titulo="Ventana 5"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 5
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal5(!estadoModal5)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 6 */}
			<Modal
				estado={estadoModal6}
				cambiarEstado={cambiarEstadoModal6}
				titulo="Ventana 6"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 6
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal6(!estadoModal6)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 7 */}
			<Modal
				estado={estadoModal7}
				cambiarEstado={cambiarEstadoModal7}
				titulo="Ventana 7"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 7
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal7(!estadoModal7)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 8 */}
			<Modal
				estado={estadoModal8}
				cambiarEstado={cambiarEstadoModal8}
				titulo="Ventana 8"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 8
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal8(!estadoModal8)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 9 */}
			<Modal
				estado={estadoModal9}
				cambiarEstado={cambiarEstadoModal9}
				titulo="Ventana 9"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 9
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal9(!estadoModal9)}>
						Aceptar
					</Boton>
				</Contenido>
			</Modal>

			{/* Modal 10 */}
			<Modal
				estado={estadoModal10}
				cambiarEstado={cambiarEstadoModal10}
				titulo="Ventana 10"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={"center"}
				padding={'20px'}
			>
				<Contenido>
					<h1>
						Ventana Modal 10
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal10(!estadoModal10)}>
						Aceptar
					</Boton>
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
					<h1>
						Ventana Modal 11
					</h1>
					<p>
						Reutilizable y con opciones de personalización
					</p>
					<Boton onClick = {() => cambiarEstadoModal11(!estadoModal11)}>
						Aceptar
					</Boton>
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
