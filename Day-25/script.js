// Fake Database
let products = [
    { name: "Laptop", category: "Electronics", price: 800, stock: 5, featured: false },
    { name: "Phone", category: "Electronics", price: 600, stock: 0, featured: false },
    { name: "Shoes", category: "Fashion", price: 200, stock: 10, featured: false },
    { name: "TV", category: "Electronics", price: 1200, stock: 3, featured: false },
    { name: "Watch", category: "Fashion", price: 700, stock: 0, featured: false }
];

function displayProducts() {
    const output = document.getElementById("output");
    output.innerHTML = "";

    products.forEach(p => {
        output.innerHTML += `
            <div class="product">
                <strong>${p.name}</strong> |
                Category: ${p.category} |
                Price: ${p.price} |
                Stock: ${p.stock} |
                Featured: ${p.featured}
            </div>
        `;
    });
}

// 🔹 Increase Electronics price by +10
function increaseElectronics() {
    products.forEach(p => {
        if (p.category === "Electronics") {
            p.price += 10;
        }
    });
    displayProducts();
}

// 🔹 Set featured true where price > 500
function setFeatured() {
    products.forEach(p => {
        if (p.price > 500) {
            p.featured = true;
        }
    });
    displayProducts();
}

// 🔹 Delete stock = 0
function deleteStockZero() {
    products = products.filter(p => p.stock !== 0);
    displayProducts();
}

// 🔹 Count products
function countProducts() {
    alert("Total Products: " + products.length);
}

// Initial display
displayProducts();