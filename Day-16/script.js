function generateMessage() {
  let name = document.getElementById("username").value;
  let age = document.getElementById("age").value;

  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  if (name === "" || age === "") {
    document.getElementById("output").innerText = "Please enter valid details.";
    return;
  }

  let message = createUserMessage(name, age);

  document.getElementById("output").innerHTML = message;
}

function createUserMessage(name, age) {
  let category = age >= 18 ? "an Adult" : "a Minor";

  return `
    Hello <span style="color:#4f46e5;">${name}</span> 👋 <br>
    You are <strong>${age}</strong> years old. <br>
    You are classified as <strong>${category}</strong>.
  `;
}