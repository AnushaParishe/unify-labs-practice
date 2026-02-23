const productList = document.getElementById("productList");

function bulkInsert() {
    const products = [
        { name: "Laptop", category: "Electronics", price: 75000, stock: 10 },
        { name: "Smartphone", category: "Electronics", price: 40000, stock: 25 },
        { name: "Headphones", category: "Electronics", price: 3000, stock: 50 },
        { name: "T-Shirt", category: "Clothing", price: 1200, stock: 100 },
        { name: "Jeans", category: "Clothing", price: 2500, stock: 60 },
        { name: "Sofa", category: "Furniture", price: 45000, stock: 5 },
        { name: "Dining Table", category: "Furniture", price: 30000, stock: 8 }
    ];

    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products);
}

function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} | ${product.category} | ₹${product.price} | Stock: ${product.stock}`;
        productList.appendChild(li);
    });
}

function findElectronics() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const electronics = products.filter(p => p.category === "Electronics");
    displayProducts(electronics);
}

function topTwoExpensive() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const sorted = products
        .sort((a, b) => b.price - a.price)
        .slice(0, 2);
    displayProducts(sorted);
}