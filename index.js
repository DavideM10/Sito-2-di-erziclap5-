window.onload = function() {
  const currentUser = getCurrentUser();
  if (currentUser) {
    document.getElementById('username-display').innerText = currentUser.username;
    document.getElementById('score-display').innerText = `Punteggio: ${currentUser.score}`;
    document.getElementById('tokens-display').innerText = `Token: ${currentUser.tokens}`;
  }

  document.getElementById('logoutBtn').addEventListener('click', function() {
    logout();
  });

  document.getElementById('numberGameBtn').addEventListener('click', function() {
    numberGame(); // Inizia il gioco dei numeri
  });

  document.getElementById('blockbusterGameBtn').addEventListener('click', function() {
    startBlockbusterGame(); // Inizia il gioco Blockbuster
  });
}
