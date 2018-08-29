
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
console.log(randomWord + 'this is conosled from randomWord in line 18');   

for(let i = 0; i < randomWord.length; i++){
   dashArray[i] = ' _ ';
}
document.getElementById("answerSpan").innerHTML = dashArray;

//record the letter by user
document.onkeyup = (event) => {
    var playerGuess = event.key;
    remainingGuess--;
    console.log(remainingGuess);
    for(let i = 0; i < randomWord.length; i++){
        if(randomWord[i] === playerGuess){
            dashArray[i] = playerGuess;    
        }else{
            if(randomWord[i]!==playerGuess){
                wrongLetter.push(playerGuess);        
            }          
        }
     }
     console.log(`This is dashArray outside the for loop: ${dashArray}`);
     document.getElementById("answerSpan").innerHTML = dashArray;
     
    if(playerGuess !== randomWord){
        wrongLetter.push(playerGuess);
    }
}   //<-- closing brace for onkeyup event
