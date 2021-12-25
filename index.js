const express = require("express"); //estamos requiriendo un módulo
//ejecutar express(); nos devuelve un objeto y a su vez es el servidor
const app = express(); //app es mi servidor

//middleware
function logger(req, res, next) {
  console.log(
    `Route received: ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
}

//usamos morgan para loggear
const morgan = require('morgan')

//para que express pueda entender los JSON
app.use(express.json());
app.use(logger);

//antes de que llegue a todas las rutas podemos hacer algo
//antes de que pase por la ruta /user
//le pongo otro parametro que es una funcion y ejecutamos el next
app.all("/user", (req, res, next) => {
  console.log("Por aquí pasó");
  next();
});

//mensaje de inicio en servidor
const PORT = 3000;
app.listen(PORT, () => {
  //le pasamos el puerto y una funcion
  console.log(`Server on port: ${PORT}`);
}); //hemos creado el servidor pero no tiene una ruta

//le decimos la ruta inicial y funcion típica de node
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

//creando nueva ruta
app.get("/about", (req, res) => {
  res.send("About us section");
});
app.get("/user", (req, res) => {
  res.json({ name: "Leonardo", userName: "Leoguzs1" });
});
app.get("/user/:id", (req, res) => {
  res.json(req.params.id);
});

//Creando más métodos
app.post("/user", (req, res) => {
  console.log(req.body); //imprimimos el cuerpo de la petición
  res.send("User saved"); //undefined porque Express no puede
}); //entender los objetos JSON, nos vamos hasta arriba para require express.json

//agregando con id (queries)
app.post("/user/:id", (req, res) => {
  console.log(req.body); //cuerpo de la petición
  console.log(req.params); //con el id ahora es parametro
  res.send("User saved");
});

app.put("/user/:id", (req, res) => {
  //en el put recibimos el body, el objeto, para saber qué reemplazar
  console.log(req.body);
  res.send(`user ${req.params.id} updated`);
});

app.delete("/user/:id", (req, res) => {
  //porque con el params te trae un objeto
  res.send(`User ${req.params.id} has been deleted`);
});
