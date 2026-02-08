// Game State
let currentPlayer = 'RED'; // RED, GREEN, YELLOW, BLUE
const players = ['RED', 'GREEN', 'YELLOW', 'BLUE'];
const diceElement = document.getElementById('dice');
const diceValueElement = document.getElementById('dice-value');
const turnText = document.getElementById('turn-text');

// Dice Faces (Unicode characters)
const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

function rollDice() {
    // 1. Add Animation Class
    diceElement.style.transform = "rotate(360deg)";
    
    // 2. Wait for animation, then generate number
    setTimeout(() => {
        // Random number 1-6
        const randomVal = Math.floor(Math.random() * 6) + 1;
        
        // Update Visuals
        diceElement.innerText = diceFaces[randomVal - 1];
        diceValueElement.innerText = "Rolled: " + randomVal;
        diceElement.style.transform = "rotate(0deg)";

        // Log logic
        console.log(`${currentPlayer} rolled a ${randomVal}`);

        // 3. Move Logic would go here...
        // moveToken(currentPlayer, randomVal);

        // 4. Switch Turn (Simple version: switch every roll unless it's a 6)
        if (randomVal !== 6) {
            switchTurn();
        } else {
            diceValueElement.innerText += " (Roll Again!)";
        }

    }, 300); // 300ms delay for effect
}

function switchTurn() {
    // Find current index
    let currentIndex = players.indexOf(currentPlayer);
    
    // Move to next player
    let nextIndex = (currentIndex + 1) % 4;
    currentPlayer = players[nextIndex];

    // Update Text Color and Content
    turnText.innerHTML = `Turn: <span style="color: ${getPlayerColor(currentPlayer)};">${currentPlayer}</span>`;
}

function getPlayerColor(player) {
    if (player === 'RED') return '#ff4d4d';
    if (player === 'GREEN') return '#2ecc71';
    if (player === 'YELLOW') return '#f1c40f';
    if (player === 'BLUE') return '#3498db';
}