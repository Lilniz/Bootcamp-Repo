var startBtn = document.querySelector('.start-button');
var arrayofWords = ['Scope', 'Function', 'Comment', 'Punctuation', 'Collaboration'];
var wordBlank = document.querySelector('.word-blanks');

startBtn.addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * 5);
    var placeholder = '_'.repeat(arrayofWords[randomIndex].length);
    var count = 0;

    document.addEventListener('keyup', function(event) {
        console.log(event.key);
        if (arrayofWords[randomIndex].toLowerCase().includes(event.key.toLowerCase())) {
            var indices = [];
            for (var i = 0; i < arrayofWords[randomIndex].length; i++) {
                if()

            }
        };
    })

});