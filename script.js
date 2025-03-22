// script.js
let users = JSON.parse(localStorage.getItem('users')) || [];

function saveUserData() {
  localStorage.setItem('users', JSON.stringify(users));
}

function registerUser(username, password) {
  if (users.some(user => user.username === username)) {
    alert('Username già preso!');
    return;
  }
  users.push({
    username: username,
    password: password,
    score: 0, // punteggio iniziale
    tokens: 0 // token iniziali
  });
  saveUserData();
}

function loginUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    alert('Credenziali errate!');
    return false;
  }
  return user;
}
// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');

  if (guess === randomNumber) {
    result.textContent = 'Bravo! Hai indovinato!';
    // Aggiungi token o punteggio qui
  } else if (guess < randomNumber) {
    result.textContent = 'Troppo basso, riprova!';
  } else {
    result.textContent = 'Troppo alto, riprova!';
  }
}
function updateScore(user) {
    user.score += 10; // Aggiungi punti
    user.tokens += 1; // Aggiungi token
    saveUserData();
  }
  