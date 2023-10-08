'use strict';
let number = Math.trunc(Math.random()*20)+1
var score = 20;
let highscore = 0;
console.log(number);
document.querySelector('.check').addEventListener("click", function(){
    const guess = Number(document.querySelector('.userNumber').value);
    if(!guess){
        document.querySelector('.messageUser').textContent = "⚠️ No Number"
    }
    else if(guess === number){
        document.querySelector('.messageUser').textContent = "🥳 Correct Answer!"
        document.querySelector('.number').textContent = number;
        document.querySelector('.mainBg').style.backgroundColor = "#0072b1";
        document.querySelector('.restart').style.backgroundColor = "black";
        if(score > highscore){
           highscore = score
            document.querySelector('.highScore').textContent = highscore;
        }
    }
    else if(guess > number){
        if(score > 1){
        document.querySelector('.messageUser').textContent = "Too High 📈"
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.messageUser').textContent = "You lost the game😟"
        }
    }
    else if(guess < number){
        if(score > 1){
            document.querySelector('.messageUser').textContent = "Too low 📉"
            score--;
            document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.score').textContent = 0;
                document.querySelector('.messageUser').textContent = "You lost the game😟"
            }
    }
})

document.querySelector('.restart').addEventListener('click', function(){
    document.querySelector('.userNumber').value = " ";
    document.querySelector('.mainBg').style.backgroundColor = "black";
    document.querySelector('.messageUser').textContent = "Start Guessing..."

    score = 20;
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random()*20)+1
    console.log(number);
    document.querySelector('.number').textContent = '?';
})