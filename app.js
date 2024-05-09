let uScore=document.querySelector("#user-score");
let cScore=document.querySelector("#comp-score");
let msg=document.querySelector("#message");
userScore=0,compScore=0;
let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        compChoice=genCompChoice();
        checkWinner(userChoice,compChoice);
        showScore(userScore,compScore);
    })
})
let genCompChoice=()=>{
    move=["Rock","Paper","Scissor"];
    rndidx=Math.floor(Math.random()*3);
    return(move[rndidx]);
}
const checkWinner=(userChoice,compChoice)=>{
    if (userChoice==compChoice) {
        msg.innerText="Draw!"
        msg.style.backgroundColor="black"
    } else {
        if (userChoice=="Rock") {
           if (compChoice=="Paper") {
              compScore++;
              msg.innerText="Paper beats your Rock";
              msg.style.backgroundColor="red";
           }
           else if(compChoice=="Scissor"){
            userScore++;
            msg.innerText="your Rock beats Paper";
            msg.style.backgroundColor="green"
           }
        }
        else if(userChoice=="Paper"){
            if (compChoice=="Rock") {
                userScore++;
                msg.innerText="your Paper beats Rock"
                msg.style.backgroundColor="green"
            }
            else if(compChoice=="Scissor"){
                compScore++;
                msg.innerText="Scissor beats your Paper"
                msg.style.backgroundColor="red"
            }
        }
        else if(userChoice=="Scissor"){
            if (compChoice=="Paper") {
                userScore++;
                msg.innerText="your Scissor beats Paper"
                msg.style.backgroundColor="green"
            }
            else if(compChoice=="Rock"){
                compScore++;
                msg.innerText="Rock beats your Scissor"
                msg.style.backgroundColor="red";
            }
        }
    }
}
const showScore=(userScore,compScore)=>{
    uScore.innerText=userScore;
    cScore.innerText=compScore;
}