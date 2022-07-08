// var firstName = prompt('Provide your first name');

// var headerEl = document.querySelector('.main-header');
// var wrapperEl = document.querySelector('.wrapper');
// var someTextThatIGenerate = 'Generated Text!';

// headerEl.innerText = someTextThatIGenerate;

// headerEl.style.padding = '50px 30px';

// console.log(headerEl.style);

// headerEl.style.color = 'rgb(40, 192, 410)'


// console.log(headerEl.innerText);

// headerEl.innerText = "New Text!";


// function querySelector(selector) {
//     return {};
// }

// var result = querySelector();

// console.log(result)

// var questions = [
//     {
//         answer: "Blue",
//         question: "What color is the sky?"
//     },
//     {
//         answer: "Yellow",
//         question: "What color is a banana"
//     }
// ]

// for (var i = 0; i < questions.length; i++) {
//     var newEl = document.createElement('p');

//     newEl.innterTest = questions[i].question;

    // wrapper.El.insertAdjacentHTML('beforeend', '<p>' + questions[i].question + '<p>');
    // wrapper.El.insertAdjacentHTML('beforeend', '<p>${questions[i].question}$<p>');
// }


// var thirdPartyAPIData = ['jd', 'Lee'];
// var databaseData = [];
// var wrapper = document.getElementsByClassName('wrapper')
// var ulEl = document.createElement('ul')
// var index = 0;

// wrapper[0].append(ulEl)

// for (var i = 0; i < data.length; i++) {
//     var liEl= document.createElement('li');

//     liEl.innerText = data[i];

//     if (data[i] === "Lee") {
//         ulEl.append(liEl);
//         break;
//     }

//     console.log("it runs")
// }



// var count = 4;

// var timer = setInterval(function () {
//     count--;

//     console.log(count);

//     if (count === 0) {
//         clearInterval(timer)
//     };


// }, 2000); //in milliseconds



// var str = 'My String Of Text';
// console.log(str.split(' '))
// var count = 0;
// var listEl = document.querySelector('#list')

// // Event Listener - Web API
// var bntEl = document.querySelector('#start');

// bntEl.addEventListener('click', function() {
//     console.log("Clicked")
//     count++;
// })

// counterEl = document.querySelector('#counter')

// bntEl.addEventListener('click', function(){
//     count++;
//     counterEl.innerText = "Count :" + count;
//     console.log("click")
    
//     listEl.insertAdjacentHTML("beforeend", '<li>${count}');
// })


var submitBtn = document.querySelector('#button');

submitBtn.addEventListener('click', addGroceryItem)

function addGroceryItem(eventObject) {
    var userinput = document.querySelector("#item-txt")
    eventObject.preventDefault()
    console.log(userinput)
}