const form = document.getElementById("internForm");
const internList = document.getElementById("internList");

function loadInterns() {
    const interns = JSON.parse(localStorage.getItem("interns")) || [];
    internList.innerHTML = "";

    interns.forEach(intern => {
        const li = document.createElement("li");
        li.textContent = `${intern.name} - ${intern.role} (${intern.joinedDate})`;
        internList.appendChild(li);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const intern = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        joinedDate: document.getElementById("joinedDate").value
    };

    const interns = JSON.parse(localStorage.getItem("interns")) || [];
    interns.push(intern);

    localStorage.setItem("interns", JSON.stringify(interns));

    form.reset();
    loadInterns();
});

loadInterns();