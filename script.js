let compoint = 0;
let yourpoint = 0;
const outdiv=document.querySelector('#outdiv');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

const btn3 = document.querySelector('#btn3');

const uyourscore=document.querySelector('.uyourscore');
const ucomscore=document.querySelector('.ucomscore');

const choices = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];

};

function playRound(playerSelection, computerSelection) {
    //console.log(playerSelection, computerSelection)
    if ((computerSelection === "paper" && playerSelection === "scissor") || (computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "scissor" && playerSelection === "rock")) {
        yourpoint++;
        const p=document.createElement('p');
        p.innerText="you win";
        outdiv.appendChild(p);
       

    } else if (computerSelection === playerSelection) {
        const p=document.createElement('p');
        p.innerText="tied";
        outdiv.appendChild(p);
        
    } else {
        compoint++;
        const p=document.createElement('p');
        p.innerText="you lost";
        outdiv.appendChild(p);

    };

};
const score=(yourpoint,compoint) => {
    if(yourpoint === 5){
        const h2=document.createElement('h2');
        h2.innerText= `you won the game ${yourpoint} to ${compoint}`;
        outdiv.append(h2);
    }
    if(compoint === 5){
        const h2=document.createElement('h2');
        h2.innerText= ` you lost the game ${yourpoint} against ${compoint}`;
        outdiv.append(h2);
    }
}
 const updatescore=(yourpoint,compoint)=>{
    uyourscore.innerText= `Your Point: ${yourpoint}`;
    ucomscore.innerText=`Computer Point: ${compoint}`;
 }




btn1.addEventListener('click', () => { 
    const computerSelection = getComputerChoice();
        const playerSelection = "rock"; 
    playRound(playerSelection, computerSelection)
    score(yourpoint,compoint);
    updatescore(yourpoint,compoint);
});
   


btn2.addEventListener('click',  () => { 
    const computerSelection = getComputerChoice();
        const playerSelection = "paper"; 
    playRound(playerSelection, computerSelection)
    score(yourpoint,compoint);
    updatescore(yourpoint,compoint);
});
   

btn3.addEventListener('click', () => { 
    
    const computerSelection = getComputerChoice();
        const playerSelection = "scissor"; 
    playRound(playerSelection, computerSelection)
    score(yourpoint,compoint);
    updatescore(yourpoint,compoint);
});
    
