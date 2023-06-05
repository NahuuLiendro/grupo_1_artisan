-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-04-2023 a las 18:20:14
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nfts`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`

DROP DATABASE IF EXISTS `nfts`;
CREATE DATABASE `nfts`;
USE `nfts`;


CREATE TABLE `categorias` (
  `id` int(50) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(50)  NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `precio` int(255) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_categorias`
--

CREATE TABLE `productos_categorias` (
  `id` int(50) NOT NULL,
  `categoria_id` int(50) NOT NULL,
  `producto_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(50) NOT NULL,
  `rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(50) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `rol_id` bigint(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos_categorias`
--
ALTER TABLE `productos_categorias`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
  
  INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("EL DORADO","Se dice que esta imagen produce riqueza infinita, ¿Tú qué opinas? 🤔","imagen-NFTS--1683564861821.png","1200","Paisajes");


INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("GALAXYA","Los científicos dicen que es un portal intergaláctico que no se sabe dónde lleva, o quizá es un simple dibujo"
,"imagen-NFTS--1683565043514.png","1000","Animales");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("RISCO MONTAÑOSO","¿Es un risco o una Montaña? con razón las buenas lenguas dicen: las apariencias engañan 😳"
,"imagen-NFTS--1683565155260.png","7000","Paisajes");


INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("PINGUITASTICO","Este NFT es un claro ejemplo de cómo serían los pingüinos si es que nos llegan a dominar el mundo 🌍"
,"imagen-NFTS--1683565219548.png","1500","Animales");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("EL PERRO APOCALIPTICO","El objetivo de este animal, es poder sobrevivir a un apocalipsis. Si es que llega, claro... 🐶"
,"imagen-NFTS--1683565255980.png","9000","Animales");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("MOSTRO","Les presento al MOSTRO, primo hermano de pie grande, pero ¡ten cuidado!, su tamaño es engañoso 👀"
,"imagen-NFTS--1683565305722.png","2200","Animales");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("PINGUINA","Esta pingüina esta buscando pareja ¿! será que alguien podrá ser digno¡?"
,"imagen-NFTS--1683565506021.png","2200","Animales");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("MR PENSANTE","¿Una pintura o ilusión óptica?¿Una persona o el universo devorando un planeta? 😵‍💫"
,"imagen-NFTS--1683565562988.png","1600","Ilustraciones");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("SIRE-STATUA","¿Porque las sirenas no juegan al tenis? por miedo a quedarse atrapadas en la red 🧜‍♀"
,"imagen-NFTS--1683565605888.png","1150","Ilustraciones");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("PORTAL","El universo abriendo un portal al nunca jamas visto, y por aver... 🌀"
,"imagen-NFTS--1683565656774.png","7000","Ilustraciones");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("ELFO","Esto es un elfo de bosque es bastante tierno ¿verdad?"
,"imagen-NFTS--1683565711212.png","5000","Ilustraciones");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("AUTO 1004","Eh aquí, el Aeromóvil. O mas sencillo llamarle auto volador :) 🚗"
,"imagen-NFTS--1683565756276.png","1300","Vehiculos");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("CAMIONETA 4X4","Si llega la tercera guerra mundial, este auto será uno de los primeros en ponerse a prueba (uso exclusivo del gobierno) ☠"
,"imagen-NFTS--1683565794160.png","1600","Vehiculos");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("AUTO FUTURISTA","El auto futurista no es del futuro, sino del pasado ¿por qué? porque viene de blanco y negro ⬜⬛"
,"imagen-NFTS--1683565861749.png","1800","Vehiculos");

INSERT INTO `productos` (`nombre`, `descripcion`, `imagen`,`precio`,`categoria`) 
VALUES ("GTI 800","Este hermoso auto es tan bueno que muchos quieren comprarlo, pero pocos pueden."
,"imagen-NFTS--1683565929058.png","8200","Vehiculos");
  



--
-- AUTO_INCREMENT de la tabla `productos_categorias`
--
ALTER TABLE `productos_categorias`
  MODIFY `categoria_id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
