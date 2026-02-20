-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-10-2025 a las 12:30:01
-- Versión del servidor: 5.7.17-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: "mantenimiento_palnorte"
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "activo"
--

CREATE TABLE "activo" (
  "id" int(11) NOT NULL,
  "COD_ACTIVO" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "serial" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "nombre_activo" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "tipo_activoId" int(11) DEFAULT NULL,
  "tipo_equipoId" int(11) DEFAULT NULL,
  "procesador" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "memoria_ram" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "almacenamiento" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "licencia" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "disponibilidad" int(11) DEFAULT NULL,
  "integridad" int(11) DEFAULT NULL,
  "confidencialidad" int(11) DEFAULT NULL,
  "valor_cuantitativo" int(11) DEFAULT NULL,
  "valor_cualitativo" int(11) DEFAULT NULL,
  "categoria_activoId" int(11) DEFAULT NULL,
  "licencia_antivirus" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "licencia_office" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "serial_almacenamiento" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "sistema_operativo" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "marca" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "activo"
--

INSERT INTO "activo" ("id", "COD_ACTIVO", "serial", "nombre_activo", "tipo_activoId", "tipo_equipoId", "procesador", "memoria_ram", "almacenamiento", "licencia", "disponibilidad", "integridad", "confidencialidad", "valor_cuantitativo", "valor_cualitativo", "categoria_activoId", "licencia_antivirus", "licencia_office", "serial_almacenamiento", "sistema_operativo", "marca") VALUES
(1, '01', 'HP465656', 'PC GERENCIA', 2, 5, 'INTEL CORE I5', '18GB', '18 GB', '', 5, 4, 4, 4, 7, 1, 'KASPERSKY 2343434343', 'OFFICE 365 SR 2222222', 'WZ121233S', 'WINDOWS', 'HP'),
(3, '000000', '1000202390', 'IMPRESORA DESKJET 2300', 2, 5, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'HP'),
(7, '03', 'SR0001', 'CELULAR', NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', 'IPHONE'),
(8, 'BL-01', 'SR54321', 'IMPRESORA BLUETOOTH', 2, 9, '', '', '', '', NULL, NULL, NULL, NULL, NULL, 1, '', '', '', '', 'JOOPRINT'),
(9, 'EP-001', 'SR93343', 'IMPRESORA EPSON ECO-TANK', 2, 5, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', 'EPSON');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "activoimage"
--

CREATE TABLE "activoimage" (
  "id" int(11) NOT NULL,
  "url" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "activoId" int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "activoimage"
--

INSERT INTO "activoimage" ("id", "url", "activoId") VALUES
(63, 'eba18e77-102e-43fc-9846-fb56df5145f6.jpeg', 3),
(64, '4caf081b-f66e-4cce-abac-d5b02013ee4f.jpeg', 7),
(65, '81adb709-e216-49b0-916b-eb01e7d5f449.png', 8),
(66, '2a246edf-80c2-4d13-998f-1357c94fc52f.jpeg', 8),
(67, '6c03141e-a15d-4fe8-82f5-6ed80cd287ca.jpeg', 9),
(68, 'b2c0f793-aaf4-408e-a0d3-a61d205b02d1.webp', 8),
(72, '03373b5d-bc6f-46ad-8c22-8d1dcfbd933f.jpeg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "activo_asignacion"
--

CREATE TABLE "activo_asignacion" (
  "id" int(11) NOT NULL,
  "fecha" datetime(3) DEFAULT NULL,
  "tipo_asignacionId" int(11) DEFAULT NULL,
  "ubicacionId" int(11) DEFAULT NULL,
  "sucursalId" int(11) DEFAULT NULL,
  "areaId" int(11) DEFAULT NULL,
  "activoId" int(11) DEFAULT NULL,
  "estado" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "fecha_entrega" datetime(3) DEFAULT NULL,
  "responsableId" int(11) DEFAULT NULL,
  "obser" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "area"
--

CREATE TABLE "area" (
  "id" int(11) NOT NULL,
  "COD_AREA" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "area"
--

INSERT INTO "area" ("id", "COD_AREA", "detalle") VALUES
(1, '01', 'ADMINISTRATIVO'),
(2, '02', 'MANTENIMIENTO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "cargo"
--

CREATE TABLE "cargo" (
  "id" int(11) NOT NULL,
  "COD_CARGO" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "cargo"
--

INSERT INTO "cargo" ("id", "COD_CARGO", "detalle") VALUES
(1, 'AUXI-CONT', 'AUXILIAR CONTABLE'),
(2, 'LI-OP', 'LIDER DE OPERACIONES'),
(3, 'AUXI-MEC', 'AUXILIAR MECANICO'),
(4, 'AUXI-OP', 'AUXILIAR OPERATIVO'),
(5, 'ANA-LAB', 'ANALISTA DE LABORATORIO'),
(6, 'DIR-FINAN', 'DIRECTOR FINANCIERO'),
(7, 'COOR-CONT', 'COORDINADOR CONTABLE'),
(8, 'COOR-BSOCI', 'COORDINADOR BIENESTAR SOCIAL'),
(9, 'COOR-NOM', 'COORDINADOR DE NOMINA'),
(10, 'ASIS-SOTEC', 'ASISTENTE DE SOPORTE TECNICO'),
(11, 'AUXI-ADMIB', 'AUXILIAR ADMINISTRATIVO DE BASCULA'),
(12, 'AUXI-GAMB', 'AUXILIAR DE GESTION AMBIENTAL'),
(13, 'DIR-PLAN-SOS', 'DIRECTOR DE PLANTA Y  SOSTENIBILIDAD'),
(14, 'COOR-COMP', 'COORDINADORA DE COMPRAS'),
(15, 'AUX-OPERA', 'AUXILIAR OPERATIVO DE PLANTA'),
(16, 'LID--CONTA-JR', 'LIDER CONTABLE'),
(17, 'AUXI-ADMI', 'AUXILIAR ADMINISTRATIVO'),
(18, 'ASIS-PROYINFRA', 'ASISTENTE DE PROYECTOS E INFRAESTRUCTURAS'),
(19, 'COOR-ERP', 'COORDINADOR ERP'),
(20, 'AUXI-COMP', 'AUXILIAR DE COMPRAS'),
(21, 'AUXI-OFIVA', 'AUXILIAR DE OFICIOS VARIOS'),
(22, 'COOR-PROD', 'COORDINADOR DE PRODUCCION'),
(23, 'ASIS-AGRON', 'ASISTENTE AGRONOMICO'),
(24, 'DIR-ADMI', 'DIRECTOR ADMINISTRATIVO'),
(25, 'AUX-TICS', 'AUXILIAR DE TICS'),
(26, 'AUXI-SERVG', 'AUXILIAR DE SERVICIOS GENERALES'),
(27, 'AUXI-ALM', 'AUXILIAR DE ALMACEN'),
(28, 'AUX-ALIAN', 'AUXILIAR ADMINISTRATIVO DE ALIANZAS'),
(29, 'COORD-TES-CAR', 'COORDINADOR DE TESORERIA Y CARTERA'),
(30, 'FACT', 'FACTURACION'),
(31, 'LI-MMTO', 'LIDER MANTENIMIENTO JR'),
(32, 'AUXI-CCTV', 'AUXILIAR DE CCTV'),
(33, 'AUX-TESOR', 'AUXILIAR DE TESORERIA'),
(34, 'COOR-LOGIS', 'COORDINADOR DE LOGISTICA'),
(35, 'AUXI-ARCH', 'AUXILIAR DE ARCHIVO'),
(36, 'AUXI-LAB', 'AUXILIAR DE LABORATORIO'),
(37, 'COOR-TIC', 'COORDINADOR DE TIC'),
(38, 'ASIST-ALIAN', 'ASISTENTE DE ALIANZAS'),
(39, 'ASIS-PLAN', 'ASISTENTE DE PLANTA'),
(40, 'DIR-PLAFYR', 'DIRECTOR DE PLANTA FISICA Y DE RIESGOS'),
(41, 'COOR-SST', 'COORDINADOR DE SEGURIDAD Y SALUD EN EL TRABAJO'),
(42, 'COOR-AMB', 'COORDINADOR AMBIENTAL'),
(43, 'LI-CONT', 'LIDER CONTABLE SR'),
(44, 'COOR-ADMI', 'COORDINADOR ADMINISTRATIVO'),
(45, 'COOR-OP', 'COORDINADOR OPERATIVO'),
(46, 'COOR-SISINGEST', 'COORDINADOR DE SISTEMAS INTEGRADOS DE GESTION'),
(47, 'ANA-COMORGA', 'ANALISTA DE COMUNICACION ORGANIZACIONAL'),
(48, 'LID-SOST', 'LIDER DE SOSTENIBILIDAD'),
(49, 'TEC-MEC', 'TECNICO MECANICO'),
(50, 'LI-SST', 'LIDER DE SEGURIDAD Y SALUD EN EL TRABAJO'),
(51, 'COOR-JURI', 'COORDINADOR JURIDICO'),
(52, 'COOR-ALM', 'COORDINADOR DE ALMACEN'),
(53, 'COOR-CAL', 'COORDINADOR DE CALIDAD'),
(54, 'GERENCIA', 'GERENCIA'),
(55, 'CONT-INT', 'CONTROL INTERNO'),
(56, 'ISST', 'INSPECTOR DE SEGURIDAD Y SALUD EN EL TRABAJO'),
(57, 'RECEP', 'RECEPCIONISTA'),
(58, 'AUX-OFIVAC-JARD', 'AUXILIAR DE OFICIOS VARIOS (JARDINEROS)'),
(59, 'AUXI-ADMI-OPE', 'AUXILIAR ADMINISTRATIVO DE OPERACIONES'),
(60, 'COOR-OPE', 'COORDINADOR DE OPERACIONES'),
(61, 'LID-MMTO-SR', 'LIDER DE MANTENIMIENTO SR'),
(62, 'COOR-DRS-AGR', 'COORDINADOR AGRONOMICO(DRS)'),
(63, 'COORD-SERV-PROVEE', 'COORDINADOR DE SERVICIO AL PROVEEDOR'),
(64, 'AUXI-ADMI-SERVIPRO', 'AUXILIAR ADMINISTRATIVO DE SERVICIO AL PROVEEDOR'),
(65, 'GEST-AMB', 'GESTOR AMBIENTAL'),
(66, 'GEST-SOST', 'GESTOR DE SOSTENIBILIDAD'),
(67, 'GES-CAM', 'GESTOR DE CAMPO'),
(68, 'AUX-ADM-ATI', 'AUXILIAR ADMINISTRATIVO DE ASISTENCIA TECNICA'),
(69, 'ASIST-MANT', 'ASISTENTE DE MANTENIMIENTO'),
(70, 'COORD-SOP', 'COORDINADOR DE SOPORTE TECNICO'),
(71, 'LUB', 'LUBRICADOR'),
(72, 'INST', 'INSTRUMENTISTA'),
(73, 'OPER-CCM', 'OPERADOR DE CCM'),
(74, 'ELEC', 'ELECTRICISTA'),
(75, 'CON-VOL', 'CONDUCTOR DE VOLQUETA'),
(76, 'MEC-AUT', 'MECANICO AUTOMOTRIZ'),
(77, 'OPE-MAQU', 'OPERADOR DE MAQUINARIA'),
(78, 'DESP', 'DESPACHADOR'),
(79, 'AUX-DESP', 'AUXILIAR ADMINISTRATIVO DE DESPACHOS'),
(80, 'AUX-FACT', 'AUXILIAR DE FACTURACION'),
(81, 'OPE-PLAN-I', 'OPERARIO DE PLANTA I'),
(82, 'AUX-CART', 'AUXILIAR DE CARTERA'),
(83, 'INSTRU-MAQUI', 'INSTRUCTOR DE MAQUINARIA'),
(84, 'COORD-CONT-2', 'COORDINADOR CONTABLE'),
(85, 'AUX-CONT-2', 'AUXILIAR CONTABLE 2'),
(86, 'AUX-CONT-3', 'AUXILIAR CONTABLE 3'),
(87, 'OPE-PLAN-II', 'OPERARIO DE PLANTA II'),
(88, 'COORD-PROD-II', 'COORDINADOR DE PRODUCCION II'),
(89, 'COOR-PRODUC-3', 'COORDINADOR DE PRODUCCION III'),
(90, 'OPE-PLAN-III', 'OPERARIO DE PLANTA III'),
(91, 'COORD-PROD-ORG', 'COORDINADORA DE PRODUCCION DE ORGANICOS'),
(92, 'AUX-OPERA-ORG', 'AUXILIAR OPERATIVO DE ORGANICOS'),
(93, 'AUX-ADM-ORG', 'AUXILIAR ADMINISTRATIVO DE ORGANICOS'),
(94, 'OPER-PLAN-ORG', 'OPERARIO DE PLANTA DE ORGANICOS'),
(95, 'ANALI-LAB-ORG', 'ANALISTA DE LABORATORIO DE ORGANICOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "categoria_activo"
--

CREATE TABLE "categoria_activo" (
  "id" int(11) NOT NULL,
  "COD_CATEGORIA_ACTIVO" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "categoria_activo"
--

INSERT INTO "categoria_activo" ("id", "COD_CATEGORIA_ACTIVO", "detalle") VALUES
(1, '01', 'PROPIEDAD, PLANTA Y EQUIPO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "category"
--

CREATE TABLE "category" (
  "id" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "estadoticket"
--

CREATE TABLE "estadoticket" (
  "id" int(11) NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "estadoticket"
--

INSERT INTO "estadoticket" ("id", "detalle") VALUES
(1, 'Pendiente'),
(2, 'En Progreso'),
(3, 'Completado'),
(4, 'Cancelado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "marca"
--

CREATE TABLE "marca" (
  "id" int(11) NOT NULL,
  "COD_MARCA" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "permission"
--

CREATE TABLE "permission" (
  "id" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "sistema" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "permission"
--

INSERT INTO "permission" ("id", "detalle", "sistema") VALUES
('TIPO_ACTIVO-A', 'TIPO_ACTIVO- ADICIONAR', NULL),
('TIPO_ACTIVO-B', 'TIPO_ACTIVO - BORRAR', NULL),
('TIPO_ACTIVO-i', 'TIPO_ACTIVO - INGRESO', NULL),
('TIPO_ACTIVO-M', 'TIPO_ACTIVO- MODIFICAR', NULL),
('TIPO_EQUIPO-A', 'TIPO_EQUIPO-A', NULL),
('TIPO_EQUIPO-I', 'TIPO_EQUIPO - INGRESAR', NULL),
('TIPO_EQUIPO-M', 'TIPO_EQUIPO - MODIFICAR', NULL),
('USUARIOS-A', 'USUARIOS - ADICIONAR', NULL),
('USUARIOS-B', 'USUARIOS - BORRAR', NULL),
('USUARIOS-I', 'USUARIOS - INGRESAR', NULL),
('USUARIOS-M', 'USUARIOS - MODIFICAR', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "post"
--

CREATE TABLE "post" (
  "id" int(11) NOT NULL,
  "title" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "content" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "authorId" int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "prioridad"
--

CREATE TABLE "prioridad" (
  "id" int(11) NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "prioridad"
--

INSERT INTO "prioridad" ("id", "detalle") VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "product"
--

CREATE TABLE "product" (
  "id" int(11) NOT NULL,
  "ref" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "title" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "price" int(11) NOT NULL,
  "description" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "slug" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "available" tinyint(1) NOT NULL,
  "stock" int(11) NOT NULL,
  "sizes" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "gender" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "tags" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "image" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "categoryId" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "productimage"
--

CREATE TABLE "productimage" (
  "id" int(11) NOT NULL,
  "url" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "productId" int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "programa"
--

CREATE TABLE "programa" (
  "id" int(11) NOT NULL,
  "COD_PROGRAMA" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "serial" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "reg_eventos"
--

CREATE TABLE "reg_eventos" (
  "id" int(11) NOT NULL,
  "fecha_hora" timestamp NULL DEFAULT NULL,
  "hora" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "usuario" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "comando" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "ip" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "modulo" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "tipo" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "role"
--

CREATE TABLE "role" (
  "role" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "name" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "sistema_operativo"
--

CREATE TABLE "sistema_operativo" (
  "id" int(11) NOT NULL,
  "COD_SISTEMA_OPERATIVO" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "sucursal"
--

CREATE TABLE "sucursal" (
  "id" int(11) NOT NULL,
  "COD_SUCURSAL" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "sucursal"
--

INSERT INTO "sucursal" ("id", "COD_SUCURSAL", "detalle") VALUES
(1, '01', 'OFICINA CUCUTA'),
(2, '02', 'PLANTA CAMPO DOS'),
(3, '03', 'RECURSO HUMANO'),
(4, '04', 'LA MATA CESAR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "ticket"
--

CREATE TABLE "ticket" (
  "id" int(11) NOT NULL,
  "fecha" datetime(3) DEFAULT NULL,
  "fecha_fin" datetime(3) DEFAULT NULL,
  "hora" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "usuarioId" int(11) DEFAULT NULL,
  "activoId" int(11) DEFAULT NULL,
  "prioridadId" int(11) DEFAULT NULL,
  "obser" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "areaId" int(11) DEFAULT NULL,
  "sucursalId" int(11) DEFAULT NULL,
  "ubicacionId" int(11) DEFAULT NULL,
  "agenteId" int(11) DEFAULT NULL,
  "estadoTicketId" int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "ticket"
--

INSERT INTO "ticket" ("id", "fecha", "fecha_fin", "hora", "usuarioId", "activoId", "prioridadId", "obser", "areaId", "sucursalId", "ubicacionId", "agenteId", "estadoTicketId") VALUES
(2, '2025-10-28 00:00:00.000', NULL, NULL, 1, 1, 3, NULL, 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "ticketimage"
--

CREATE TABLE "ticketimage" (
  "id" int(11) NOT NULL,
  "url" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "ticketId" int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "tipo_activo"
--

CREATE TABLE "tipo_activo" (
  "id" int(11) NOT NULL,
  "COD_TIPO_ACTIVO" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "tipo_activo"
--

INSERT INTO "tipo_activo" ("id", "COD_TIPO_ACTIVO", "detalle") VALUES
(1, '00', '- No Aplica -'),
(2, '01', 'HARDWARE'),
(3, '02', 'SOFTWARE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "tipo_asignacion"
--

CREATE TABLE "tipo_asignacion" (
  "id" int(11) NOT NULL,
  "COD_TIPO_ASIGNACION" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "tipo_asignacion"
--

INSERT INTO "tipo_asignacion" ("id", "COD_TIPO_ASIGNACION", "detalle") VALUES
(1, '01', 'ENTREGA DE EQUIPOS'),
(2, '02', 'DEVOLUCION DE EQUIPOS'),
(3, '03', 'BAJA DE EQUIPOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "tipo_equipo"
--

CREATE TABLE "tipo_equipo" (
  "id" int(11) NOT NULL,
  "COD_TIPO_EQUIPO" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "tipo_equipo"
--

INSERT INTO "tipo_equipo" ("id", "COD_TIPO_EQUIPO", "detalle") VALUES
(1, '00', '- NO APLICA -'),
(2, '01', 'PORTATIL'),
(3, '02', 'PC DE MESA'),
(4, '03', 'TODO EN UNO'),
(5, '04', 'IMPRESORA'),
(6, '05', 'VIDEO BEAM'),
(7, '06', 'TELEFONO CELULAR'),
(8, '07', 'RASPBERRY PI'),
(9, '08', 'IMPRESORA BLUETOOTH'),
(10, '09', 'ROUTER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "todo"
--

CREATE TABLE "todo" (
  "id" int(11) NOT NULL,
  "text" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "completedAt" timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "ubicacion"
--

CREATE TABLE "ubicacion" (
  "id" int(11) NOT NULL,
  "COD_UBICACION" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "detalle" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "ubicacion"
--

INSERT INTO "ubicacion" ("id", "COD_UBICACION", "detalle") VALUES
(1, '01', 'OFICINA SOSTENIBILIDAD'),
(2, '02', 'GARITA '),
(3, '03', 'BASCULA LA MATA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "user"
--

CREATE TABLE "user" (
  "id" int(11) NOT NULL,
  "email" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "name" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  "lastname" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "CODIGO" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "password" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "emailValidated" tinyint(1) DEFAULT NULL,
  "isActive" tinyint(1) DEFAULT NULL,
  "foto" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "role" varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  "cargoId" int(11) DEFAULT NULL,
  "isAgente" tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "user"
--

INSERT INTO "user" ("id", "email", "name", "lastname", "CODIGO", "password", "emailValidated", "isActive", "foto", "role", "cargoId", "isAgente") VALUES
(1, 'fernando@google4.com', 'pedro', NULL, '88', '$2a$10$oA/dGctaWmgF8qWsd/HfAOPJ8UHbwazBWFon4LZ.uWTQFCtCLP462', 1, 1, NULL, 'admin', NULL, 1),
(2, 'fernando@google4.com', 'pedro', 'ruiz', '82478', '$2a$10$ZphfcKCX4yofWvoqzQXBFeeb3ZJ4RSLGkpEcHwOdRKH3OwFjUwb0W', 0, 1, NULL, 'admin', NULL, NULL),
(3, 'e3@e.com', 'LUIS ENRIQUE', 'HERNANDEZ', '88265525', '$2a$10$OJofe5/7rxlcsLNs9QR3mudSh87Dl59xE2H3rErQir36Q/VbwK9QO', 0, 1, NULL, 'user', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "user_permission"
--

CREATE TABLE "user_permission" (
  "id" int(11) NOT NULL,
  "userId" int(11) NOT NULL,
  "fecha_permiso" datetime(3) NOT NULL,
  "permissionId" varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "user_permission"
--

INSERT INTO "user_permission" ("id", "userId", "fecha_permiso", "permissionId") VALUES
(1, 1, '2025-10-21 00:00:00.000', 'USUARIOS-I'),
(2, 2, '2025-10-21 00:00:00.000', 'USUARIOS-I'),
(3, 2, '2025-10-22 12:00:29.675', 'TIPO_EQUIPO-A'),
(4, 1, '2025-10-22 12:00:44.582', 'TIPO_EQUIPO-A'),
(5, 2, '2025-10-22 15:51:29.182', 'TIPO_EQUIPO-I'),
(6, 2, '2025-10-23 02:09:52.372', 'USUARIOS-A'),
(7, 2, '2025-10-23 02:09:56.722', 'USUARIOS-B'),
(8, 2, '2025-10-23 02:10:00.787', 'USUARIOS-M'),
(9, 2, '2025-10-23 02:12:43.712', 'TIPO_EQUIPO-M'),
(10, 2, '2025-10-23 03:37:00.009', 'TIPO_ACTIVO-A'),
(11, 2, '2025-10-23 03:37:02.885', 'TIPO_ACTIVO-B'),
(12, 2, '2025-10-23 03:37:05.752', 'TIPO_ACTIVO-i'),
(13, 2, '2025-10-23 03:37:11.375', 'TIPO_ACTIVO-M'),
(14, 3, '2025-10-27 23:26:59.076', 'TIPO_ACTIVO-A'),
(15, 3, '2025-10-27 23:27:00.447', 'TIPO_ACTIVO-B'),
(16, 3, '2025-10-27 23:27:01.952', 'TIPO_ACTIVO-i'),
(17, 3, '2025-10-27 23:27:02.676', 'TIPO_ACTIVO-M'),
(18, 3, '2025-10-27 23:27:03.913', 'TIPO_EQUIPO-A'),
(19, 3, '2025-10-27 23:27:05.322', 'TIPO_EQUIPO-I'),
(20, 3, '2025-10-27 23:27:06.494', 'TIPO_EQUIPO-M'),
(21, 3, '2025-10-27 23:27:07.580', 'USUARIOS-A'),
(22, 3, '2025-10-27 23:27:08.611', 'USUARIOS-B'),
(23, 3, '2025-10-27 23:27:10.769', 'USUARIOS-I'),
(24, 3, '2025-10-27 23:27:13.941', 'USUARIOS-M');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "_activotoprograma"
--

CREATE TABLE "_activotoprograma" (
  "A" int(11) NOT NULL,
  "B" int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla "_prisma_migrations"
--

CREATE TABLE "_prisma_migrations" (
  "id" varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  "checksum" varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  "finished_at" datetime(3) DEFAULT NULL,
  "migration_name" varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  "logs" text COLLATE utf8mb4_unicode_ci,
  "rolled_back_at" datetime(3) DEFAULT NULL,
  "started_at" datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  "applied_steps_count" int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla "_prisma_migrations"
--

INSERT INTO "_prisma_migrations" ("id", "checksum", "finished_at", "migration_name", "logs", "rolled_back_at", "started_at", "applied_steps_count") VALUES
('09c78ba0-381d-4584-85dc-ca6d15233b7a', '46adc1570a7bee947e15f9cf9028369e287220ae30d2b0c0ccd9669586f33c5b', '2025-10-28 03:49:39.410', '20251023144103_update', NULL, NULL, '2025-10-28 03:49:39.393', 1),
('12e4450c-580b-48ac-a93b-a479e5ab97fc', 'c5dc83f4c8f292c0f4990f9aa74a292e23b0f6a44efc406589efb2b25ba5cbb8', '2025-10-28 03:49:39.207', '20251023140145_update', NULL, NULL, '2025-10-28 03:49:38.853', 1),
('14236ddc-5864-4771-9010-79abbea7241c', '46adc1570a7bee947e15f9cf9028369e287220ae30d2b0c0ccd9669586f33c5b', '2025-10-28 03:49:40.713', '20251026133104_update', NULL, NULL, '2025-10-28 03:49:40.696', 1),
('1c4f6e93-8c39-4c64-94f9-697713537035', '88a8b3e2c0b8096088846a222c13c311c698617386133db7b90c4f18eedcdf1b', '2025-10-28 03:49:40.604', '20251026125127_update', NULL, NULL, '2025-10-28 03:49:40.418', 1),
('1faa3aa3-6980-41b8-95f8-832475c9abc1', '9a894957c01dc3ead888795ee07f59c982586819337f9187ddfa0efb3bbe37db', '2025-10-28 03:49:39.988', '20251023183251_update', NULL, NULL, '2025-10-28 03:49:39.523', 1),
('326371d8-dc90-4a17-9058-803b1e9fecd4', '48bb57df40aad27a1ac1a8ac26404f005fd13017976e9fd86e2b6ed3d05e38a2', '2025-10-28 03:49:39.522', '20251023160012_update', NULL, NULL, '2025-10-28 03:49:39.413', 1),
('49701f05-af30-42eb-a8e4-776b97f13bd0', '8b88f03b213e20e291a65860656f9b5045f3d3eba04e7230e6660f6143372c41', '2025-10-28 03:49:38.588', '20251022023019_update', NULL, NULL, '2025-10-28 03:49:37.254', 1),
('9bf5025f-8cf0-422e-a910-ac646fa5f5d5', 'ec0910e7fc3f0596a46ec673eaa694bd1ec4162f46850f48c6d3f2e26523fcc0', '2025-10-28 11:34:04.576', '20251028113404_update', NULL, NULL, '2025-10-28 11:34:04.421', 1),
('9c4e0312-05cd-4e9a-b2fb-de26bb142ccf', '46adc1570a7bee947e15f9cf9028369e287220ae30d2b0c0ccd9669586f33c5b', '2025-10-28 03:49:50.087', '20251028034950_update', NULL, NULL, '2025-10-28 03:49:50.062', 1),
('a37bd3b5-2be4-4ce7-b927-b22d45c43e6b', '937718811a185a10714da47e8ef5e8f7b370db4ecabf1c0ed1fb1ad9e1e87dc5', '2025-10-28 03:54:04.232', '20251028035404_update', NULL, NULL, '2025-10-28 03:54:04.047', 1),
('a811380f-78d6-4a95-ae09-099cd4a0071e', '46adc1570a7bee947e15f9cf9028369e287220ae30d2b0c0ccd9669586f33c5b', '2025-10-28 03:49:40.417', '20251026124810_update', NULL, NULL, '2025-10-28 03:49:40.398', 1),
('bf92c972-72b9-4b3b-9e11-f0fabc31a58d', '1504d7d73c5ca9e67d18b02cbd0cc93858fb7684ed1f85e65da8c612d186ec74', '2025-10-28 03:49:39.303', '20251023141558_update', NULL, NULL, '2025-10-28 03:49:39.209', 1),
('c5400261-e81b-4bff-b062-6a30bb98a5a8', '3b97e5dab74507cfbe45b092d098c35522d8f229897db549a3df2b74efe609e1', '2025-10-28 03:49:38.849', '20251022031329_update', NULL, NULL, '2025-10-28 03:49:38.590', 1),
('c9dcc389-d49b-4175-bcf5-6ab8da6cd7bd', '7832bf28a11643db5a9d63adfc9dc864ce11dc2a9406366fa38b9160715910b0', '2025-10-28 03:49:40.695', '20251026132106_update', NULL, NULL, '2025-10-28 03:49:40.605', 1),
('cbee4aa1-12d1-421d-b462-0aab9b0b4c95', '4bc839e543c9849b50b52468249eb53738804d916d5039df12c05f32ef852cb1', '2025-10-28 03:49:40.186', '20251023214920_update', NULL, NULL, '2025-10-28 03:49:39.990', 1),
('ef1a3502-fcd3-473c-83a9-34d62ce8b909', '7eff8aaeaaa7279a21aee7d86ddbc65e7998665481a62bb33a196fb5f62d28ba', '2025-10-28 03:49:39.391', '20251023143013_update', NULL, NULL, '2025-10-28 03:49:39.306', 1),
('ef803035-a0a5-411d-8677-27c61c3d4b2e', '470147453ac17db753b8f0ca8ec9e0044edeced1a71305d1ad8ab7716aa12e28', '2025-10-28 03:49:40.374', '20251024073301_update', NULL, NULL, '2025-10-28 03:49:40.188', 1),
('f5154440-f238-4a77-93a1-4e6e4474c23f', '46adc1570a7bee947e15f9cf9028369e287220ae30d2b0c0ccd9669586f33c5b', '2025-10-28 03:49:40.397', '20251024092602_update', NULL, NULL, '2025-10-28 03:49:40.376', 1),
('ffcbc59a-841a-489d-8eb0-57168f4c81b6', '0705bb1b5af1391df57efed7d9327264840959267acc6642ab62542051c2f358', '2025-10-28 03:49:41.455', '20251028034800_update', NULL, NULL, '2025-10-28 03:49:40.714', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla "activo"
--
ALTER TABLE "activo"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Activo_COD_ACTIVO_key" ("COD_ACTIVO"),
  ADD KEY "Activo_categoria_activoId_fkey" ("categoria_activoId"),
  ADD KEY "Activo_tipo_activoId_fkey" ("tipo_activoId"),
  ADD KEY "Activo_tipo_equipoId_fkey" ("tipo_equipoId");

--
-- Indices de la tabla "activoimage"
--
ALTER TABLE "activoimage"
  ADD PRIMARY KEY ("id"),
  ADD KEY "ActivoImage_activoId_fkey" ("activoId");

--
-- Indices de la tabla "activo_asignacion"
--
ALTER TABLE "activo_asignacion"
  ADD PRIMARY KEY ("id"),
  ADD KEY "Activo_asignacion_tipo_asignacionId_fkey" ("tipo_asignacionId"),
  ADD KEY "Activo_asignacion_ubicacionId_fkey" ("ubicacionId"),
  ADD KEY "Activo_asignacion_sucursalId_fkey" ("sucursalId"),
  ADD KEY "Activo_asignacion_areaId_fkey" ("areaId"),
  ADD KEY "Activo_asignacion_activoId_fkey" ("activoId"),
  ADD KEY "Activo_asignacion_responsableId_fkey" ("responsableId");

--
-- Indices de la tabla "area"
--
ALTER TABLE "area"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Area_COD_AREA_key" ("COD_AREA");

--
-- Indices de la tabla "cargo"
--
ALTER TABLE "cargo"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Cargo_COD_CARGO_key" ("COD_CARGO");

--
-- Indices de la tabla "categoria_activo"
--
ALTER TABLE "categoria_activo"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Categoria_activo_COD_CATEGORIA_ACTIVO_key" ("COD_CATEGORIA_ACTIVO");

--
-- Indices de la tabla "category"
--
ALTER TABLE "category"
  ADD PRIMARY KEY ("id");

--
-- Indices de la tabla "estadoticket"
--
ALTER TABLE "estadoticket"
  ADD PRIMARY KEY ("id");

--
-- Indices de la tabla "marca"
--
ALTER TABLE "marca"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Marca_COD_MARCA_key" ("COD_MARCA");

--
-- Indices de la tabla "permission"
--
ALTER TABLE "permission"
  ADD PRIMARY KEY ("id");

--
-- Indices de la tabla "post"
--
ALTER TABLE "post"
  ADD PRIMARY KEY ("id"),
  ADD KEY "Post_authorId_fkey" ("authorId");

--
-- Indices de la tabla "prioridad"
--
ALTER TABLE "prioridad"
  ADD PRIMARY KEY ("id");

--
-- Indices de la tabla "product"
--
ALTER TABLE "product"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "product_ref_key" ("ref"),
  ADD KEY "product_categoryId_fkey" ("categoryId");

--
-- Indices de la tabla "productimage"
--
ALTER TABLE "productimage"
  ADD PRIMARY KEY ("id"),
  ADD KEY "ProductImage_productId_idx" ("productId");

--
-- Indices de la tabla "programa"
--
ALTER TABLE "programa"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Programa_COD_PROGRAMA_key" ("COD_PROGRAMA");

--
-- Indices de la tabla "reg_eventos"
--
ALTER TABLE "reg_eventos"
  ADD PRIMARY KEY ("id");

--
-- Indices de la tabla "role"
--
ALTER TABLE "role"
  ADD PRIMARY KEY ("role"),
  ADD UNIQUE KEY "Role_name_key" ("name");

--
-- Indices de la tabla "sistema_operativo"
--
ALTER TABLE "sistema_operativo"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Sistema_operativo_COD_SISTEMA_OPERATIVO_key" ("COD_SISTEMA_OPERATIVO");

--
-- Indices de la tabla "sucursal"
--
ALTER TABLE "sucursal"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Sucursal_COD_SUCURSAL_key" ("COD_SUCURSAL");

--
-- Indices de la tabla "ticket"
--
ALTER TABLE "ticket"
  ADD PRIMARY KEY ("id"),
  ADD KEY "Ticket_usuarioId_fkey" ("usuarioId"),
  ADD KEY "Ticket_activoId_fkey" ("activoId"),
  ADD KEY "Ticket_prioridadId_fkey" ("prioridadId"),
  ADD KEY "Ticket_areaId_fkey" ("areaId"),
  ADD KEY "Ticket_sucursalId_fkey" ("sucursalId"),
  ADD KEY "Ticket_ubicacionId_fkey" ("ubicacionId"),
  ADD KEY "Ticket_agenteId_fkey" ("agenteId"),
  ADD KEY "Ticket_estadoTicketId_fkey" ("estadoTicketId");

--
-- Indices de la tabla "ticketimage"
--
ALTER TABLE "ticketimage"
  ADD PRIMARY KEY ("id"),
  ADD KEY "TicketImage_ticketId_fkey" ("ticketId");

--
-- Indices de la tabla "tipo_activo"
--
ALTER TABLE "tipo_activo"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Tipo_activo_COD_TIPO_ACTIVO_key" ("COD_TIPO_ACTIVO");

--
-- Indices de la tabla "tipo_asignacion"
--
ALTER TABLE "tipo_asignacion"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Tipo_asignacion_COD_TIPO_ASIGNACION_key" ("COD_TIPO_ASIGNACION");

--
-- Indices de la tabla "tipo_equipo"
--
ALTER TABLE "tipo_equipo"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Tipo_equipo_COD_TIPO_EQUIPO_key" ("COD_TIPO_EQUIPO");

--
-- Indices de la tabla "todo"
--
ALTER TABLE "todo"
  ADD PRIMARY KEY ("id");

--
-- Indices de la tabla "ubicacion"
--
ALTER TABLE "ubicacion"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "Ubicacion_COD_UBICACION_key" ("COD_UBICACION");

--
-- Indices de la tabla "user"
--
ALTER TABLE "user"
  ADD PRIMARY KEY ("id"),
  ADD UNIQUE KEY "User_CODIGO_key" ("CODIGO"),
  ADD KEY "User_cargoId_fkey" ("cargoId");

--
-- Indices de la tabla "user_permission"
--
ALTER TABLE "user_permission"
  ADD PRIMARY KEY ("id"),
  ADD KEY "User_permission_userId_fkey" ("userId"),
  ADD KEY "User_permission_permissionId_fkey" ("permissionId");

--
-- Indices de la tabla "_activotoprograma"
--
ALTER TABLE "_activotoprograma"
  ADD UNIQUE KEY "_ActivoToPrograma_AB_unique" ("A","B"),
  ADD KEY "_ActivoToPrograma_B_index" ("B");

--
-- Indices de la tabla "_prisma_migrations"
--
ALTER TABLE "_prisma_migrations"
  ADD PRIMARY KEY ("id");

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla "activo"
--
ALTER TABLE "activo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla "activoimage"
--
ALTER TABLE "activoimage"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT de la tabla "activo_asignacion"
--
ALTER TABLE "activo_asignacion"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "area"
--
ALTER TABLE "area"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla "cargo"
--
ALTER TABLE "cargo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT de la tabla "categoria_activo"
--
ALTER TABLE "categoria_activo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla "estadoticket"
--
ALTER TABLE "estadoticket"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla "marca"
--
ALTER TABLE "marca"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "post"
--
ALTER TABLE "post"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "prioridad"
--
ALTER TABLE "prioridad"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla "product"
--
ALTER TABLE "product"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "productimage"
--
ALTER TABLE "productimage"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "programa"
--
ALTER TABLE "programa"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "reg_eventos"
--
ALTER TABLE "reg_eventos"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "sistema_operativo"
--
ALTER TABLE "sistema_operativo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "sucursal"
--
ALTER TABLE "sucursal"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla "ticket"
--
ALTER TABLE "ticket"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla "ticketimage"
--
ALTER TABLE "ticketimage"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "tipo_activo"
--
ALTER TABLE "tipo_activo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla "tipo_asignacion"
--
ALTER TABLE "tipo_asignacion"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla "tipo_equipo"
--
ALTER TABLE "tipo_equipo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla "todo"
--
ALTER TABLE "todo"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla "ubicacion"
--
ALTER TABLE "ubicacion"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla "user"
--
ALTER TABLE "user"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla "user_permission"
--
ALTER TABLE "user_permission"
  MODIFY "id" int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla "activo"
--
ALTER TABLE "activo"
  ADD CONSTRAINT "Activo_categoria_activoId_fkey" FOREIGN KEY ("categoria_activoId") REFERENCES "categoria_activo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_tipo_activoId_fkey" FOREIGN KEY ("tipo_activoId") REFERENCES "tipo_activo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_tipo_equipoId_fkey" FOREIGN KEY ("tipo_equipoId") REFERENCES "tipo_equipo" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla "activoimage"
--
ALTER TABLE "activoimage"
  ADD CONSTRAINT "ActivoImage_activoId_fkey" FOREIGN KEY ("activoId") REFERENCES "activo" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla "activo_asignacion"
--
ALTER TABLE "activo_asignacion"
  ADD CONSTRAINT "Activo_asignacion_activoId_fkey" FOREIGN KEY ("activoId") REFERENCES "activo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_asignacion_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "area" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_asignacion_responsableId_fkey" FOREIGN KEY ("responsableId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_asignacion_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "sucursal" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_asignacion_tipo_asignacionId_fkey" FOREIGN KEY ("tipo_asignacionId") REFERENCES "tipo_asignacion" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Activo_asignacion_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "ubicacion" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla "post"
--
ALTER TABLE "post"
  ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user" ("id") ON UPDATE CASCADE;

--
-- Filtros para la tabla "product"
--
ALTER TABLE "product"
  ADD CONSTRAINT "product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON UPDATE CASCADE;

--
-- Filtros para la tabla "productimage"
--
ALTER TABLE "productimage"
  ADD CONSTRAINT "ProductImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product" ("id") ON UPDATE CASCADE;

--
-- Filtros para la tabla "ticket"
--
ALTER TABLE "ticket"
  ADD CONSTRAINT "Ticket_activoId_fkey" FOREIGN KEY ("activoId") REFERENCES "activo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_agenteId_fkey" FOREIGN KEY ("agenteId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "area" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_estadoTicketId_fkey" FOREIGN KEY ("estadoTicketId") REFERENCES "estadoticket" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_prioridadId_fkey" FOREIGN KEY ("prioridadId") REFERENCES "prioridad" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "sucursal" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "ubicacion" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "Ticket_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla "ticketimage"
--
ALTER TABLE "ticketimage"
  ADD CONSTRAINT "TicketImage_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla "user"
--
ALTER TABLE "user"
  ADD CONSTRAINT "User_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargo" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla "user_permission"
--
ALTER TABLE "user_permission"
  ADD CONSTRAINT "User_permission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permission" ("id") ON UPDATE CASCADE,
  ADD CONSTRAINT "User_permission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON UPDATE CASCADE;

--
-- Filtros para la tabla "_activotoprograma"
--
ALTER TABLE "_activotoprograma"
  ADD CONSTRAINT "_ActivoToPrograma_A_fkey" FOREIGN KEY ("A") REFERENCES "activo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT "_ActivoToPrograma_B_fkey" FOREIGN KEY ("B") REFERENCES "programa" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


INSERT INTO "ticket_tipo" ("id", "COD_TICKET_TIPO", "detalle") VALUES
(1, '01', 'SUMINISTRO'),
(2, '02', 'MTTO PREVENTIVO'),
(3, '03', 'MTTO CORRECTIVO');


INSERT INTO "Prioridad" ("id", "detalle") VALUES
(1, 'Alta'),
(2, 'Media'),
(3, 'Baja');


INSERT INTO "Tipo_asignacion" ("id", "COD_TIPO_ASIGNACION", "detalle") VALUES
(1, '01', 'ENTREGA DE EQUIPOS'),
(2, '02', 'DEVOLUCION DE EQUIPOS'),
(3, '03', 'BAJA DE EQUIPOS');
