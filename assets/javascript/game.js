
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'javascript', 'python', 'array', 'loop', 'variable'];
var remainingGuess = 10;
var wins = 0;
var dashArray = [];
var wrongLetter = [];
var duplicateArray = [];


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

//record the letter by user.  The keyCodes check if the key pressed was between a-z
document.onkeyup = (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90){
        var playerGuess = event.key.toLowerCase();
        remainingGuess--;
    }
    

    //this will check if userguess matches an index of randomWord.  If so, it will then set the matching dashArray index to the letter guessed.
    for(let i = 0; i < randomWord.length; i++){
        if(randomWord[i] === playerGuess){
            dashArray[i] = playerGuess;    
        }
     }
     //this if blcok checks if the letter chosen is not in the array.  It then pushes the letter top the wrongLetter array and decrements the remaining guesses
    if(randomWord.indexOf(playerGuess) == -1){
        wrongLetter.push(playerGuess.toUpperCase());
        console.log(' this is wrongLetterArry: ' +  wrongLetter);
    }
       
        

    //if all guesses are used up then the following block executes.  
    if(remainingGuess < 1){
        remainingGuess = 10;
        alert(`Sorry!  The word was: ${randomWord}`);
        createNewWord();
        wrongLetter = [];
        dashArray = [];
        makeNewDashes();
    
    }
    //this happens if the word is correctly guessed
    if(dashArray.join('') === randomWord){
        alert(`Great job! ${randomWord} was correct.`);
        dashArray = [];
        createNewWord();
        makeNewDashes();
        remainingGuess = 9;
        wrongLetter = [];
        wins++;
    }
    
     console.log(dashArray);
     //DOM manipulation
     document.getElementById("answerSpan").innerHTML = dashArray.join('');   
     document.getElementById("wrongLetterSpan").innerHTML = wrongLetter;
     document.getElementById("guessesLeftSpan").innerHTML = remainingGuess; //?? Why does this have to be inside and outside?
     document.getElementById("winsCounterSpan").innerHTML = wins;

     if(remainingGuess >= 6){
        document.getElementById('answerSpan').style.color = 'green';
    }

    if (remainingGuess < 6 && remainingGuess >3){
        document.getElementById('answerSpan').style.color = '#e2bc0f';
    }

    if(remainingGuess <= 2){
        document.getElementById('answerSpan').style.color = 'red';
    }

}   //<-- closing brace for onkeyup event


document.getElementById("guessesLeftSpan").innerHTML = remainingGuess;





