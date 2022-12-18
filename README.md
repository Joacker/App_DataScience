<h1 align="center">
  <img src="https://raw.githubusercontent.com/Joacker/App_DataScience/main/images/app_diagram.png">
  <br>
</h1>

<h1 align="center">App Data Science</h2>
<h3 align="center">Docker, Postgres, Go and JQuery Deploy for High Disponibility Subject</h3>
<h5 align="center">Made by Brian Castro & Joaquín Fernández.</h5>

<p align="center"><img src="https://img.shields.io/github/downloads/heym1ke/Assist/total.svg?style=for-the-badge&color=f71d51" alt="Downloads"></p>



### 🛠 Contruído con:

* [Nodejs](https://nodejs.org/en/)
* [React](https://reactjs.org)
* [Postgres](https://www.postgresql.org)
* [Python](https://www.python.org)
* [Docker](https://www.docker.com)

### 🐳 Imágenes utilizadas de dockerhub:

* [Golang](https://hub.docker.com/_/golang)
* [Alpine](https://hub.docker.com/_/alpine)
* [Postgres](https://hub.docker.com/r/bitnami/postgresql)
* [Apache](https://hub.docker.com/_/httpd)
* [Nginx](https://hub.docker.com/_/nginx)

Clonar repositorio:
```sh
git clone https://github.com/Joacker/Vagorant-Agent-Reviews.git
```

Para levantar las instancias dentro de la topología.

```sh
docker-compose up --build
```

Para bajar las instancias del compose
```sh
docker-compose down
```

Borrar cache en contenedores
```sh
docker system prune -a
```

Borrar cache en volumenes
```sh
docker volume rm $(docker volume ls -q)
```

Recordar que no se integró algo como JWT por lo que esta aplicación funciona para el inicio de sesión de un usuario; sino las funcionalidades se ven perjudicadas favor de cuando termine de usar la aplicación cerrar sesión, es decir, de click en logout.

---
<h2 align="center">Rutas usadas:</h5>

LOGIN [POST]:

Ruta que trae los datos del usuario.
```sh
http://localhost:3000/users3
```

Body:
```JSON
{
	"email":"ana.martinez@hotmail.com",
	"password":"1234"
}
```

Response:
```json 
{
	"ID": 0,
	"CreatedAt": "0001-01-01T00:00:00Z",
	"UpdatedAt": "2022-10-10T18:03:36.953056811Z",
	"DeletedAt": null,
	"Id": 5,
	"Email": "ana.martinez@hotmail.com",
	"Password": "1234",
	"Logged_in": 1
}
```

En caso de que el usuario no se encuentre registrado, el response vendría a ser otro, similar a lo que se verá a continuación:
```json
"Usuario no encontrado"
```


Ruta con datos del back pero ahora cobre una interfaz.

```sh
http://localhost:5000/Login.html
```

Logeados [GET]:
Ruta que trae lista de usuarios con sesión ya iniciada.

```sh
http://localhost:3000/logeados
```

Response:
```json
[
	{
		"ID": 0,
		"CreatedAt": "0001-01-01T00:00:00Z",
		"UpdatedAt": "2022-10-15T21:11:43.986303Z",
		"DeletedAt": null,
		"Id": 5,
		"Email": "ana.martinez@hotmail.com",
		"Password": "1234",
		"Logged_in": 1
	}
]
```

La ruta en el cliente es aplicada en la siguiente dirección:

```sh
http://localhost:5000/astra.html
```

Mi_reseña [POST]:

Ruta usada para traer la resenia del usuario que inicio sesión respecto al agente que haya seleccionado en el menu.
```sh
http://localhost:3000/miresenia
```
Body, para este caso es necesario tanto atributo de nombre de agente y correo electrónico.
```json
{
	"name":"ASTRA",
	"email":"pedro2.rodriguez@hotmail.com"
}
```
En donde el response le responderá en caso de que se encuentre la resenia ya registrada o no.

En caso de no estar, el response vendría a ser el siguiente:
```json
"No se encontro Resenia"
```
Caso que el usuario ya haya registrado alguna reseña, el response vendría a ser el siguiente:
```json
{
	"ID": 0,
	"CreatedAt": "0001-01-01T00:00:00Z",
	"UpdatedAt": "0001-01-01T00:00:00Z",
	"DeletedAt": null,
	"Id": 1,
	"Email": "maria.gomez@gmail.com",
	"Name": "ASTRA",
	"Comment": "Mi main es la mejor del juego nasheee"
}
```
La ruta de Mi_Resenia también tiene un uso dentro de la interfaz o cliente, mediante al ruta de Astra ya mencionada (http://localhost:5000/astra.html).

All_resenias [POST]:

Ruta usada para traer todas la resenias que no son pertenecientes al usuario pero que pertenecen al mismo Agente el cuál se encuentre situado.

```sh
http://localhost:3000/allresenias
```

El body de entrada, puede ser el siguiente:
```json
{
	"email":"maria.gomez@gmail.com",
	"name":"ASTRA"
}
```
Su response para este caso es el siguiente:
```json
[
	{
		"ID": 0,
		"CreatedAt": "0001-01-01T00:00:00Z",
		"UpdatedAt": "0001-01-01T00:00:00Z",
		"DeletedAt": null,
		"Id": 2,
		"Email": "pedro.rodriguez@hotmail.com",
		"Name": "ASTRA",
		"Comment": "ASTRA es la mejor agente del juego"
	},
	{
		"ID": 0,
		"CreatedAt": "2022-10-15T23:01:13.803913Z",
		"UpdatedAt": "2022-10-15T23:01:13.803913Z",
		"DeletedAt": null,
		"Id": 4,
		"Email": "juan.perez@gmail.com",
		"Name": "ASTRA",
		"Comment": "asd"
	}
]
```
La funcionalidad de esta ruta esta aplicada en la ruta de interfaz asociada al agente.

Postresenia [POST]:

Ruta para registrar nuevas reseñas del campeón; va a cumplir según el usuario ya haya comentado o no.

```sh
http://localhost:3000/postresenias
```

El body debería de contener lo siguiente. . .
```json
{
	"name":"ASTRA",
	"email":"juan.perez@gmail.com",
	"comment":"asd"
}
```

El response corresponde a:
```json
{
	"ID": 0,
	"CreatedAt": "2022-10-15T23:01:13.803913628Z",
	"UpdatedAt": "2022-10-15T23:01:13.803913628Z",
	"DeletedAt": null,
	"Id": 4,
	"Email": "juan.perez@gmail.com",
	"Name": "ASTRA",
	"Comment": "asd"
}
```
Y en caso de que ya tenga una reseña agregada, solo podrá editar y borrar la reseña.

En caso de error el response es:
```json
"Resenia ya registrada"
```

Putresenia [PUT]:

Esta ruta fue de utilidad para el proceso de cambio de datos o actualización de la reseña dado un agente en específico.
```sh
http://localhost:3000/putresenias
```
El body contiene la siguiente estructura. . .
```json
{
	"name":"ASTRA",
	"email":"maria.gomez@gmail.com",
	"comment":"asd3qwuoeqwueoiqwe"
}
```

Deleteresenia [DELETE]:

El método por http fue de utilidad para borrar la reseña del usuario, siendo parte del conjunto de funciones en la interfaz de usuario.

El body tendría la siguiente forma:
```json
{
	"name":"ASTRA",
	"email":"maria.gomez@gmail.com"
}
```
Y el response devolvería lo siguiente:
```json
{
	"ID": 0,
	"CreatedAt": "0001-01-01T00:00:00Z",
	"UpdatedAt": "2022-10-15T23:23:50.332811Z",
	"DeletedAt": "2022-10-15T23:34:15.976707982Z",
	"Id": 1,
	"Email": "maria.gomez@gmail.com",
	"Name": "ASTRA",
	"Comment": "asd3qwuoeqwueoiqwe"
}
```
De igual forma cabe hacer mención de que como se está trabajando con Go, no borra o actualiza directamente los datos de las tablas, más bien cambia unos estados de nombre "UpdatedAt" y "DeletedAt".

---

<h3 align="center">Referencias y material de apoyo</h3>

## *Multi-Stage:*
[![Alt text](https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png)](https://www.youtube.com/watch?v=62r32R75iZs)
## *Golang:*
[![Alt text](https://www.algoworks.com/wp-content/uploads/2020/11/golang-development-company.png)](https://www.youtube.com/watch?v=B6gQ1B0cn4s)

---

<h3 align="center">Video solicitado por la actividad</h3>

## *Video:*

Se recomienda para una mejor visualización, colocar la opción de calidad y dar click en 1080p60.

[![Alt text](https://nitter.net/pic/media%2FE3xxK80WYAA8Jec.jpg)](https://www.youtube.com/watch?v=NkHg598tYmI)
