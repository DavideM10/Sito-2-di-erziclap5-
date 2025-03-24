// Funzione per registrare un nuovo utente
function registerUser(username, password) {
  let users = loadUserData();
  if (users.some(user => user.username === username)) {
    alert('Username già preso!');
    return;
  }
  users.push({
    username: username,
    password: password,
    score: 0,
    tokens: 0,
  });
  saveUserData(users);
}

// Funzione per cambiare la password
function changePassword(username, oldPassword, newPassword) {
  let users = loadUserData();
  const user = users.find(u => u.username === username);

  if (!user || user.password !== oldPassword) {
    alert('Password errata!');
    return;
  }
  user.password = newPassword;
  saveUserData(users);
  alert('Password modificata con successo!');
}

// Funzione per aggiungere punti e token
function updateUserScoreAndTokens(username, score, tokens) {
  let users = loadUserData();
  const user = users.find(u => u.username === username);
  if (user) {
    user.score += score;
    user.tokens += tokens;
    saveUserData(users);
  }
}

// Funzione di logout
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'login/login.html';
}
