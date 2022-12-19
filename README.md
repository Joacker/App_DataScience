<h2 align="center">
  <img src="https://raw.githubusercontent.com/Joacker/App_DataScience/main/images/app_diagram.png">
  <br>
</h2>

<h1 align="center">App Data Science</h2>
<h3 align="center">Docker, Postgres, Python, React and Nodejs Deploy for Data Science Subject</h3>
<h5 align="center">Made by Lorenzo Alfaro, Diego Alonso, Ze Hui Fu, Sebastián Gonzalez & Joaquín Fernández.</h5>

<p align="center"><img src="https://img.shields.io/github/downloads/heym1ke/Assist/total.svg?style=for-the-badge&color=f71d51" alt="Downloads"></p>



### 🛠 Contruído con:

* [Nodejs](https://nodejs.org/en/)
* [React](https://reactjs.org)
* [Postgres](https://www.postgresql.org)
* [Python](https://www.python.org)
* [Docker](https://www.docker.com)

### 🐳 Imágenes utilizadas de dockerhub:

* [Nodejs](https://hub.docker.com/_/node)
* [React](https://hub.docker.com/_/node)
* [Postgres](https://hub.docker.com/r/bitnami/postgresql)
* [Python](https://hub.docker.com/_/python)

Clonar repositorio:
```sh
git clone https://github.com/Joacker/App_DataScience.git
```

Para levantar las instancias dentro de la topología.

```sh
docker-compose up --build
```

Para bajar las instancias del compose
```sh
docker-compose down -v
```

Borrar cache en contenedores
```sh
docker system prune -a
```

Borrar cache en volumenes
```sh
docker volume rm $(docker volume ls -q)
```

---
<h2 align="center">Rutas usadas:</h5>

MODELO 0 [POST]:

Ruta que trae la causa en función de la comuna.
```sh
http://localhost:8000/query0
```

Request:
```JSON
{
	"datos":[0]
}
```

Response:
```json 
{
	"dp1": {
		"IMPRUDENCIA DEL CONDUCTOR": 0.42105263157894735,
		"DESOBEDIENCIA A SEÑALIZACION": 0,
		"DEFICIENCIAS VIALES": 0,
		"FALLAS MECANICAS": 0.21052631578947367,
		"CAUSAS NO DETERMINADAS": 0.05263157894736842,
		"OTRAS CAUSAS": 0,
		"IMPRUDENCIA DEL PEATON": 0,
		"IMPRUDENCIA DEL PASAJERO": 0.15789473684210525,
		"ALCOHOL EN CONDUCTOR": 0.05263157894736842,
		"ALCOHOL EN PEATON": 0,
		"ALCOHOL EN PASAJERO": 0,
		"VELOCIDAD IMPRUDENTE": 0.10526315789473684,
		"DROGAS Y/O FATIGA EN CONDUCTOR": 0,
		"PERDIDA CONTROL VEHICULO": 0
	},
	"coords": [
		{
			"y": "-70.731667",
			"x": "-33.635509"
		},
		{
			"y": "-70.745369",
			"x": "-33.646275"
		},
		{
			"y": "-70.739868",
			"x": "-33.648144"
		},
		{
			"y": "-70.745369",
			"x": "-33.646275"
		},
		{
			"y": "-70.771866",
			"x": "-33.63863"
		}
	]
}
```

El response de la query corresponde a las causas más comunes dada la comuna que se está analizando.

MODELO 1 [POST]:

Ruta que trae la probabilidad de fallecidos en función de la comuna.
```sh
http://localhost:8000/query1
```

Request:
```JSON
{
	"datos":[0]
}
```
Response:
```JSON
{
	"dp1": {
		"CALERA DE TANGO": 0,
		"CERRILLOS": 0,
		"LA FLORIDA": 0,
		"LA GRANJA": 0,
		"LA PINTANA": 0,
		"LA REINA": 0,
		"LAMPA": 0,
		"LAS CONDES": 0,
		"LO BARNECHEA": 0,
		"LO ESPEJO": 0,
		"LO PRADO": 0,
		"MACUL": 0,
		"CERRO NAVIA": 0,
		"MAIPU": 0,
		"PADRE HURTADO": 0,
		"PEDRO AGUIRRE CERDA": 0,
		"PEÑALOLEN": 0,
		"PIRQUE": 0,
		"PROVIDENCIA": 0,
		"PUDAHUEL": 0,
		"PUENTE ALTO": 0,
		"QUILICURA": 0,
		"QUINTA NORMAL": 0,
		"COLINA": 0,
		"RECOLETA": 0,
		"RENCA": 0,
		"SAN BERNARDO": 0,
		"SAN JOAQUIN": 0.16666666666666666,
		"SAN MIGUEL": 0,
		"SAN RAMON": 0,
		"SANTIAGO": 0,
		"TILTIL": 0,
		"VITACURA": 0.16666666666666666,
		"ÑUÑOA": 0,
		"CONCHALI": 0.16666666666666666,
		"EL BOSQUE": 0,
		"ESTACION CENTRAL": 0,
		"HUECHURABA": 0.3333333333333333,
		"INDEPENDENCIA": 0,
		"LA CISTERNA": 0.16666666666666666
	}
}
```
MODELO 2 [POST]:

Ruta que trae la probabilidad de comuna más probable dada una causa.
```sh
http://localhost:8000/query2
```
Request:
```json
{
	"datos":[0]
}

```
Response:
```json
{
	"dp1": {
		"CALERA DE TANGO": 0,
		"CERRILLOS": 0.05263157894736842,
		"LA FLORIDA": 0,
		"LA GRANJA": 0.05263157894736842,
		"LA PINTANA": 0,
		"LA REINA": 0,
		"LAMPA": 0.15789473684210525,
		"LAS CONDES": 0,
		"LO BARNECHEA": 0,
		"LO ESPEJO": 0.10526315789473684,
		"LO PRADO": 0,
		"MACUL": 0,
		"CERRO NAVIA": 0,
		"MAIPU": 0,
		"PADRE HURTADO": 0,
		"PEDRO AGUIRRE CERDA": 0,
		"PEÑALOLEN": 0,
		"PIRQUE": 0.05263157894736842,
		"PROVIDENCIA": 0,
		"PUDAHUEL": 0,
		"PUENTE ALTO": 0,
		"QUILICURA": 0,
		"QUINTA NORMAL": 0,
		"COLINA": 0.05263157894736842,
		"RECOLETA": 0,
		"RENCA": 0,
		"SAN BERNARDO": 0,
		"SAN JOAQUIN": 0.15789473684210525,
		"SAN MIGUEL": 0,
		"SAN RAMON": 0,
		"SANTIAGO": 0,
		"TILTIL": 0.10526315789473684,
		"VITACURA": 0.10526315789473684,
		"ÑUÑOA": 0.05263157894736842,
		"CONCHALI": 0.05263157894736842,
		"EL BOSQUE": 0.05263157894736842,
		"ESTACION CENTRAL": 0,
		"HUECHURABA": 0,
		"INDEPENDENCIA": 0,
		"LA CISTERNA": 0
	}
}
```

MODELO 3 [POST]:

Ruta que trae la probabilidad de ubicación (descripción de la vía) más probable dada una comuna y el tipo de accidente.

Request:
```json
{
	"datos":[1,0]
}
```
Response:
```json
{
	"dp1": {
		"TRAMO DE VIA RECTA": 0.7142857142857143,
		"CRUCE CON SEMAFORO FUNCIONANDO": 0,
		"CRUCE CON SEMAFORO APAGADO": 0,
		"CRUCE REGULADO POR CARABINERO": 0,
		"CRUCE CON SEÑAL PARE": 0,
		"CRUCE CON SEÑAL CEDA EL PASO": 0,
		"CRUCE SIN SEÑALIZACION": 0,
		"TRAMO DE VIA CURVA HORIZONTAL": 0,
		"ENLACE A NIVEL": 0.07142857142857142,
		"ENLACE A DESNIVEL": 0,
		"ACCESO NO HABILITADO": 0,
		"ROTONDA": 0,
		"PLAZA DE PEAJE": 0,
		"OTROS NO CONSIDERADOS": 0.21428571428571427,
		"TRAMO DE VIA CURVA VERTICAL": 0,
		"ACERA O BERMA": 0,
		"TUNEL": 0
	},
	"coords": [
		{
			"y": "-70.708321",
			"x": "-33.48457"
		},
		{
			"y": "-70.723549",
			"x": "-33.489361"
		},
		{
			"y": "-70.726959",
			"x": "-33.492695"
		},
		{
			"y": "-70.707016",
			"x": "-33.531132"
		},
		{
			"y": "-70.71843",
			"x": "-33.526939"
		}
	]
}
```
MODELO 4 [POST]:
Ruta que trae la probabilidad del estado de la calzada más probable dada una comuna y el tipo de accidente.
Request:
```json
{
	"datos":[0]
}
```
Response:
```json
{
	"dp1": {
		"BUENO": 0.9473684210526315,
		"REGULAR": 0.05263157894736842,
		"MALO": 0
	}
}
```
MODELO 5 [POST]:

Ruta que trae la probabilidad del clima más probable dada una muestra de fallecidos.

Request:
```json
{
	"datos":[25]
}
```
Response:
```json
{
	"dp1": {
		"DESPEJADO": 0.8947368421052632,
		"NUBLADO": 0.05263157894736842,
		"LLUVIA": 0,
		"LLOVIZNA": 0.05263157894736842,
		"NEBLINA": 0,
		"NIEVE": 0
	}
}
```
MODELO 6 [POST]:

Ruta que trae probabilidad de la causa más probable dada una muestra de fallecidos.

Request:
```json
{
	"datos":[25]
}
```

Response:
```json
{
	"dp1": {
		"DESOBEDIENCIA A SEÑALIZACION": 0,
		"DEFICIENCIAS VIALES": 0,
		"FALLAS MECANICAS": 0,
		"CAUSAS NO DETERMINADAS": 0,
		"OTRAS CAUSAS": 1,
		"IMPRUDENCIA DEL PEATON": 0,
		"IMPRUDENCIA DEL PASAJERO": 0,
		"ALCOHOL EN CONDUCTOR": 0,
		"ALCOHOL EN PEATON": 0,
		"ALCOHOL EN PASAJERO": 0,
		"VELOCIDAD IMPRUDENTE": 0,
		"DROGAS Y/O FATIGA EN CONDUCTOR": 0,
		"PERDIDA CONTROL VEHICULO": 0
	}
}
```

Las request que son las consultas, son enviadas desde la interfaz por el cliente hácia el servidor, éste último actúa como un controlador, es decir, se encarga de mediar entre la base de datos y la inteligencia artifical con el dataset cargado.

Por lo que al momento de consultar al back éste último consulta a la IA por la información a la cúal se le solicita, luego la IA le entrega la información al servidor nuevamente y el backend adjunta la información procedente de los datos normalizados de la IA, alojados las cadenas de texto en la base de datos SQL (Postgres). Llegando así a la interfaz o front de la aplicación.

A continuación se tiene el siguiente diagrama de flujo:

<h2 align="center">
  <img src="https://raw.githubusercontent.com/Joacker/App_DataScience/main/images/diagrama.png">
  <br>
</h2>

---





<h3 align="center">Video de la actividad</h3>

## *Video del algoritmo de la aplicación con K-Vecinos:*

Se recomienda para una mejor visualización, colocar la opción de calidad y dar click en 1080p60.

[![Alt text](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c06beca-a43d-4a22-9344-5ce55769e7b3/d986n7y-cfcdec5b-c14f-4c32-8487-770b0c0b42ea.jpg/v1/fit/w_414,h_233,q_70,strp/dinkleberg____by_bigdaddydowney_d986n7y-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk5IiwicGF0aCI6IlwvZlwvNGMwNmJlY2EtYTQzZC00YTIyLTkzNDQtNWNlNTU3NjllN2IzXC9kOTg2bjd5LWNmY2RlYzViLWMxNGYtNGMzMi04NDg3LTc3MGIwYzBiNDJlYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5L-w0mmjgyjpHGTQfVSHW2hn9Brh4BvDly9aj2TPyuY)](https://www.youtube.com/watch?v=EJwLGLB_XAo)
