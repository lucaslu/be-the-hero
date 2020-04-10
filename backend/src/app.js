const express = require("express");
const cors = require("cors");
const { errors } = require('celebrate')
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app
/*
 * Rota / Recursos
 *
 * GET: Buscar/listar informacao do backend
 * POST: Criar uma informacao
 * PUT: Alterar uma informacao
 * DELETE: Deletar uma informacao
 *
 * Tipos de parametros:
 * Query params: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route params: utilizados para identificar recursos ":id"
 * Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
 *
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB,
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 *
 */
