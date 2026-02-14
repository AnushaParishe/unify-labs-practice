function runProgram() {

    let age = prompt("Enter your age");
    let marks = prompt("Enter your marks");
    let day = prompt("Enter a day (1-3)");

    age = Number(age);
    marks = Number(marks);

    let eligible = age >= 18 && marks >= 50;

    if (eligible) {
        alert("You are eligible");
    } else {
        alert("You are not eligible");
    }

    let dayName;

    switch(day) {
        case "1":
            dayName = "Monday";
            break;
        case "2":
            dayName = "Tuesday";
            break;
        case "3":
            dayName = "Wednesday";
            break;
        default:
            dayName = "Invalid Day";
    }

    let loopResult = "";

    for (let i = 1; i <= 5; i++) {
        loopResult += "Loop Number: " + i + "<br>";
    }

    let nestedResult = "<br>Nested Loop Pattern:<br>";

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= i; j++) {
            nestedResult += "* ";
        }
        nestedResult += "<br>";
    }

    document.getElementById("output").innerHTML =
        "Day Selected: " + dayName + "<br><br>" +
        loopResult +
        nestedResult;
}