let allProducts = [];

let cart = JSON.parse(localStorage.getItem("unify_cart")) || [];

async function loadProducts(){

const response = await fetch("/api/products");

allProducts = await response.json();

displayProducts(allProducts);

}

function displayProducts(products){

const container = document.getElementById("products");

container.innerHTML = "";

products.forEach(product => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${product.name}</h3>
<img src="${product.image}" width="150">
<p>₹${product.price}</p>
<button onclick="addToCart('${product._id}')">Add to Cart</button>
`;

container.appendChild(card);

});

}

function addToCart(id){

const product = allProducts.find(p => p._id === id);

cart.push(product);

saveCart();

updateCartUI();

}

function saveCart(){

localStorage.setItem("unify_cart", JSON.stringify(cart));

}

function updateCartUI(){

const cartDiv = document.getElementById("cart");

cartDiv.innerHTML = "";

cart.forEach(item => {

const p = document.createElement("p");

p.innerText = item.name + " - ₹" + item.price;

cartDiv.appendChild(p);

});

}

loadProducts();
updateCartUI();