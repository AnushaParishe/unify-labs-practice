const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let products = JSON.parse(fs.readFileSync("products.json"));

app.get("/api/products", (req, res) => {

    const { category, search } = req.query;

    let result = products;

    if (category) {
        result = result.filter(p => p.category === category);
    }

    if (search) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.json(result);

});

app.post("/api/checkout", (req, res) => {

    const { customer, items, total } = req.body;

    const order = {
        customer,
        items,
        total,
        status: "pending",
        createdAt: new Date()
    };

    console.log("New Order:", order);

    res.json({ message: "Order placed successfully" });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});