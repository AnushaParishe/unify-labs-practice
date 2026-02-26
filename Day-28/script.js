const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json()); // JSON Middleware

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function startServer() {
    try {
        await client.connect();
        console.log("Database connected successfully");

        db = client.db("productDB");

        // POST - Add Product
        app.post("/products", async (req, res) => {
            const { name, price, stock } = req.body;

            const result = await db.collection("products").insertOne({
                name,
                price,
                stock
            });

            res.json(result);
        });

        // PATCH - Update Only Stock
        app.patch("/products/:id", async (req, res) => {
            const { stock } = req.body;

            const result = await db.collection("products").updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: { stock: stock } }
            );

            res.json(result);
        });

        // DELETE - Remove By ID
        app.delete("/products/:id", async (req, res) => {
            const result = await db.collection("products").deleteOne({
                _id: new ObjectId(req.params.id)
            });

            res.json(result);
        });

        app.listen(5000, () => {
            console.log("Server running on http://localhost:5000");
        });

    } catch (error) {
        console.error(error);
    }
}

startServer();