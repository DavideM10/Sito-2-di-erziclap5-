// Selezioniamo gli elementi dal DOM
const togglePasswordButton = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

// Aggiungiamo l'evento per alternare la visibilità della password
togglePasswordButton.addEventListener('click', () => {
  // Cambia il tipo dell'input (password -> text e viceversa)
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  
  // Cambia l'icona del bottone
  togglePasswordButton.textContent = type === 'password' ? '👁️' : '🙈';
});

// Gestiamo il login quando l'utente invia il form
document.getElementById('login-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Recuperiamo l'elenco degli utenti memorizzato nel localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Troviamo l'utente che sta cercando di accedere
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    // Salva l'utente corrente
    localStorage.setItem('currentUser', username);
    alert('Login effettuato con successo!');
    window.location.href = 'index.html'; // Redirigi alla home
  } else {
    alert('Nome utente o password errati!');
  }
});
