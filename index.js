"use strict";
 /**    QuizApp-Refactor-Object 10/7
        where I left off 11PM 10/11
		 /** where is the best place to write a conditional?
		 *need to write a function that tests several conditions
		*has the user has come to the end of the quiz
		*give them a result and tally
        *The score is updated i++
--*/
const state = {  
    currentScore: 0,
    currentQuestionIndex: 0,
    questionsBank:[ { 
            //index 0
            text: 'How many people visit The Mona Lisa each year?',
            choices: ['1 billion', '22 million', '12 million', 'no-one is counting'],
            questionFeedback: "12 million people visit the Louvre Museum where The Mona Lisa has a room of her own!",
            correctAnswerIndex: 1,
        },
        { // index 1
            text: "Prior to 1962, how much was the Mona Lisa insured for?",
            choices: ['10 million', '15 million', '10 million', 'not insured'],
            questionFeedback: "The Mona Lisa was uninsured until the year 1962.",
            correctAnswerIndex: 3,
        },
        { // index 2
            text: "The Mona Lisa's current market value adjusted for inflation is: ",
            choices: ['260 million', '25 million', '1 billion','not known'],
            questionFeedback: "Adjusted for inflation, the market value of the Mona Lisa is more than 260 million, however, her true market value is priceless.",
            correctAnswerIndex: 3, 
        },
        { // index 3
            text: "Which company sponsored the 6.2 million dollar construction and renovation of Mona Lisa's special gallery at The Louvre?",
            choices: ['Mobile Oil', 'Nippon Television', 'Amazon', 'Facebook'],
            questionFeedback: "Nippon Television sponsored the cost of renovating the gallery.",
            correctAnswerIndex: 1, 
        },
        { // index 4
           text: 'Which famous artist painting did not paint a spoof of The Mona Lisa?',
            choices: ['Salvatore Dali', 'Marcel Duchamp', 'Andy Warhol', 'Vincent Van Gogh'],
            questionFeedback: "Almost every famous 20th-century artist painted a spoof of The Mona Lisa. Vincent Van Gogh was a 19th-century painter who never painted a spoof.",
            correctAnswerIndex: 0, 
        }, //closing bracket for question 5 Object

    ], // array
}; // state Object

/*
    don't need these variables anymore, they are part of the state object and questionsBank
    *let currentQuestionIndex = 0; 
    *let totalNumberOfQuestions = questionsArray.length;
    *let correctQuestionCounter = 0; 
    
*/

/* --bug: incrementing every other index 0, 2, 4, 6 and stopping after index 4  */
/* --Gets the HTML template for the data onto the screen  */
function showQuestion() {
    let currentQuestion = state.questionsBank[state.currentQuestionIndex];
	//I want to get the 'text' of currentQuestion onto the page
	    $('h2').html(currentQuestion.text);
    let answersHTML= currentQuestion.choices.map(function(item, index) { 
        return `
            <p>
                <input type="radio" value="${index}" name="option" > ${item}
            </p>`
        }).join('');
     $('.question').append(answersHTML); 
	
	//<button>Submit</button>
   
};

showQuestion();

function nextQuestion() {
	$('button').on('click', function(){ 
		console.log("click");
		state.currentQuestionIndex+= 1;
//		let appCount = state.currentQuestionIndex ++;
		showQuestion();

	});
}

nextQuestion();

//function endOfQuiz() {
////
//	if ( currentQuestion[state.questionIndex] > 10 ) {
////	//	do something
////	} else {
//	restartQuiz
////	}

//}



