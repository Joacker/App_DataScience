<h1 align="center">
  <img src="https://raw.githubusercontent.com/Joacker/App_DataScience/main/images/app_diagram.png">
  <br>
</h1>

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

Body:
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






<h3 align="center">Video solicitado por la actividad</h3>

## *Video del algoritmo de la aplicación con K-Vecinos:*

Se recomienda para una mejor visualización, colocar la opción de calidad y dar click en 1080p60.

[![Alt text](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c06beca-a43d-4a22-9344-5ce55769e7b3/d986n7y-cfcdec5b-c14f-4c32-8487-770b0c0b42ea.jpg/v1/fit/w_414,h_233,q_70,strp/dinkleberg____by_bigdaddydowney_d986n7y-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk5IiwicGF0aCI6IlwvZlwvNGMwNmJlY2EtYTQzZC00YTIyLTkzNDQtNWNlNTU3NjllN2IzXC9kOTg2bjd5LWNmY2RlYzViLWMxNGYtNGMzMi04NDg3LTc3MGIwYzBiNDJlYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5L-w0mmjgyjpHGTQfVSHW2hn9Brh4BvDly9aj2TPyuY)]()
