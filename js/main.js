/*-------------------------------- Constants --------------------------------*/






/*---------------------------- Variables (state) ----------------------------*/
let playerTurn
let winner
let player1Score
let player2Score
let catagoryNum
let questionNum


/*------------------------ Cached Element References ------------------------*/
const cells = document.querySelectorAll(".cell")
const playerMessage= document.querySelector("#message")
const player1ScoreMessage=document.querySelector("#player1")
const player2ScoreMessage=document.querySelector("#player2")


//console.log(player2ScoreMessage)

/*----------------------------- Event Listeners -----------------------------*/

cells.forEach(cell=> cell.addEventListener('click',handleClick))







/*-------------------------------- Functions --------------------------------*/

function init(){
playerTurn = 1
player1Score=0
player2Score=0
winner= null

render()
}

function render(){
playerMessage.innerHTML= playerTurn >0 ? "It is player 1's turn":"It is player 2's turn"



}

function handleClick(evt){
playerTurn= playerTurn * -1
console.log(evt.target.id)
temp=evt.target.id
catagoryNum= parseInt(temp.slice(0))
questionNum= parseInt(temp.slice(-1))
console.log(questionNum)
// cells.setAttribute('hidden')
evt.target.style.visibility = 'hidden'

render()
}


init()

