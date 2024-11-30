CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE `carrito` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`articulo` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

CREATE TABLE `categoria` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

CREATE TABLE `comentario` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`texto` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`calificación` INT(11) NOT NULL,
	`usuario` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`fecha` DATE NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

CREATE TABLE `productos` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`descripción` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`precio` INT(50) NOT NULL,
	`cantidad` INT(11) NOT NULL,
	`moneda` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;

CREATE TABLE `usuario` (
	`Id` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`apellido` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	`email` VARCHAR(50) NOT NULL COLLATE 'latin1_swedish_ci',
	PRIMARY KEY (`Id`) USING BTREE
)
COMMENT='\r\n'
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;



