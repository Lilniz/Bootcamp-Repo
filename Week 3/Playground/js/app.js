// Comments. JS is found within the console under inspect element.
// Console log is a way to show your JS in the inspect element to see what you can .

console.log("Hey, I am now running some Javascript in a separate file!");
console.log("The next line down!");

// Setting a variable. Bad practice to not also set a variable for studentAge.
// Use your var (variable) in front of each own variable.
var studentName;

// You can create multiple varaibles on a single var.
var studentDetails;
studentDetails = "Lee", Age = 30, "Ice cream"

studentName= "Lee";
var studentAge= 45;

console.log(studentName);
console.log(studentAge);

// Best practice to space your stuff out. Helps visibility.
// Space between quotations helps combine into a statement/sentence.
console.log(studentName + " is " + 1000 + studentAge)

// Add parenthesis around like-elements to combine them.
console.log(studentName + " is " + (1000 + studentAge))

console.log(studentAge + studentAge)

// String begins with numbers so it will automatically combine them.
console.log(1000 + studentAge)

// JS accounts for extra spaces within quotations as white space, regardless of what's inside.
console.log(studentName + "  is  " + (1000 + studentAge))

// Something 'not defined' means that variable is not created. JS can be case-sensitive. Inspect can also tell you where the error is!

// If there is an error, it will stop reading the rest of your code. A 'break'.

// String practice.
console.log("My name is " + studentName + " and I am " + studentAge + " years old.")


// These types of values are "primitive" types! Including the above. ^^
var isLeeAwesome = true;
var isJavascriptEasy = false;
// Should show boolean
console.log(typeof isLeeAwesome);

var a =  100;
var b = 50;
var c = 10;
var d = "10";
var e = 50;
var f = 70;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Shows remainder, if any. Otherwise value will be 0.

// Equal signs: 
// 1 is a set. 
// 2 is a comparison of value, not typeof. 
// 3 is a comparison between typeof.
console.log(a === b); //False
console.log(c === d); //False
console.log(c == d); //True
console.log(e === f); //False
// The ! is a contracion, an opposite, a 'not'. So it reverses the outcome.
console.log(e != f); //True
// Other comparisons.
console.log(a < b); //False
console.log(e <= f); //True

var myBoolean = true;
var anotherBoolean = false;
// The || is an "or" statement/check.
console.log(myBoolean || anotherBoolean); //True

var check = myBoolean || anotherBoolean;
console.log(check)

// These are variables with or without true values. What works?
var data = "";
var another = false;
var oneMOre = 0;
var andAgain = undefined;
var oneMoreAgain = null;
var defaultResponse = "Not data could be gathered from the site."; // String with working text is true. Check/Or stops at the first true value.
var somethingElse = true;
var firstName = "Lee";
var check = data || firstName;
console.log(check);

var check = data || defaultResponse || somethingElse;
console.log(check);

var check = data || defaultResponse || somethingElse;
var anotherCheck = 0 || 100;
console.log(anotherCheck);

var anotherCheck = 0 || firstName;
console.log(anotherCheck);

// This evaluates the operands from left to right and returns the first falsy value encountered
var lastCheck = 0 && "Lee"; // 0 is a false value.
console.log(lastCheck)
var lastCheck = 15 && "Lee"; // 15 is a value. Why is 0 a false value? 
                             //In JavaScript “0” is equal to false because “0” is of type string but when it tested for equality the automatic type conversion of JavaScript comes into effect and converts the “0” to its numeric value which is 0 and as we know 0 represents false value. So, “0” equals to false
console.log(lastCheck);

var isDarkMode = false;
var cssStyles = "dark";
var lastCheck = isDarkMode || cssStyles; // Stops at the first truth value.
console.log(lastCheck);
var lastCheck = isDarkMode && cssStyles; // Stops at the first false value.
console.log(lastCheck);

console.log(!isDarkMode); // Using a 'not' so it will be true, when originally it is false.

isDarkMode = !isDarkMode; // New operand for isDarkMode
console.log(isDarkMode); // 'Not', so outcome is true!
console.log(!isDarkMode); // Double 'not', so is false!

var headerEl = document.querySelector('h1');
headerEl.innerText = 'Something Else';
headerEl.style.color = 'red';