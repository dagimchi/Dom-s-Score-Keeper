let btn1 = document.querySelector('#btn-1');
let player1 = document.querySelector('#player1Score');
let btn2 = document.querySelector('#btn-2');
let player2 = document.querySelector('#player2Score');
let select = document.querySelector('select');
let resetBtn = document.querySelector('#btn-3');
let btns = document.querySelectorAll('.deactivate');
let players = document.querySelectorAll('span');

// Player 1 button
btn1.addEventListener('click', () => {
    let total = parseInt(player1.innerText);
    total += 1;
    player1.innerText = total;
    // If player 1 wins change player colors accordingly
    if (player1.innerText === select.value) {
        player1.classList.add('win');
        player2.classList.add('lose');
        // If user pressed the reset button, change player colors accordingly
        // after a round is won
        if (player1.classList.contains('reset-color')) {
            player1.classList.replace('reset-color', 'win');
            player2.classList.replace('reset-color', 'lose');
        }
        // If player 1 wins disable player 1 and 2 buttons 
        for (let btn of btns) {
            btn.setAttribute("disabled", "");
            btn.classList.add('deactivate-style');
        }
    }
})

// Player 2 button, same as above
btn2.addEventListener('click', () => {
    let total = parseInt(player2.innerText);
    total += 1;
    player2.innerText = total;
    if (player2.innerText === select.value) {
        player2.classList.add('win');
        player1.classList.add('lose');
        if (player2.classList.contains('reset-color')) {
            player2.classList.replace('reset-color', 'win');
            player1.classList.replace('reset-color', 'lose');
        }
        for (let btn of btns) {
            btn.setAttribute("disabled", "");
            btn.classList.add('deactivate-style');
        }
    }
})

resetBtn.addEventListener('click', () => {
    // Reset player buttons and select to their original state
    btn1.removeAttribute('disabled');
    btn1.classList.remove('deactivate-style');
    btn2.removeAttribute('disabled');
    btn2.classList.remove('deactivate-style');
    select.value = 5;
    // Reset player scores to their original state
    for (let player of players) {
        player.innerText = 0;
        player.classList.replace('win', 'reset-color');
        player.classList.replace('lose', 'reset-color');
    }
})