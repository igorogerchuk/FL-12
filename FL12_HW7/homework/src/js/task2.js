const FIRST_PRIZE = 100;
const SECOND_PRIZE = 50;
const THIRD_PRIZE = 25;
const DEFAULT_COEFFICIENT = 1;
const DEFAULT_ATTEMPTS = 3;
const DEFAULT_MAX_RANGE = 8;
const COEFFICIENT_GROWTH = 2;
const MAX_RANGE_GROWTH = 4;

let isWantPlay = confirm('Do you want to play a game?');
let randomNumber;
let playerNumber;
let totalPrize = 0;
let maxRange = DEFAULT_MAX_RANGE;
let currentPrize;
let coefficient = DEFAULT_COEFFICIENT;
let attempts = DEFAULT_ATTEMPTS;
let isWin = false;

if (isWantPlay) {
    while (isWantPlay) {
        randomNumber = Math.floor(Math.random() * (maxRange + 1));
        isWin = false;
        while (!isWin && attempts) {
            switch (attempts) {
                case 1: currentPrize = THIRD_PRIZE * coefficient;
                    break;
                case 2: currentPrize = SECOND_PRIZE * coefficient;
                    break;
                default: currentPrize = FIRST_PRIZE * coefficient;
                    break;
            }
            playerNumber = prompt(`Choose a roulette pocket number from 0 to ${maxRange} \n
                Attempts left: ${attempts} \n
                Total prize: ${totalPrize} \n
                Possible prize on current attempt: ${currentPrize}`);
            attempts--;
            if (Number(playerNumber) === randomNumber) {
                totalPrize += currentPrize;
                isWin = true;
                alert(`Congratulation, you won! Your prize is: ${totalPrize}`);
                isWantPlay = confirm('Do you want to continue?');
                if (isWantPlay) {
                    coefficient *= COEFFICIENT_GROWTH;
                    attempts = DEFAULT_ATTEMPTS;
                    maxRange += MAX_RANGE_GROWTH;
                }
            }
        }
        if (!isWin || !isWantPlay) {
            if (!isWin) {
                totalPrize = 0;
            }
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            isWantPlay = confirm('Do you want to play again?');
            if (isWantPlay) {
                coefficient = DEFAULT_COEFFICIENT;
                attempts = DEFAULT_ATTEMPTS;
                maxRange = DEFAULT_MAX_RANGE;
                totalPrize = 0;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}