# Express

Es un framework de nodejs que nos permite crear aplicaciones web del lado del servidor

Desde el laado del servidor podemos controlar la lógica que se le va a mostrar al usurario en el front.

- Express es un modulo de terceros, de otras personas
- te facilita escribir aplicaciones web(para establecer el servidor)
- Código asíncrono
- Con Express no tenemos que escribir toda la lógica
- Express resume un gran cantidad de codigo dentro de una función

## Comenzando

- npm innit -y
- npm i express

## Routing

app.get(direccion, respuesta)
Si le pedimos una peticion get y queremos que la información nos la traiga como un JSON, entonces escribimos res.JSON({})
Para el método POST en Postman, debemos irnos a Headers,
en el campo KEY escribimos ContentType y en Value le decimos que le mandaremos un application/json.
Ahora en la pestaña Body, escogemos raw y escribimos nuestro json

- En el método POST podemos hacer esto:
  app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("User saved");
  });

## Servidor

Para no estar deteniendo e iniciando el servidor, instalamos nodemon (npm install nodemon -D) para que reinicie el servidor por mí
Se guarda como dependencia de desarrollo porque no la necesito en producción, solo al momento de desarrollar

- Ejecutamos el comando "npx nodemon index.js" y nodemos estará vigilando mi cógigo, si cambio algo y los guardo, nodemos va a reiniciar el servidor automaticamente

## Middleware logger (morgan)

- Los middlewares en express se utilizan siempre con un app.use()

- Son funciones
- Usaremos Morgan para el request logger middleware: muestra por consola las peticiones que se van realizando
- Morgan, en este caso, es una función que se va a ejecutar antes de las rutas
- En el momento en el que comienzas a usar las rutas, Morgan lleva un rastro de ello

## Middleware express.static('nombre de carpeta)

- Este middleware es para enviar archivos al front-end
- Estos archivos son archivos estaticos, es decir, son hojas de html, estilos, js. Cosas del front que se mandan desde el servidor

## Express settings

- Ahí configuramos con un app.set('nombre', valor)
- después lo requerimos con un app.get('nombre)

### Motores de plantillas (ejs)

- SE agregand entro de las configuraciones (agil)
- El motor de plantillas nos ayuda a extender nuestros archivos para su posible usp
- Lo integramos con un app.set('view-engine', 'ejs)
- Creamos una carpeta llamada 'views' y creamos dentro un index.ejs y hacemos una ruta en index para que lo podamos ver
- Existen otros más como (pug, handlebars)

## Bases de datos (manejadores de bd)

Nos permiten que manegemos las bases dedatos sin tener que escribir código de bases de datos, sólo los usaremos con funciones de javascript

- El ORM u ODM hace las consultas por nosotros
- ORM (object-relational mapping)
- ODM (object-document mapping)
