
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'algorithim', 'javascript', 'python', 'array', 'loop', 'variable'];
var remainingGuess = 15;
var dashArray = [];
var showLetter = [];
var wrongLetter = [];


//creates a random word from the wordList array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);

//this loop pushed a dash for each index of letterArray
for(let i = 0; i < randomWord.length; i++ ){
    dashArray.push(" _ ");
}
console.log(dashArray);

//capture the letter the user has guessed
document.onkeyup = (event) =>{
    var userGuess = event.key;
    //this 'if' checks if the letter exists in the randomWord selected by the computer
    if(randomWord.indexOf(userGuess) > -1){
        //this pushes the correct letter guess to the showLetter array
        showLetter.push(userGuess);
        console.log(`${showLetter} is in the word`);
        //this counts down the chances left
        remainingGuess--;
    }else{
        wrongLetter.push(userGuess);
        console.log(`${wrongLetter} is not in the word`);
        remainingGuess--;
    }

    console.log(`You have ${remainingGuess} more guesses`);

}

