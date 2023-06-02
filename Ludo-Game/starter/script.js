let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0')

let dice = document.getElementById('dice')
let btnRoll = document.getElementById('btn--roll')

let currentValue = 0;

let currentPlayer = 0;


dice.classList.add('hidden');

btnRoll.addEventListener('click', () => {
    let randomDice = Math.trunc((Math.random() * 6) + 1);

    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`


    if (randomDice !== 1) {
        currentValue += randomDice

        document.querySelector(`#current--${currentPlayer}`).innerText = currentValue;
    
        // console.log(currentValue);
    }else{

        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active')
        currentPlayer = currentPlayer === 1 ? 0 : 1  
        document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active')
       


        
        // if(currentPlayer === 1 ){

        //     currentPlayer = 0;
        // }else{
            
        //     currentPlayer = 1;
        // }




    }
    // console.log(randomDice)
})











score0.innerText = 0;
score1.innerText = 0;
