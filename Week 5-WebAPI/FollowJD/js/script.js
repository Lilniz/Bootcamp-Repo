
// $('.navbar-toggler-icon').click(function () {
//   $('.navbar-collapse').toggleClass('show');
// });

function saveRecipe() {
    console.log("test")
};

$('#save').click(saveRecipe);


var dateTime = new Date();
// Date();
console.log(dateTime.getHours())

$("#datepicker").datepicker({
    onSelect: function () {
        var dpData = $(this).datepicker('getDate');
        var momentDate = moment(dpData)
        console.log(momentDate.format('MMMM Do YYYY'))
    }
});

// $('#header-text').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// setInterval(function () { 
//     $('#header-text').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// }, 1000);

// OR

function someName() {
    $('#header-text').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

setInterval(someName, 1000);

someName()