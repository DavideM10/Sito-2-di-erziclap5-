let users = JSON.parse(localStorage.getItem('users')) || [];

// Funzione per salvare i dati nel localStorage
function saveUserData() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Funzione per creare l'admin predefinito (MiottiD), se non esiste già
function createAdmin() {
  // Verifica se l'account MiottiD esiste già
  if (!users.some(user => user.username === "MiottiD")) {
    // Se l'account MiottiD non esiste, crealo
    users.push({
      username: "MiottiD", // nome utente admin
      password: "SitoDiErziclap5", // password predefinita per l'admin
      score: 0, // punteggio iniziale
      tokens: 0 // token iniziali
    });
    saveUserData();
  }
}

// Funzione per registrare un nuovo utente
function registerUser(username, password) {
  // Controlla se l'username è già preso
  if (users.some(user => user.username === username)) {
    alert('Username già preso!');
    return;
  }
  // Aggiungi il nuovo utente all'array users
  users.push({
    username: username,
    password: password,
    score: 0, // punteggio iniziale
    tokens: 0 // token iniziali
  });
  saveUserData();
}

// Funzione per il login dell'utente
function loginUser(username, password) {
  // Trova l'utente con il nome utente e password forniti
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    alert('Credenziali errate!');
    return false;
  }
  return user;
}

// Quando la pagina si carica, crea l'admin se non esiste
createAdmin();

// Gestione della registrazione
document.getElementById('register-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  registerUser(username, password);
  alert('Registrazione riuscita! Ora puoi accedere.');
  window.location.href = 'login.html';
});

// Gestione del login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = loginUser(username, password);
  if (user) {
    // Memorizza l'utente corrente nel localStorage per mantenere lo stato di login
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'index.html'; // Redirect alla pagina principale
  }
});
