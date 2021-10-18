/*-------------------------------- Constants --------------------------------*/
import{getQuestionsAndAnswers} from "./questions.js"

/*---------------------------- Variables (state) ----------------------------*/
let playerTurn
let winner
let player1Score
let player2Score
let catagoryNum
let questionNum
let questionCorrect
let questionActive
let timeLeft
let questionObject
let questionDisplay
/*------------------------ Cached Element References ------------------------*/
const cells = document.querySelectorAll(".cell")
const playerMessage= document.querySelector("#message")
const player1ScoreMessage=document.querySelector("#player1")
const player2ScoreMessage=document.querySelector("#player2")
const questionModal= document.getElementById("questionsModal")


/*----------------------------- Event Listeners -----------------------------*/

cells.forEach(cell=> cell.addEventListener('click',handleClick))
questionModal.addEventListener('show.bs.modal',modalEditor)




/*-------------------------------- Functions --------------------------------*/

function init(){
playerTurn = 1
player1Score=0
player2Score=0
winner= null
questionActive= false
timeLeft=30
questionObject={}

render()
}

function render(){
playerMessage.innerHTML= playerTurn >0 ? "It is player 1's turn":"It is player 2's turn"
player1ScoreMessage.innerHTML= `Player 1 Score: ${player1Score}`
player2ScoreMessage.innerHTML= `Player 2 Score: ${player2Score}`

}

function handleClick(evt){

playerTurn= playerTurn * -1
console.log(evt.target.id)
catagoryNum= parseInt(evt.target.id.slice(0))
questionNum= parseInt(evt.target.id.slice(-1))
questionObject=getQuestionsAndAnswers(catagoryNum,questionNum)
//console.log(questionNum)
// cells.setAttribute('hidden')
evt.target.style.visibility = 'hidden'
//questionObject=getQuestionsAndAnswers(catagoryNum,questionNum)
questionTimer()


render()
}
function questionTimer(){
//thirty second timer 

let timer = setInterval(function() {
	// Each time the function is called, decrease the remaining time by 1
	timeLeft -= 1
	let x=timeLeft
  if(timeLeft === 0){
    clearInterval(timer)
  }
}, 1000)
timeLeft=30
}

function modalEditor(evt){
let modalTitle= questionModal.querySelector('.modal-title')
let selectQuestion= questionModal.querySelector('#question-text')
let answer1= questionModal.querySelector('label[for="A1"]')
let answer2= questionModal.querySelector('label[for="A2"]')
let answer3= questionModal.querySelector('label[for="A3"]')
let answer4= questionModal.querySelector('label[for="A4"]')
let timerQ= questionModal.querySelector('#timer')

timerQ.textContent= `time remaining ${timeLeft}` // not truly showing countdown 
selectQuestion.textContent= `${questionObject.question}`



// let clicked = evt.relatedTarget
//   console.log(clicked);
// i will need to change the value for radio butons this is for when things are selected
// modalTitle.textContent= 'this Worksss?!' // will change later
// selectQuestion.textContent='he is the question' // just testing functionality
// answer1.textContent='123'
// answer2.textContent='456'
// answer3.textContent='798'
// answer4.textContent='564'
}
function objectHandler(){


}



init()
//questionTimer()
