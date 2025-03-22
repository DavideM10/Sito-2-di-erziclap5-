// Funzione per caricare i dati dell'utente dal localStorage
function loadUserData() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
  }
  
  // Funzione per salvare i dati dell'utente
  function saveUserData(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
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
      score: 0, // punteggio iniziale
      tokens: 0 // token iniziali
    });
    saveUserData(users);
  }
  
  // Funzione per fare il login di un utente
  function loginUser(username, password) {
    let users = loadUserData();
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      alert('Credenziali errate!');
      return false;
    }
    return user;
  }
  
  // Funzione per aggiornare il punteggio e i token
  function updateUserScoreAndTokens(username, score, tokens) {
    let users = loadUserData();
    const user = users.find(u => u.username === username);
    if (user) {
      user.score += score;
      user.tokens += tokens;
      saveUserData(users);
    }
  }
  
  // Funzione per fare il logout
  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html'; // Torna alla pagina di login
  }
  
  // Funzione per ottenere l'utente corrente
  function getCurrentUser() {
    let users = loadUserData();
    const username = localStorage.getItem('currentUser');
    if (username) {
      return users.find(user => user.username === username);
    }
    return null;
  }
  