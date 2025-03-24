let secretNumber = generateRandomNumber();
let currentUser = JSON.parse(localStorage.getItem('currentUser')); // Ottieni i dati dell'utente

const feedbackElement = document.getElementById('feedback');
const userInputElement = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const gameResultElement = document.getElementById('game-result');
const resultMessageElement = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again-btn');
const goHomeButton = document.getElementById('go-home-btn');

// Funzione per generare un numero casuale tra 1 e 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Funzione per gestire il tentativo dell'utente
function handleGuess() {
  const userGuess = parseInt(userInputElement.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedbackElement.textContent = 'Inserisci un numero valido tra 1 e 100.';
    feedbackElement.classList.remove('correct', 'incorrect');
    return;
  }

  if (userGuess === secretNumber) {
    feedbackElement.textContent = 'Complimenti, hai indovinato!';
    feedbackElement.classList.add('correct');
    currentUser.score += 5; // Aggiungi 5 punti all'utente
    localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Salva i dati aggiornati nel localStorage
    updateScoreDisplay();
    showGameResult('Hai indovinato il numero! Vuoi rigiocare o tornare alla home?');
  } else if (userGuess < secretNumber) {
    feedbackElement.textContent = 'Il numero è più alto! Riprova.';
    feedbackElement.classList.remove('correct');
    feedbackElement.classList.add('incorrect');
  } else {
    feedbackElement.textContent = 'Il numero è più basso! Riprova.';
    feedbackElement.classList.remove('correct');
    feedbackElement.classList.add('incorrect');
  }
}

// Funzione per mostrare il risultato e le opzioni
function showGameResult(message) {
  resultMessageElement.textContent = message;
  gameResultElement.classList.remove('hidden');
}

// Funzione per rigiocare
function playAgain() {
  secretNumber = generateRandomNumber(); // Genera un nuovo numero
  userInputElement.value = ''; // Pulisce la barra di input
  feedbackElement.textContent = ''; // Rimuove il feedback precedente
  feedbackElement.classList.remove('correct', 'incorrect');
  gameResultElement.classList.add('hidden'); // Nasconde il messaggio di risultato
}

// Funzione per tornare alla home
function goHome() {
  window.location.href = 'index/index.html'; // Reindirizza alla home
}

// Funzione per aggiornare il punteggio dell'utente nella home
function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = `Punteggio: ${currentUser.score}`;
}

// Event listeners
submitButton.addEventListener('click', handleGuess);
playAgainButton.addEventListener('click', playAgain);
goHomeButton.addEventListener('click', goHome);
