let compoint = 0;
let yourpoint = 0;

const rock = document.querySelector('#rock');
const paper= document.querySelector('#paper');

const scissor = document.querySelector('#scissor');

const display = document.querySelector('#dis');
const gameover= document.querySelector('#game')

const yourscore=document.querySelector('#yourscore');
const comscore=document.querySelector('#comscore');

const choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];

};

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "paper" && playerSelection === "scissor") || (computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissor" && playerSelection === "rock")) {
        yourpoint++;
        display.innerHTML=`<h2 style="color: white;">Your won</h2>`

       

    } else if (computerSelection === playerSelection) {
        display.innerHTML=`<h2 style="color: white;">Its a tie</h2>`
  
        
    } else {
        compoint++;
        display.innerHTML=`<h2 style="color: white;">Computer won</h2>`


    };

};
const score=(yourpoint,compoint) => {
    if(yourpoint === 5){
       
        gameover.innerHTML= `<h1 style="color: lightgreen;">You won the game !!</h1>`;
        setTimeout(() => {
            document.location.reload();
          }, 1500);
      
    }
    if(compoint === 5){
        
        gameover.innerHTML= `<h1 style="color: red;"> You lost the game !!</h1>`;
       
        setTimeout(() => {
            document.location.reload();
          }, 1500);
    }
}
 const updatescore=(yourpoint,compoint)=>{
    let yourpoint1=yourpoint;
    let compoint1=compoint;
    yourscore.innerHTML= `<span style="color: rgb(201, 134, 10)"> ${yourpoint1}</span>`;
    comscore.innerHTML=`<span style="color: rgb(201, 134, 10);"> ${compoint1}</span>`;
 }

 




rock.addEventListener('click', () => { 
    const computerSelection = getComputerChoice();
        const playerSelection = "rock"; 
    playRound(playerSelection, computerSelection)
    score(yourpoint,compoint);
    updatescore(yourpoint,compoint);
});
   


paper.addEventListener('click',  () => { 
    const computerSelection = getComputerChoice();
        const playerSelection = "paper"; 
    playRound(playerSelection, computerSelection)
    score(yourpoint,compoint);
    updatescore(yourpoint,compoint);
});
   

scissor.addEventListener('click', () => { 
    
    const computerSelection = getComputerChoice();
        const playerSelection = "scissor"; 
    playRound(playerSelection, computerSelection)
    score(yourpoint,compoint);
    updatescore(yourpoint,compoint);
});

