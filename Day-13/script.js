function showResult() {

    let name = "Anu";
    let age = 20;
    let isStudent = true;

    let nextYearAge = age + 1;
    let isAdult = age >= 18;
    let result = isStudent && isAdult;

    document.getElementById("output").innerHTML =
        "Name: " + name + "<br>" +
        "Age Next Year: " + nextYearAge + "<br>" +
        "Is Adult: " + isAdult + "<br>" +
        "Student AND Adult: " + result;
}