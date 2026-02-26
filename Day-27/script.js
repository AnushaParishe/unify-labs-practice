let products = JSON.parse(localStorage.getItem("products")) || [];

function saveToStorage() {
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}

function generateId() {
    return Date.now().toString();
}

function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    const newProduct = {
        id: generateId(),
        name,
        price,
        stock
    };

    products.push(newProduct);
    saveToStorage();
}

function updateStock() {
    const id = document.getElementById("updateId").value;
    const newStock = document.getElementById("newStock").value;

    products = products.map(product => {
        if (product.id === id) {
            product.stock = newStock;  // Only stock updated
        }
        return product;
    });

    saveToStorage();
}

function deleteProduct() {
    const id = document.getElementById("deleteId").value;
    products = products.filter(product => product.id !== id);
    saveToStorage();
}

function displayProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = 
            `ID: ${product.id} | ${product.name} | ₹${product.price} | Stock: ${product.stock}`;
        list.appendChild(li);
    });
}

displayProducts();