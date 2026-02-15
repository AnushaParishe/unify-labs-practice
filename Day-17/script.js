function processData() {

  const students = [
    { name: "Anu", marks: 85, course: "AIML" },
    { name: "Ravi", marks: 72, course: "CSE" },
    { name: "Meena", marks: 90, course: "AIML" },
    { name: "Kiran", marks: 60, course: "ECE" }
  ];

  const newStudent = { name: "Sita", marks: 88, course: "CSE" };
  const updatedStudents = [...students, newStudent];

  const aimlStudents = updatedStudents.filter(student => student.course === "AIML");

  const nameList = updatedStudents.map(student => student.name);

  const totalMarks = updatedStudents.reduce((total, student) => total + student.marks, 0);

  let studentDetails = "";
  for (const student of updatedStudents) {
    const { name, marks, course } = student;
    studentDetails += `Name: ${name}, Marks: ${marks}, Course: ${course} <br>`;
  }

  function average(...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  }

  const avgMarks = average(...updatedStudents.map(s => s.marks));

  document.getElementById("output").innerHTML = `
    <strong>All Students:</strong><br>
    ${studentDetails}
    <br>
    <strong>AIML Students (filter):</strong> ${aimlStudents.map(s => s.name).join(", ")}<br>
    <strong>Student Names (map):</strong> ${nameList.join(", ")}<br>
    <strong>Total Marks (reduce):</strong> ${totalMarks}<br>
    <strong>Average Marks (rest + spread):</strong> ${avgMarks.toFixed(2)}
  `;
}