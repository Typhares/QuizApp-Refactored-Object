"use strict";
 /**    QuizApp-Refactor-Object 10/7
        The score is updated i++
--*/
const state = {  
    currentScore: 0,
    currentQuestionIndex: 0,
    questionsBank:[ { 
            //Obj key value pairs allow the use of .map(param, param) which will return an array
            text: 'How many people visit The Mona Lisa each year?',
            choices: ['1 billion', '22 million', '12 million', 'no-one is counting'],
            questionFeedback: "12 million people visit the Louvre Museum where The Mona Lisa has a room of her own!",
            correctAnswerIndex: '22 million',
        },
        { // question 2
            text: "Prior to 1962, how much was the Mona Lisa insured for?",
            choices: ['10 million', '15 million', '10 million', 'not insured'],
            questionFeedback: "The Mona Lisa was uninsured until the year 1962.",
            correctAnswerIndex: 3,
        },
        { // question 3
            text: "The Mona Lisa's current market value adjusted for inflation is: ",
            choices: ['260 million', '25 million', '1 billion','not known'],
            questionFeedback: "Adjusted for inflation, the market value of the Mona Lisa is more than 260 million, however, her true market value is priceless.",
            correctAnswerIndex: 3, 
        },
        { // question 4
            text: "Which company sponsored the 6.2 million dollar construction and renovation of Mona Lisa's special gallery at The Louvre?",
            choices: ['Mobile Oil', 'Nippon Television', 'Amazon', 'Facebook'],
            questionFeedback: "Nippon Television sponsored the cost of renovating the gallery.",
            correctAnswerIndex: 1, 
        },
        { // question 5
           text: 'Which famous artist painting did not paint a spoof of The Mona Lisa?',
            choices: ['Salvatore Dali', 'Marcel Duchamp', 'Andy Warhol', 'Vincent Van Gogh'],
            questionFeedback: "Almost every famous 20th-century artist painted a spoof of The Mona Lisa. Vincent Van Gogh was a 19th-century painter who never painted a spoof.",
            correctAnswerIndex:3, 
        }, //closing bracket for question 5 Object

    ], // array
}; // state Object

/*
    possible local variables needed
    *let currentQuestionIndex = 0; 
    *let totalNumberOfQuestions = questionsArray.length;
    *let correctQuestionCounter = 0; 
    
*/

/* --incrementing every other index and stopping after index 4  */
/* --Gets the HTML template for the data onto the screen  */
function showQuestion() {
    /*-- 1.how do you validate the form on lines 63? --*/
    let currentQuestion = state.questionsBank[state.currentQuestionIndex];
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
		state.currentQuestionIndex++;
		let appCount = state.currentQuestionIndex ++;
		showQuestion();

	});
}

nextQuestion();


function getAnswer() {

}


function restartQuiz() {


}

