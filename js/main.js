/*-------------------------------- Constants --------------------------------*/
import{getQuestionsAndAnswers} from "./questions.js"

/*---------------------------- Variables (state) ----------------------------*/
let playerTurn
let winner //may not need
let player1Score
let player2Score
let catagoryNum //to be passed to retrevail function
let questionNum //to be passed to retrevail function
let questionCorrect // value to track if question is right/wrong
let questionActive // for the timer to use to play the time
let timeLeft // global time value 
let questionObject //store the question object 
let questionDisplay // tbd
let randomizer // want a vavaible to randomly assign questions and answers
let temp
let points
let timerId
/*------------------------ Cached Element References ------------------------*/
const cells = document.querySelectorAll(".cell")
const playerMessage= document.querySelector("#message")
const player1ScoreMessage=document.querySelector("#player1")
const player2ScoreMessage=document.querySelector("#player2")
const questionModal= document.getElementById("questionsModal")
const submitBtn= document.getElementById("submit")
const timerQ= document.querySelector('#timerX')
console.log(timerQ);
/*----------------------------- Event Listeners -----------------------------*/

cells.forEach(cell=> cell.addEventListener('click',handleClick))
questionModal.addEventListener('show.bs.modal',modalEditor)
submitBtn.addEventListener('click', checkGuess)



/*-------------------------------- Functions --------------------------------*/

function init(){
playerTurn = 1
player1Score=0
player2Score=0
winner= null
questionActive= false
questionObject={}
questionCorrect=null
temp=null
points=null
render()
}

function render(){
playerMessage.innerHTML= playerTurn >0 ? "It is player 1's turn":"It is player 2's turn"

player1ScoreMessage.innerHTML= `Player 1 Score: ${player1Score}`
player2ScoreMessage.innerHTML= `Player 2 Score: ${player2Score}`



}

function handleClick(evt){
timerId = setInterval(countdown, 1000);

temp=evt.target.id
catagoryNum= parseInt(evt.target.id.slice(0))
questionNum= parseInt(evt.target.id.slice(-1))
timeLeft=10
questionObject=getQuestionsAndAnswers(catagoryNum,questionNum)
modalEditor()
//console.log(questionNum)
// cells.setAttribute('hidden')
evt.target.style.visibility = 'hidden'
//questionObject=getQuestionsAndAnswers(catagoryNum,questionNum)





render()
}
function countdown() {
  if (timeLeft == -1) {
    timeExpired();
  } else {
    timerQ.textContent= `time remaining ${timeLeft}`
      timeLeft--;
  }
}

function timeExpired() {
  checkGuess()
  


  clearTimeout(timerId);
}


function modalEditor(evt){
let modalTitle= questionModal.querySelector('.modal-title')
let selectQuestion= questionModal.querySelector('#question-text')
let answer1Display= questionModal.querySelector('label[for="A1"]')
let answer2Display= questionModal.querySelector('label[for="A2"]')
let answer3Display= questionModal.querySelector('label[for="A3"]')
let answer4Display= questionModal.querySelector('label[for="A4"]')
let answer1= questionModal.querySelector('#A1')
let answer2= questionModal.querySelector('#A2')
let answer3= questionModal.querySelector('#A3')
let answer4= questionModal.querySelector('#A4')

 // not truly showing countdown 
selectQuestion.textContent = `${questionObject.question}`

//want to randomize this
answer1Display.textContent= `${questionObject.rightAnswer}`
answer1.setAttribute("value", `${questionObject.rightAnswer}` )
answer2Display.textContent = `${questionObject.wrongAnswer1}`
answer2.setAttribute("value", `${questionObject.wrongAnswer1}` )
answer3Display.textContent = `${questionObject.wrongAnswer2}`
answer3.setAttribute("value", `${questionObject.wrongAnswer2}` )
answer4Display.textContent = `${questionObject.wrongAnswer3}`
answer4.setAttribute("value", `${questionObject.wrongAnswer3}` )

//console.log(answer1Display)





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
function checkGuess(){
let check1= document.getElementById("A1")
let check2= document.getElementById("A2")
let check3= document.getElementById("A3")
let check4= document.getElementById("A4")

questionCorrect=false


if(check1.checked=== true){
  (check1.value === questionObject.rightAnswer? questionCorrect=true : questionCorrect=false)
}else if(check2.checked=== true){
  (check2.value === questionObject.rightAnswer? questionCorrect=true : questionCorrect=false)
}else if(check3.checked=== true){
  (check3.value === questionObject.rightAnswer? questionCorrect=true : questionCorrect=false)
}else if(check4.checked=== true){
  (check4.value === questionObject.rightAnswer? questionCorrect=true : questionCorrect=false)
}else
  questionCorrect=false

setScore(questionCorrect)
//console.log(questionCorrect, 'this is the valueof the radioButton', check2.value)
// console.log('this is correct answer: ', questionObject.rightAnswer)
//if(questionCorrect){console.log('yay')}
//console.log(questionCorrect," + ", questionObject.rightAnswer," + ",check1.value)
}

function setScore(x){
  if(document.getElementById(`${temp}`).classList.contains("easy") && x===true){
    points=100
  }else if(document.getElementById(`${temp}`).classList.contains("med") && x===true){
    points=200
  }else if(document.getElementById(`${temp}`).classList.contains("hard") && x===true){
    points=300
  }else
    points=0

  if(playerTurn===1){
    player1Score+=points
  }
  if(playerTurn===-1){
    player2Score+=points
  }
  playerTurn= playerTurn * -1
  clearTimeout(timerId)
render()
}




init()

