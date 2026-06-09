// Based on Express + MariaDB setup pattern from tutorial, adapted for project architecture
// https://www.youtube.com/watch?v=Hej48pi_lOc 
//Bruk av KI til kommentarene og matte formler (/stats)

// =========================
// SERVER SETUP
// =========================
require("dotenv").config();

const express = require("express");
const path = require("path");
const mariadb = require("mariadb");

const app = express();
app.use(express.json());
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

// =========================
// CREATE BOOK REVIEW
// =========================
app.post("/books", async (req, res) => {
    let conn;

    try {
        const { title, author, status, rating, review } = req.body;

        conn = await pool.getConnection();

        await conn.query(
            `INSERT INTO books (title, author, status, rating, review)
             VALUES (?, ?, ?, ?, ?)`,
            [title, author, status, rating, review]
        );

        res.status(201).json({ message: "Book created" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });

    } finally {
        if (conn) conn.release();
    }
});

// =========================
// READ BOOK REVIEW
// =========================
app.get("/books", async (req, res) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const books = await conn.query(`
            SELECT id, title, author, status
            FROM books
            ORDER BY created_at DESC
        `);

        res.json(books);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Database error"
        });

    } finally {
        if (conn) conn.release();
    }
});

// =========================
// SUMMARY FOR BOOK STATUS
// =========================
app.get("/stats", async (req, res) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const total = await conn.query(
            "SELECT COUNT(*) AS count FROM books"
        );

        const reading = await conn.query(
            "SELECT COUNT(*) AS count FROM books WHERE status = 'reading'"
        );

        const finished = await conn.query(
            "SELECT COUNT(*) AS count FROM books WHERE status = 'finished'"
        );

        const avgRating = await conn.query(
            `SELECT AVG(rating) AS avg
             FROM books
             WHERE status = 'finished' AND rating IS NOT NULL`
        );

        res.json({
            total: Number(total[0].count),
            reading: Number(reading[0].count),
            finished: Number(finished[0].count),
            averageRating: avgRating[0].avg
                ? Number(avgRating[0].avg).toFixed(1)
                : "0.0"
        });

    } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
    } finally {
            if (conn) conn.release();
        }
    });

// =========================
// LAST ADDED BOOKS
// =========================
    app.get("/recent-books", async (req, res) => {
    let conn;

    try {
        conn = await pool.getConnection();

        const books = await conn.query(`
            SELECT title, author, status, created_at
            FROM books
            ORDER BY created_at DESC
            LIMIT 3
        `);

        res.json(books);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });

    } finally {
        if (conn) conn.release();
    }
});

// =========================
// UPDATE BOOKS
// =========================
    app.patch("/books/:id", async (req, res) => {
        let conn;

        try {
            const id = req.params.id;
            const { title, author, status, rating, review } = req.body;

            conn = await pool.getConnection();

            await conn.query(
                `UPDATE books
                SET title = ?,
                    author = ?,
                    status = ?,
                    rating = ?,
                    review = ?
                WHERE id = ?`,
                [title, author, status, rating, review, id]
            );

            res.json({ message: "Updated" });

        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });

        } finally {
            if (conn) conn.release();
        }
    });

// =========================
// DELETE BOOKS
// =========================
    app.delete("/books/:id", async (req, res) => {

        let conn;

        try {

            conn = await pool.getConnection();

            await conn.query(
                "DELETE FROM books WHERE id = ?",
                [req.params.id]
            );

            res.json({
                message: "Book deleted"
            });

        } catch (err) {

            console.error(err);

            res.status(500).json({
                error: "Database error"
            });

        } finally {

            if (conn) conn.release();

        }

    });

// =========================
// START SERVER
// =========================
app.listen(3007, () => {
    console.log("Server running on http://localhost:3007");
});