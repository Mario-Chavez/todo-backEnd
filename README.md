# Aplicación de ToDo con React Bootstrap y JSON Server

Esta es una aplicación de lista de tareas (ToDo) desarrollada utilizando React, React Bootstrap y JSON Server. La aplicación permite a los usuarios crear, leer, actualizar y eliminar tareas.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema:

-   Node.js: https://nodejs.org (versión recomendada: LTS)
-   NPM: Viene incluido con Node.js, pero se recomienda verificar si está actualizado ejecutando `npm install -g npm`
-   ## Configuración inicial

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona el repositorio desde GitHub: `git clone https://github.com/Mario-Chavez/todo-backEnd.git`
2. Navega al directorio del proyecto: `cd todo-backEnd`
3. Instala las dependencias del proyecto: `npm install`

## Configuración de la base de datos JSON Server

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Crea un archivo `db.json` en la raíz del proyecto.
2. Define la estructura inicial de la base de datos en el archivo `db.json.` Por ejemplo:

```javascript
{
  "tasks": [
    {
      "id": 1,
      "title": "Hacer la compra",
      "completed": false
    },
    {
      "id": 2,
      "title": "Llamar al médico",
      "completed": false
    }
  ]
}

```

## comando para ejecutar json server

json-server --watch db.json --port 3004

## ¡Visita mi sitio Aqui!

[Cafecito](https://app-cafecito.netlify.app)

## Desarrollador

Dev - Mario Chavez [GitHub](https://github.com/Mario-Chavez)
