let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0')
let current1 = document.getElementById('current--1')

let dice = document.getElementById('dice')
let btnRoll = document.getElementById('btn--roll')
let btnHold = document.getElementById('btnHold');
let restart = document.getElementById('restart');

let currentValue = 0;

let currentPlayer = 0;


let score = [0, 0]

let playing = true;


dice.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  
    
    
    if(playing){    
        let randomDice = Math.trunc((Math.random() * 6) + 1);

        dice.classList.remove('hidden');
        dice.src = `dice-${randomDice}.png`
        if (randomDice !== 1) {
        currentValue += randomDice

        document.querySelector(`#current--${currentPlayer}`).innerText = currentValue;

        // console.log(currentValue);
    } else {

        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
        currentPlayer = currentPlayer === 1 ? 0 : 1
        document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active');
        currentValue = 0;


        // if(currentPlayer === 1 ){

        //     currentPlayer = 0;
        // }else{

        //     currentPlayer = 1;
        // }




    }}
    // console.log(randomDice)
})


btnHold.addEventListener('click', () => {


    score[currentPlayer] += currentValue;


    if (score[currentPlayer] >= 30) {

        playing = false;

        document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer]
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
        dice.classList.add('hidden');


    } else {
        document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer]

        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
        currentPlayer = currentPlayer === 1 ? 0 : 1
        document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active');
        currentValue = 0;
    }




})


restart.addEventListener('click', () => {
    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
    currentValue = 0;
    playing = true;
    currentPlayer = 0;
    score = [0, 0];
    score0.textContent = 0
    score1.textContent = 0
    current0.textContent = 0
    current1.textContent = 0
    dice.classList.add('hidden');
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active')
    document.querySelector(`.player--1`).classList.remove('player--winner')
})





score0.innerText = 0;
score1.innerText = 0;
