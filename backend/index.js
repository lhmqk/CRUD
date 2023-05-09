import express from "express";
import mysql2 from "mysql2";

const app = express();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "TueVan191105",
  database: "crud",
});

app.get("/", (req, res) => {
  res.json("Hello this is Backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to Backend!");
});
