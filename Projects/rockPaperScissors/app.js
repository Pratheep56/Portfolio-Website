let userScore=0;
let compScore=0;
const userScoreDisp=document.querySelector("#user-score");
const compScoreDisp=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{
    let choices=["rock","paper","scissors"];
    const randChoice=choices[Math.floor(Math.random()*3)];
    return randChoice;
}

const gameDraw=()=>{
    msg.innerText="Game was draw.Play again!";
    msg.style.backgroundColor="black";
    msg.style.color="white";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisp.innerText=userScore;
        msg.innerText=`Congrats! Your ${userChoice} beat ${compChoice}.`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    } else{
        compScore++;
        compScoreDisp.innerText=compScore;
        msg.innerText=`Sorry! ${compChoice} beat your ${userChoice}.`;
        msg.style.backgroundColor="red";
        msg.style.color="black";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})