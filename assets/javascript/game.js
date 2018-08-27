
// document.addEventListener('keydown', function(){
//     document.getElementById("gameStartText").style.display = 'none';
// })



//Array of words to be selected
var wordList = ['computer', 'hard drive', 'mouse', 'keyboard', 'screen', 'memory', 'printer', 'algorithim', 'javascript', 'python', 'array', 'loop', 'variable'];
var dashArray = [];
var showLetter = [];

//creates a random word from the wordList array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

//i need a for loop to go through the randomWord and break it apart
// for ( let i = 0; i < randomWord.length; i++ ){
//     letterArray.push(randomWord[i]);
// }

//this loop pushed a dash for each index of letterArray
for(let j = 0; j < randomWord.length; j++ ){
    dashArray.push(" _ ")  
}

//read the letter chosen by the player and compare it to letterArray
document.onkeyup = function(event){
    var chosenLetter = event.key;
    console.log(randomWord.indexOf(chosenLetter));
    //this "if" checks of the chosenLetter exist in an index position of randomWord
    //if it is not then it will console -1 because that is how JS shows something is not in an array
    if(randomWord.indexOf(chosenLetter) > -1){
        showLetter.push(chosenLetter);
    }
    console.log(showLetter);
}



//document.getElementById('test').innerHTML = showLetter;
console.log(randomWord);
console.log(dashArray);