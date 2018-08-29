
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'javascript', 'python', 'array', 'loop', 'variable'];
var remainingGuess = 15;
var dashArray = [];
var showLetter = [];
var wrongLetter = [];


//creates a random word from the wordList array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);   

for(let i = 0; i < randomWord.length; i++){
   dashArray[i] = ' _ ';
}
document.getElementById("answerSpan").innerHTML = dashArray;

//record the letter by user
document.onkeyup = (event) => {
    var playerGuess = event.key;
    for(let i = 0; i < randomWord.length; i++){
        if(randomWord[i] === playerGuess){
            dashArray[i] = playerGuess;
            remainingGuess--;
            document.getElementById("answerSpan").innerHTML = dashArray;
        }else{
            if(randomWord[i]!==playerGuess){
                wrongLetter.push(playerGuess);
                remainingGuess--;
            }
            
        }
     }
     console.log(wrongLetter);
    if(playerGuess !== randomWord){
        wrongLetter.push(playerGuess);
    }
}   //<-- closing brace for onkeyup event
