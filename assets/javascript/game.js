
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'algorithim', 'javascript', 'python', 'array', 'loop', 'variable'];
var remainingGuess = 10;
var dashArray = [];
var showLetter = [];
var wrongLetter = [];


//creates a random word from the wordList array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];


//this loop pushed a dash for each index of letterArray
for(let i = 0; i < randomWord.length; i++ ){
    dashArray.push(" _ ");
}
//capture the letter the user has guessed
document.onkeyup = (event) =>{
    var userGuess = event.key;
    console.log(randomWord.indexOf(userGuess));

    if(randomWord.indexOf(userGuess) > -1){
        showLetter.push(userGuess);
        remainingGuess--;
        dashArray[randomWord.indexOf(userGuess)] = userGuess;
    }else{
        wrongLetter.push(userGuess);
        remainingGuess--;
    }

    if(dashArray.join('') === randomWord){
        alert('you win');
    }
    console.log(showLetter);
    console.log(wrongLetter);
    console.log(remainingGuess);
    console.log(dashArray);
}









console.log(randomWord);
console.log(dashArray);
