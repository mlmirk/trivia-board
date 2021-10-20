/*-------------------------------- Constants --------------------------------*/
import{getQuestionsAndAnswers} from "./questions.js"
const audio= new Audio('../audio/HumanMusic.mp3')
/*---------------------------- Variables (state) ----------------------------*/
let playerTurn
let player1Score
let player2Score
let catagoryNum //to be passed to retrevail function
let questionNum //to be passed to retrevail function
let questionCorrect // value to track if question is right/wrong
let questionActive // for the timer to use to play the time
let timeLeft // global time value 
let questionObject //store the question object 
let randomizer // want a vavaible to randomly assign questions and answers
let temp
let points
let timerId
let turns
/*------------------------ Cached Element References ------------------------*/
const cells = document.querySelectorAll(".cell")
const playerMessage= document.querySelector("#message")
const player1ScoreMessage=document.querySelector("#player1")
const player2ScoreMessage=document.querySelector("#player2")
const questionModal= document.getElementById("questionsModal")
const submitBtn= document.getElementById("submit")
const timerQ= document.querySelector('#timerX')
const resetBtn=document.querySelector('.game-reset')
const quitBtn=document.querySelector('.game-end')
const bannerMessage=document.getElementById("banner")


/*----------------------------- Event Listeners -----------------------------*/

cells.forEach(cell=> cell.addEventListener('click',handleClick))
questionModal.addEventListener('show.bs.modal',modalEditor)
submitBtn.addEventListener('click', checkGuess)
resetBtn.addEventListener('click', init)
quitBtn.addEventListener('click', gameEnd)

/*-------------------------------- Functions --------------------------------*/

function init(){

playerTurn = 1
player1Score=0
player2Score=0
questionActive= false
questionObject={}
questionCorrect=null
temp=null
points=null
turns=0
cells.forEach(cell=> cell.style.visibility="visible")
quitBtn.style.visibility= "visible"
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
evt.target.style.visibility = 'hidden'
turns+=1
render()

}



function countdown() {

  if (timeLeft == -1) {
    timeExpired();
  } else {
    audio.play()
    timerQ.textContent= `time remaining ${timeLeft}`
    timeLeft--;
  }

}



function timeExpired() {

checkGuess()
bootstrap.Modal.getInstance(questionModal).hide()
audio.pause()
clearTimeout(timerId);

}


function modalEditor(evt){

let modalTitle= questionModal.querySelector('.modal-title')
let answer1Display= questionModal.querySelector('label[for="A1"]')
let answer2Display= questionModal.querySelector('label[for="A2"]')
let answer3Display= questionModal.querySelector('label[for="A3"]')
let answer4Display= questionModal.querySelector('label[for="A4"]')
let answer1= questionModal.querySelector('#A1')
let answer2= questionModal.querySelector('#A2')
let answer3= questionModal.querySelector('#A3')
let answer4= questionModal.querySelector('#A4')
const arr=questionObject.answers[0]


//want to randomize this
modalTitle.textContent=`${questionObject.question}`
answer1Display.textContent= `${questionObject.answers[0]}`
answer1.setAttribute("value", `${questionObject.answers[0]}` )
answer2Display.textContent = `${questionObject.answers[1]}`
answer2.setAttribute("value", `${questionObject.answers[1]}` )
answer3Display.textContent = `${questionObject.answers[2]}`
answer3.setAttribute("value", `${questionObject.answers[2]}` )
answer4Display.textContent = `${questionObject.answers[3]}`
answer4.setAttribute("value", `${questionObject.answers[3]}` )

console.log(arr)


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
    (check3.value === questionObject.rightAnswer? questionCorrect=true :  questionCorrect=false)
  }else if(check4.checked=== true){
    (check4.value === questionObject.rightAnswer? questionCorrect=true :  questionCorrect=false)
  }else{
    questionCorrect=false
  }
setScore(questionCorrect)
clearTimeout(timerId)
audio.pause()
  if(turns >35){
    checkWinner()
  }

}

function setScore(x){

  if(document.getElementById(`${temp}`).classList.contains("easy") && x===true){
    points=100
  }else if(document.getElementById(`${temp}`).classList.contains("med") && x===true){
    points=300
  }else if(document.getElementById(`${temp}`).classList.contains("hard") && x===true){
    points=500
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



function checkWinner(){

  if(player1Score>player2Score){
    bannerMessage.innerHTML= `Player 1 wins with ${player1Score} points`
  }else if(player2Score>player1Score){
    bannerMessage.innerHTML= `Player 2 wins with ${player2Score} points`
  }else if(player1Score === player2Score){
    bannerMessage.innerHTML= `Tie Game at ${player2Score} points`
  }

}



function gameEnd(){

cells.forEach(cell=> cell.style.visibility="hidden")
checkWinner()
quitBtn.style.visibility= "hidden"
}


init()

