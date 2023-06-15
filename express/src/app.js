const express = require("express");
const {resolve} = require("path");
const app = express();
const port = 4060;
//Esto todo es para loguear al usuario con ssesion, cookies , y requiero el method-override
const session = require("express-session");
const userLogueadoMiddleware = require("./middlewares/userLogueadoMidlewares");
const cookies = require("cookie-parser");
const method = require("method-override");
const cors = require("cors")

//Uso el method-override
app.use(method("m"));

app.use(cors())


//Defino aca session con su clave secreta con la app y lo pongo en la app para usar sessions
app.use(session({
    secret: "clave secreta",
    resave: false,
    saveUninitialized: false,
}));

//Uso el metodo "use" en la app para usarlo con cookies
app.use(cookies());

// Uso el motor de plantillas views para que cambie los html a ejs
app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Archivo para poner estatica  y hacer publica la carpeta public
app.use(express.static(resolve(__dirname,"../public")))

//Aca pongo el Middlewar de si el usuario esta logueada
app.use(userLogueadoMiddleware);

//Levanto servidor para la pagina 
app.listen(port,()=>console.log("El servidor " + port + " se levanto"))




//Estas son todas las rutas exportadas desde sus respectivos controladores con su ruta prefija

//Ruta de la pagina de inicio
const homeRoutes = require("./routes/main")
app.use("/",homeRoutes)

//Ruta para todo lo que tenga que ver con productos con su prefijo
const productRoutes = require("./routes/productRoutes");
app.use("/product",productRoutes);

//Rutas para todo lo que tenga que ver con usuarios con su prefijo
const usersRoutes = require ("./routes/users")
app.use("/users", usersRoutes)

//Aca se requiere el archivo de apis que creamos en los controladores
const usuariosApiRoutes = require("./routes/apiUsersRoutes");
//y lo usamos en las rutas
app.use("/api/users", usuariosApiRoutes);

const productosApiRoutes = require("./routes/apiProductosRoutes");

app.use("/api/products/", productosApiRoutes);

const categoriasApiRoutes = require("./routes/apiCategoriasRoutes");

app.use("/api/categorias/", categoriasApiRoutes);










/*const productApiRoutes = require('./routes/productApiRoutes');
// y lo usamos
app.use('/api/products',productApiRoutes);*/

//***COSAS PARA COMPLETAR*** 

//AL FINAL DE TODO PARA PULIR





/*INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("GALAXYA","Los científicos dicen que es un portal intergaláctico que no se sabe dónde lleva, o quizá es un simple dibujo"
,"imagen-NFTS--1683565043514.png","1000", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("RISCO MONTAÑOSO","¿Es un risco o una Montaña? con razón las buenas lenguas dicen: las apariencias engañan 😳"
,"imagen-NFTS--1683565155260.png","7000", `categoria_id`);


INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("PINGUITASTICO","Este NFT es un claro ejemplo de cómo serían los pingüinos si es que nos llegan a dominar el mundo 🌍"
,"imagen-NFTS--1683565219548.png","1500", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("EL PERRO APOCALIPTICO","El objetivo de este animal, es poder sobrevivir a un apocalipsis. Si es que llega, claro... 🐶"
,"imagen-NFTS--1683565255980.png","9000",`categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("MOSTRO","Les presento al MOSTRO, primo hermano de pie grande, pero ¡ten cuidado!, su tamaño es engañoso 👀"
,"imagen-NFTS--1683565305722.png","2200", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("PINGUINA","Esta pingüina esta buscando pareja ¿! será que alguien podrá ser digno¡?"
,"imagen-NFTS--1683565506021.png","2200", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("MR PENSANTE","¿Una pintura o ilusión óptica?¿Una persona o el universo devorando un planeta? 😵‍💫"
,"imagen-NFTS--1683565562988.png","1600", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("SIRE-STATUA","¿Porque las sirenas no juegan al tenis? por miedo a quedarse atrapadas en la red 🧜‍♀"
,"imagen-NFTS--1683565605888.png","1150", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("PORTAL","El universo abriendo un portal al nunca jamas visto, y por aver... 🌀"
,"imagen-NFTS--1683565656774.png","7000", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("ELFO","Esto es un elfo de bosque es bastante tierno ¿verdad?"
,"imagen-NFTS--1683565711212.png","5000", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("AUTO 1004","Eh aquí, el Aeromóvil. O mas sencillo llamarle auto volador :) 🚗"
,"imagen-NFTS--1683565756276.png","1300", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("CAMIONETA 4X4","Si llega la tercera guerra mundial, este auto será uno de los primeros en ponerse a prueba (uso exclusivo del gobierno) ☠"
,"imagen-NFTS--1683565794160.png","1600", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("AUTO FUTURISTA","El auto futurista no es del futuro, sino del pasado ¿por qué? porque viene de blanco y negro ⬜⬛"
,"imagen-NFTS--1683565861749.png","1800", `categoria_id`);

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("GTI 800","Este hermoso auto es tan bueno que muchos quieren comprarlo, pero pocos pueden."
,"imagen-NFTS--1683565929058.png","8200", `categoria_id`);*/
  
