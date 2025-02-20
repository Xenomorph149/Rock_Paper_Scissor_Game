function simulation(input){
    //reading inputs etc..
    document.getElementById("result").innerHTML="";
    let generated_random_number=Math.floor(Math.random()*3);
    let player_current_score=Number(document.getElementById("psco").innerHTML);
    let computer_score=Number(document.getElementById("csco").innerHTML);
    //if else conditions to check who had won the current turn
    if(generated_random_number!=input){
        if(input==0){
            if(generated_random_number==1){
                computer_score+=1;
            }
            else{
                player_current_score+=1;
            }
        }
        else if(input==1){
            if(generated_random_number==2){
                computer_score+=1
            }
            else{
                player_current_score+=1;
            }
        }
        else{
            if(generated_random_number==0){
                computer_score+=1;
            }
            else{
                player_current_score+=1;
            }
        }
    }
    //printing computers current move
    if(generated_random_number==0){
        document.getElementById("cmo").innerHTML="🪨ROCK";
    }
    else if(generated_random_number==1){
        document.getElementById("cmo").innerHTML="📄PAPER";
    }
    else{
        document.getElementById("cmo").innerHTML="✂︎SCISSOR";
    }
    document.getElementById("psco").innerHTML=player_current_score;
    document.getElementById("csco").innerHTML=computer_score;
    //condition to check who won the game
    if(player_current_score==5){
        let resultElement=document.getElementById("result");
        resultElement.innerHTML="You Won";
        resultElement.style.color = "green";
        resetScore();
    }

    else if(computer_score==5){
        let resultElement=document.getElementById("result");
        resultElement.innerHTML="You Lost";
        resultElement.style.color = "red";
        resetScore();
    }
}
//Reset score function to reset the game score
function resetScore(){
    document.getElementById("psco").innerHTML=0;
    document.getElementById("csco").innerHTML=0;
}