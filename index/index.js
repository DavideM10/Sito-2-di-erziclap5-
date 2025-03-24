// Recupera i dati dell'utente dal localStorage
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Verifica se c'è un utente loggato
if (!currentUser) {
  // Se non c'è un utente loggato, mostra un messaggio di errore
  alert('Non sei loggato! Accedi o registrati prima.');
  window.location.href = 'login/login.html'; // Reindirizza alla pagina di login
} else {
  // Mostra il nome utente e il punteggio nella home
  document.getElementById('username-display').textContent = currentUser.username;
  document.getElementById('score-display').textContent = `Punteggio: ${currentUser.score}`;
}

// Funzione per aggiornare il punteggio dell'utente
function updateUserScore(newScore) {
  currentUser.score = newScore;
  localStorage.setItem('currentUser', JSON.stringify(currentUser)); // Salva i dati aggiornati nel localStorage
  document.getElementById('score-display').textContent = `Punteggio: ${newScore}`; // Aggiorna la visualizzazione del punteggio
}

// Gestione del logout
document.getElementById('logout-btn').addEventListener('click', function() {
  // Rimuovi i dati dell'utente da localStorage
  localStorage.removeItem('currentUser');
  
  // Reindirizza alla pagina di login
  window.location.href = 'login/login.html';
});
