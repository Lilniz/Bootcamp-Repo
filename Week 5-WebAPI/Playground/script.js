// var userInput= prompt('Your name');
var url = 'https://api.github.com/gists/public'

// var ourFetch = fetch(url).then(function (resObject) {
//     console.log(resObject);
// });

// var ourFetch = fetch(url).then(function (resObject) {
//     var data = resObject.json();

//     data.then(function(data) {
//         console.log(data)
//     })
// });

fetch(url).then(function (resObject) {
    return resObject.json();
    }).then(function(data) {
        console.log(data);
    });