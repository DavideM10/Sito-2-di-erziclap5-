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

document.getElementById('register-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  registerUser(username, password);
  alert('Registrazione riuscita! Ora puoi accedere.');
  window.location.href = 'login.html';
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = loginUser(username, password);
  if (user) {
    window.location.href = 'index.html'; // Redirect alla pagina principale
  }
});
