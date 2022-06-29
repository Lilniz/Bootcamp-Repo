
var pizza = "meat lovers"
// console.log(pizza)

var colors = ["red", "blue", "green", "purple"]
// console.log(colors)

// if (colors.length < 2) {
//     console.log("Too short.")
// }   else if (colors.length === 2) {
//     console.log("Equals 2")
// }   else {
//     console.log("Default")
// }

if (colors.length < 2) {
    console.log("Too short.")
}   else if (colors.length === 2) {
    console.log("Equals 2")
}   //else {
//     alert("You did not meet any of these conditions.")
// }

// HOMEWORK HELP
// "if (upper + lower + numeric + spSymbols === 0) {
//     alert('You must have at least one character type selected for your password!')
//   }"

console.log(colors[0])

for (var i = 0; i < colors.length; i ++) {
    console.log(colors[i])
}

console.log("one");
console.log("two");

// function runSomeCode() {
//     console.log("Only run this when I call the function.")
// } 

// runSomeCode ();

// function runSomeCode(){
    // var info = prompt("Give me any word you like");
    // var somethingElse = prompt("One more");
//     var list = [info, somethingElse];
//     return list;
// }

// var data = runSomeCode ();

// console.log(data)


// function printUserInfoToPage(food, age, color, friendsName, firstName) {
//     console.log(firstName);
// }

// function gatherUserInfo() {
    // var firstName= prompt("Please enter your first name")
    // return firstName;
// }

// var usersInfo = gatherUserInfo();

// printUserInfoToPage("something", 10, "blue","Lee", usersInfo); //(a, b, c)



// We don't want to share names across global and scope parameters.
var shadow = "Hi";

function doSomething() {
    var shadow = "Something else";
    
    console.log(shadow);
} 

console.log(shadow);

doSomething(shadow);

var submitBtn = document.querySelector("#submit-btn");



var wrapper = document.querySelector("p")

function changesElementText(isAwesome) {

    if (isAwesome === true) {
        var paragraph = document.querySelector("p");
    }
    console.log(paragraph);
}



var studentsAreAwesome = true;

console.log(studentsAreAwesome)

changesElementText(studentsAreAwesome)

someFunc();

function someFunc() {
    var test = "Test"
    console.log(test)
}


console.log(typeof document)

function someFunc() {
    console.log("Some Func");
}

var myData = {
    firstName: "Lee",
    age: "30",
    printName: function () {
        console.log(myData.age)
    }
};

myData.printName("something happened");

console.log(myData.firstName)

var lastAge = "let"

console.log(lastAge.length)

var tools = ["hammer", "driver", "tango"]
console.log(tools.length)
tools.push("belt") // adds to the end of an array
console.log(tools)
tools.pop() //removes last item in an array
console.log(tools)
tools.shift() // removes first item in an array
tools.unshift()
console.log(typeof tools)

function sum(a,b) {
    return a + b
}

sum(5, 10)

var nums = [5, 10, 3, 20, 1000, 7]
console.log(Math.max(5, 10, 3, 20, 10000, 7))
console.log(nums.sort((a, b) => a - b))

var nuM = 5
var firsty = "Lee"

console.log(firsty.length)

var person = {
    name: "Lee" ,
    age: 30,
    pets: "sad",
    feet: ["left", "right"],
    isTeacher: false,
    information: {
        city: "Winona",
        State: "MN",
        sports: {
            amount: 3,
            types: ["hockey", "ultimate", "football"]
        },
        doSomething: function() {
            console.log(this)
        }
    },
    printAge: function() {
        console.log(this.information.city)
    },
    haveBirthday: function() {
        person.age++
        console.log(person.age)
    } 
}
console.log(person.information.sports.types[1])

person.printAge()

person.information.doSomething()

person.haveBirthday()
person.haveBirthday()

// Arrow functions.. => references the top-level parent. Don't use this for many things yet.