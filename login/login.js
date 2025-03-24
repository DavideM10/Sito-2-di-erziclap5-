document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Recupera la lista degli utenti dal localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Memorizza l'utente corrente
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'index/index.html'; // Redirigi alla home
  } else {
    alert('Credenziali errate!');
  }
});
