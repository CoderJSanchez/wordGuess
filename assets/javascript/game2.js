//array of words to pick from
var wordList = ['computer', 'harddrive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'algorithim', 'javascript', 'python', 'array', 'loop', 'variable'];

let guessRemaining = 15;
let win = 0;
let lose = 0;
let dashArray = [];
let showLetter = [];
let wrongGuess = [];

//Generate random word from computer
var computerWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(computerWord);

//Turn the computer word into ' _ '
for (let i = 0; i < computerWord.length; i++){
    dashArray.push(' _ ');
}
console.log(dashArray);

//capture the players guessed letter
document.onkeyup = (event) => {
    let guessedLetter = event.key;
    console.log(computerWord.indexOf(guessedLetter));
    //loop through word
    for (let i = 0; i < computerWord.length; i++){
        if (computerWord.indexOf(guessedLetter) > -1 ){
            showLetter.push(guessedLetter);
            dashArray[computerWord.indexOf(guessedLetter)] = guessedLetter;
        }else{
            wrongGuess.push(guessedLetter);
            guessRemaining--;
        }
    
        if(dashArray.join('') === computerWord){
            alert('you won');
        }
        console.log(showLetter);
        console.log(wrongGuess);
        console.log(dashArray);
    }
    
    
} /* <= end of document.onkeyup*/

