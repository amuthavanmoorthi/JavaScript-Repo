'use strict';

let score1 = document.querySelector('#score--0');
let score2 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let restart = document.querySelector('.btn--new');
let roll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden')

let currenScore = 0;
let activePlayer = 0;

let switchPlayer = function (){
    currenScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0 ;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}

let score = [0,0];
let playing = true;

roll.addEventListener('click', function(){
    if(playing){
    let diceNumber = Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden')
    dice.src = `dice-${diceNumber}.png`
    if(diceNumber !== 1){
        currenScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currenScore;
    }
    else{
        switchPlayer();
    }
}
})

hold.addEventListener('click', function(){
    if(playing){
        score[activePlayer] += currenScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        if(score[activePlayer] >= 20){
            playing = false;
            dice.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else{
            switchPlayer();
        }
    }
})

restart.addEventListener('click', function(){
    console.log('restart button clicked');
    score1.textContent = 0;
    score2.textContent = 0;
    dice.classList.remove('hidden')
    let score = [0,0];
    playing = true;
    
})