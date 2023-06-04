/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : pociones_magicas

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 01/06/2023 23:38:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ingredientes
-- ----------------------------
DROP TABLE IF EXISTS `ingredientes`;
CREATE TABLE `ingredientes`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `cantidad` int(0) NULL DEFAULT NULL,
  `descripcion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ingredientes
-- ----------------------------
INSERT INTO `ingredientes` VALUES (1, 'Ancas de rana', 10, 'Son para saltar mejor');
INSERT INTO `ingredientes` VALUES (2, 'Polvos morados', 30, 'Para el pelo morado');

-- ----------------------------
-- Table structure for ingredientes_pocion
-- ----------------------------
DROP TABLE IF EXISTS `ingredientes_pocion`;
CREATE TABLE `ingredientes_pocion`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `id_pocion` int(0) NULL DEFAULT NULL,
  `id_ingredientes` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_P`(`id_pocion`) USING BTREE,
  INDEX `FK_I`(`id_ingredientes`) USING BTREE,
  CONSTRAINT `FK_I` FOREIGN KEY (`id_ingredientes`) REFERENCES `ingredientes` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `FK_P` FOREIGN KEY (`id_pocion`) REFERENCES `pociones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for pociones
-- ----------------------------
DROP TABLE IF EXISTS `pociones`;
CREATE TABLE `pociones`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `descripcion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `precio` decimal(7, 2) NULL DEFAULT NULL,
  `cantidad` bigint(0) NULL DEFAULT NULL,
  `imagen` blob NULL,
  `categoria` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pociones
-- ----------------------------
INSERT INTO `pociones` VALUES (1, 'Saltarín del campo', 'Poción para saltar muy alto', 350.90, 5, NULL, 'Resistencia');
INSERT INTO `pociones` VALUES (2, 'uno', 'uno des', 55.90, 100, NULL, 'Prueba');

SET FOREIGN_KEY_CHECKS = 1;
