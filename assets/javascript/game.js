
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
    if(chosenLetter.indexOf(randomWord) > -1){
        console.log(true);
    }
}



//document.getElementById('test').innerHTML = showLetter;
console.log(randomWord);
console.log(dashArray);


//*********************************************************************** */

// //creates a random number
// let randomWord = Math.floor(Math.random() * wordList.length);

// //takes the random number and applies it to wordList index
// let choice = wordList[randomWord];

// //creates an empty array to hold the underscores
// const underScoreArray = [];



// //function to generate underscores
// const underScoreGenerator = () => {
//     for(let i = 0; i < choice.length; i++){
//         underScoreArray.push(" _ ");
//     }
//     return underScoreArray;
//     console.log(underScoreArray);
// }
// //show the chosen word (just for my purposes right now)
// console.log(choice);

// //show the chosen word as dashes
// console.log(underScoreGenerator());


// // Get the input from the user

// document.addEventListener("keyup", (letter) => {
//     let letterGuessed = letter.key;
//     console.log(letterGuessed);

//     if(letterGuessed === underScoreArray){
//         underScoreArray.push(letterGuessed);
//     }
//     console.log(underScoreArray);
// });