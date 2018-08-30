
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'javascript', 'python', 'array', 'loop', 'variable'];
var remainingGuess = 9;
var dashArray = [];
var wrongLetter = [];


//creates a random word from the wordList array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);   
//this function will geneate a new random word when called
function createNewWord(){
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord); 
}
//this function will create underscores for each new word that was called
function makeNewDashes(){
    for(let i = 0; i < randomWord.length; i++){
    dashArray[i] = ' _ ';
    document.getElementById("answerSpan").innerHTML = dashArray.join(' ');
    //console.log(dashArray[i]);  why does this look different in the console?
    }
}
makeNewDashes();




//record the letter by user
document.onkeyup = (event) => {
    var playerGuess = event.key;

    //this will check if userguess matches an index of randomWord.  If so, it will then set the matching dashArray index to the letter guessed.
    for(let i = 0; i < randomWord.length; i++){
        if(randomWord[i] === playerGuess){
            dashArray[i] = playerGuess;    
        }
     }
     //this if blcok checks if the letter chosen is not in the array.  It then pushes the letter top the wrongLetter array and decrements the remaining guesses
     if(randomWord.indexOf(playerGuess) == -1){
        wrongLetter.push(playerGuess);
        remainingGuess--;
        console.log(' this is wrongLetterArry: ' +  wrongLetter);
    }

    
        //if all guesses are used up then the following block executes.  
        if(remainingGuess < 1){
        remainingGuess = 9;
        alert(`answer was ${randomWord}`);
        createNewWord();
        wrongLetter = [];
        makeNewDashes();
        }
    
    
     console.log(dashArray);
     //DOM manipulation
     document.getElementById("answerSpan").innerHTML = dashArray.join('');   
     document.getElementById("wrongLetterSpan").innerHTML = wrongLetter;
     document.getElementById("guessesLeftSpan").innerHTML = remainingGuess; //?? Why does this have to be inside and outside?


}   //<-- closing brace for onkeyup event
document.getElementById("guessesLeftSpan").innerHTML = remainingGuess;

