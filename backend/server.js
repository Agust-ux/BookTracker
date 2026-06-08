// =========================
// SERVER SETUP
// =========================
const express = require("express");
const path = require("path");
const mariadb = require("mariadb");

const app = express();
app.use(express.json());
require("dotenv").config();
// =========================
// DATABASE POOL
// =========================
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    connectionLimit: 5
});

// =========================
// STATIC FRONTEND
// =========================
app.use(express.static(path.join(__dirname, "../Frontend")));