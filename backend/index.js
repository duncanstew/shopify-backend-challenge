const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo
app.get("/items", async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM items");
        console.log("/items GET")
        res.json(response.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/items/:id", async (req, res) => {
    console.log("/items DELETE", req.params.id)
    try {
        const response = await pool.query("DELETE FROM items WHERE id = $1", [
            req.params.id
        ]);
        res.json(response.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/items", async (req, res) => {
    console.log("/items POST", req.body)
  try {
    const { name,quantity,price,warehouse } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO items (name,quantity,price,fk_warehouse) VALUES($1,$2,$3, $4) RETURNING *",
      [name,quantity,price,warehouse]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/warehouses", async (req, res) => {
    console.log("get /warehouses")
    try {
        const response = await pool.query("SELECT * FROM warehouses");
        console.log("/items GET")
        res.json(response.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/warehouses/:id", async (req, res) => {
    
    console.log("/warehouses DELETE", req.params.id)
    try {
        const response = await pool.query("DELETE FROM warehouses WHERE id = $1", [
            req.params.id
        ]);
        res.json(response.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/warehouses", async (req, res) => {
    console.log("post /warehouses")
  try {
    const { name,city,state } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO warehouses (name,city,state) VALUES($1,$2,$3) RETURNING *",
      [name,city,state]
    );

    res.json(newTodo.rows[0]);
    console.log(newTodo.rows[0])
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5001, () => {
    console.log("server has started on port 5001");
  });