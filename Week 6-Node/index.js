// const stuff = {
//     one: 'one',
//     two: 'two'
// };

// const fresh = {...stuff};
// console.log(fresh);

spreadIsFun(5, 'some tring', ['one', 'two', 'three'])
function spreadIsFun(...args) {
    console.log(args[2])
    console.log(args)
};



// function myFunc(one, two, three) {
//     console.log(one);
// }

// myFunc({one: 'one', two: 'two'});


// const user_name='Lee';
// const age = 30;

// console.log('Name is ${user_name} and age is ${age}');

// const data = {
//     name: 'Lee',
//     age: 30,
//     temp: true,
//     hobbies: {
//         ultimate: true,
//         broomball: true,
//     }
// };

// const {name, age, temp, hobbies: broomball} = data
// // const age = data.age;
// console.log(age, broomball);





// const isOldEnough = 'yes';
// // const isOldEnough = false;

// switch (isOldEnough) {
//     case false:
//         console.log("You are not old enough.")
//         break;
//     case true:
//         console.log("You are good to go.")
//     default:
//         console.log("N/A")
// }



// const arg1 = process.argv[2] || 'default value';




// console.log(process.argv, process.argv[2], process.argv[0])


// const fruits = ['apple', 'orange', 'grape', 'kiwi'];

// const filterLoop = fruits.filter((fruit, i) => {
//     if (i > 1) {
//         return fruits;
//     }
// })

// console.log(filterLoop);

// fruits.push('banana');
// console.log(fruits);

// const forEachLoop = fruits.forEach((fruit, i) => {
//     console.log(fruit, i);
// });

// const mapLoop = fruits.map((fruit, i) => {
//     if (fruit === 'appple') {
//     return 'A fruit.';
//     }
// });

// console.log(mapLoop);

// fruits.forEach((fruit, i) => {
//     console.log(fruit, i);
// });

// fruits.forEach((fruit) => {
//     console.log(fruit);
// });

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     if (i === 0) {
//         console.log(fruits[i]);
//         break;
//     }
// }



// console.log(process);

// NODE is part of the JS programming language.
// Scope refers to stuff inside of curly braces.

// for (var i=0; i < 5; i++) {
//     console.log('It works!');
// };

// var myName = 'JD';
// const age = 42;
// const data = ['one', 'two'];
// const user = {
//     name: 'Lee'
// };

// if (true) {
//     let myName = 'Lee';
// };

// for() {
//     var myName = "Lee";
// };

// console.log(myName);


// data = [];

// console.log(user);

// console.log(age);

// console.log(data);
// data.push('three');
// data.pop();

// console.log(data);