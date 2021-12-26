const express = require("express"); //estamos requiriendo un módulo
//ejecutar express(); nos devuelve un objeto y a su vez es el servidor
const app = express(); //app es mi servidor
//usamos el middleware morgan para loggear
const morgan = require("morgan");

//settings, en el primer parametro el nombre y en el segundo, valor de la variable
app.set("appName", "Leonardo Express Tutorial"); //lo metemos en donde esta app.listen y ahí hacemos un console log app.get
//ejemplo
app.set("PORT", 5000);
app.set("view-engine", "ejs"); //motor de plantilla

//middlewares
//para que express pueda entender los JSON
app.use(express.json());
//configuramos morgan
app.use(morgan("dev")); /* tiny, compact  */

//routes

//antes de que llegue a todas las rutas podemos hacer algo
//antes de que pase por la ruta /user
//le pongo otro parametro que es una funcion y ejecutamos el next
app.all("/user", (req, res, next) => {
  console.log("Por aquí pasó");
  next();
});

//creamos nuestro puerto
/* const PORT = 3000; reemplazado con un set */

//le decimos la ruta inicial y funcion típica de node
/* app.get("/", (req, res) => {
  res.send("Welcome to the server");
}); */

//usando el EJS ejercicio para probarlo
app.get("/", (req, res) => {
  const data = [
    { name: "Elias", age: 33 },
    { name: "Marco", age: 22 },
    { name: "Missael", age: 15 },
  ];
  res.render("index.ejs", { people: data }); //le paso data como un objeto de propiedad people
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
  res.send(`User ${req.params.id} has been deleted`); //postman
  console.log("user deleted");
});

//recordemos que los middlewares van dentrode un app.use
//le decimos el nombre de la carpeta
app.use(express.static("public")); //localhost:300/index.html
//es carpeta public, porque puedes acceder a ellas desde el navegador

//mensaje de inicio en servidor
app.listen(app.get("PORT"), () => {
  //le pasamos el puerto y una funcion
  console.log(`Server on port: ${app.get("PORT")}`);
  console.log(app.get("appName"));
}); //hemos creado el servidor pero no tiene una ruta
