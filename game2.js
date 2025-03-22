let userScore = 0; // Punteggio dell'utente
const targetBlocks = 5; // Numero di blocchi da colpire per vincere
let hitBlocks = 0; // Numero di blocchi colpiti dall'utente

// Elementi del DOM
const feedbackElement = document.getElementById('feedback');
const gameBoardElement = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const gameResultElement = document.getElementById('game-result');
const resultMessageElement = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again-btn');
const goHomeButton = document.getElementById('go-home-btn');

// Funzione per generare il gioco con blocchi
function generateGameBoard() {
  gameBoardElement.innerHTML = ''; // Pulisce il gioco precedente
  hitBlocks = 0; // Resetta i blocchi colpiti

  // Crea 25 blocchi
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.addEventListener('click', () => handleBlockClick(block));
    gameBoardElement.appendChild(block);
  }
}

// Funzione per gestire il click sui blocchi
function handleBlockClick(block) {
  if (block.classList.contains('block-hit')) return; // Blocca il click su blocchi già colpiti

  block.classList.add('block-hit'); // Colpisci il blocco
  hitBlocks++;

  // Se l'utente ha colpito tutti i blocchi
  if (hitBlocks === targetBlocks) {
    userScore += 20; // Aggiungi 20 punti all'utente
    updateScore(); // Mostra il punteggio aggiornato
    showGameResult('Hai vinto! Vuoi rigiocare o tornare alla home?');
  }
}

// Funzione per mostrare il risultato e le opzioni
function showGameResult(message) {
  resultMessageElement.textContent = message;
  gameResultElement.classList.remove('hidden');
}

// Funzione per rigiocare
function playAgain() {
  generateGameBoard(); // Crea una nuova partita
  gameResultElement.classList.add('hidden'); // Nasconde il messaggio di risultato
}

// Funzione per tornare alla home
function goHome() {
  window.location.href = 'index.html'; // Reindirizza alla home
}

// Funzione per aggiornare il punteggio visualizzato
function updateScore() {
  scoreElement.textContent = `Punteggio: ${userScore}`;
}

// Inizializza il gioco quando la pagina viene caricata
generateGameBoard();
updateScore();

// Event listeners
playAgainButton.addEventListener('click', playAgain);
goHomeButton.addEventListener('click', goHome);
