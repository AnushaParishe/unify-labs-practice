const title = document.getElementById("mainTitle");
const input = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const changeColorBtn = document.querySelector("#changeColorBtn");
const removeLastBtn = document.querySelector("#removeLastBtn");
const itemList = document.querySelector("#itemList");

addBtn.addEventListener("click", function () {

  const itemText = input.value.trim();
  if (itemText === "") return;

  const li = document.createElement("li");

  li.textContent = itemText;

  li.setAttribute("data-created", "true");

  li.style.fontWeight = "bold";

  itemList.appendChild(li);

  input.value = "";
});

changeColorBtn.addEventListener("click", function () {

  const currentColor = title.getAttribute("data-color");

  if (!currentColor || currentColor === "purple") {
    title.style.color = "green";
    title.setAttribute("data-color", "green");
  } else {
    title.style.color = "purple";
    title.setAttribute("data-color", "purple");
  }
});

removeLastBtn.addEventListener("click", function () {

  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});