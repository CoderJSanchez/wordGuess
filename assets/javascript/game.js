
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'javascript', 'python', 'array', 'loop', 'variable'];
var remainingGuess = 3;
var dashArray = [];
var wrongLetter = [];


//creates a random word from the wordList array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);   

for(let i = 0; i < randomWord.length; i++){
   dashArray[i] = ' _ ';
   document.getElementById("answerSpan").innerHTML = dashArray.join(' ');
   //console.log(dashArray[i]);  why does this look different in the console?
}

//record the letter by user
document.onkeyup = (event) => {
    var playerGuess = event.key;
    remainingGuess--;

    if(remainingGuess === 0){
        wrongLetter = [];
        remainingGuess = 3;
    }
    //if the letter guessed by the player is = to -1, which means it is not in the word, then the letter is pushed to the wrongLetter Array.
    if(randomWord.indexOf(playerGuess) == -1){
        wrongLetter.push(playerGuess);
        console.log(' this is wrongLetterArry: ' +  wrongLetter);
    }
    
    //this will check if userguess matches an index of randomWord.  If so, it will then set the matching dashArray index to the letter guessed.
    for(let i = 0; i < randomWord.length; i++){
        if(randomWord[i] === playerGuess){
            dashArray[i] = playerGuess;    
        }
     }
     console.log(dashArray);
     //DOM manipulation
     document.getElementById("answerSpan").innerHTML = dashArray.join('');   
     document.getElementById("wrongLetterSpan").innerHTML = wrongLetter;
     document.getElementById("guessesLeftSpan").innerHTML = remainingGuess; //?? Why does this have to be inside and outside?


}   //<-- closing brace for onkeyup event
document.getElementById("guessesLeftSpan").innerHTML = remainingGuess;

