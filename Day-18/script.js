function runDemo() {

  let primitive = "AIML";
  let objectExample = { course: "AIML" };

  let student = {
    name: "Anu",
    marks: 85,
    course: "AIML",

    greet: function () {
      return `Hello, I am ${this.name} from ${this.course}`;
    }
  };

  let sealedStudent = Object.seal({ id: 101, branch: "CSE" });
  sealedStudent.branch = "AIML";

  let frozenStudent = Object.freeze({ id: 102, branch: "ECE" });
  frozenStudent.branch = "CSE";

  let keys = Object.keys(student);
  let values = Object.values(student);
  let entries = Object.entries(student);

  let iterationResult = "";
  for (let key in student) {
    iterationResult += `${key} : ${student[key]} <br>`;
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this._age = age;
    }

    get age() {
      return this._age;
    }

    set age(newAge) {
      if (newAge > 0) {
        this._age = newAge;
      }
    }

    introduce() {
      return `Hi, I'm ${this.name} and I am ${this._age} years old.`;
    }
  }

  const person1 = new Person("Anu", 20);
  person1.age = 21;

  document.getElementById("output").innerHTML = `
    <strong>Objects vs Primitives:</strong><br>
    Primitive: ${primitive}<br>
    Object: ${objectExample.course}<br><br>

    <strong>Object Method:</strong><br>
    ${student.greet()}<br><br>

    <strong>Sealed Object (modified property allowed):</strong><br>
    ${sealedStudent.branch}<br><br>

    <strong>Frozen Object (modification not allowed):</strong><br>
    ${frozenStudent.branch}<br><br>

    <strong>Object.keys():</strong> ${keys.join(", ")}<br>
    <strong>Object.values():</strong> ${values.join(", ")}<br>
    <strong>Object.entries():</strong> ${entries.map(e => e.join(": ")).join(" | ")}<br><br>

    <strong>for...in Iteration:</strong><br>
    ${iterationResult}<br>

    <strong>ES6 Class + Getter & Setter:</strong><br>
    ${person1.introduce()}
  `;
}