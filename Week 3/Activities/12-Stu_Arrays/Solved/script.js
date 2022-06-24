// WRITE YOUR CODE HERE
var studentNames = ["Lee", "Tony", "Andy", "Brandon", "Troy"];
var firstStudent = studentNames[0];

console.log (studentNames);

console.log (studentNames[0]);
console.log (studentNames[1]);
console.log (studentNames[2]);
console.log (studentNames[3]);
console.log (studentNames[4]);

console.log("Welcome to the class", studentNames[0], "!")
console.log("Welcome to the class", studentNames[1], "!")
console.log("Welcome to the class", studentNames[2], "!")
console.log("Welcome to the class", studentNames[3], "!")
console.log("Welcome to the class", studentNames[4], "!")

studentNames[0] = "Mark"

if (studentNames[0] === "Mark") {
    console.log(studentNames[0], "is in the class!")
}

if (firstStudent !== studentNames[0]) {
    console.log(studentNames[0], "is in the class!")
}