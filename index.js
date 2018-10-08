"use strict";
/*

    *refactor the Quiz Challenge by setting the state variables to an Object and run methods on the Object 
    *create a key:value pair for the Index of the Question where the property is an array

*/

const questionsArray = {
    currentScore: 0,
    currentQuestionIndex: 0,
    
    questionsBank: [ 
    
    { 
    question: "How many people visit The Mona Lisa each year?",
    answers: [ '1 billion', '22 million', '12 million', 'no-one is counting' ],
    correctAnswerIndex: 2,
    }

    ]
/*--Questions 5-10 here  ---*/  

};




/* -----------2 Retrieve the answers */


function renderQuestion () {



}

function validateForm() {


}

function handleClicks () {


}

function init() {
    //handle start page
    //hide quiz section
    //hide result section

}

$(init);
/**
  *The First Event when the page is fully loaded that activates the Quiz App
  *invoke JQuery ${} passing init CALLBACK function
  *function that calls all the other functions
  *the page has already been read, the functions get hoistsed, define before and call them after. 
  *$(callBackFunction) replaces document.Ready()
  *${donkey} doesn't matter what you call it
  *${Dom ready} for example the init function can be written like this >>>>>>>
  
*/













