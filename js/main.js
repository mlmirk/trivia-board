/*-------------------------------- Constants --------------------------------*/






/*---------------------------- Variables (state) ----------------------------*/
let playerTurn
let winner
let player1Score
let player2Score


/*------------------------ Cached Element References ------------------------*/
const cells = document.querySelectorAll(".cell")
const playerMessage= document.querySelector("#message")

console.log(playerMessage)

/*----------------------------- Event Listeners -----------------------------*/

cells.forEach(cell=> cell.addEventListener('click',()=>{
  console.log(cell)
}))







/*-------------------------------- Functions --------------------------------*/