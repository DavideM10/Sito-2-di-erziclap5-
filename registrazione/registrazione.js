document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Prendi i dati dal form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
  
    // Verifica che tutti i campi siano riempiti
    if (!username || !password || !age) {
      alert('Per favore, riempi tutti i campi!');
      return;
    }
  
    // Crea l'oggetto utente
    const user = {
      username: username,
      password: password,
      age: age,
      score: 0  // Inizializza il punteggio dell'utente a 0
    };
  
    // Salva l'utente nel localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
  
    // Reindirizza alla home dopo la registrazione
    window.location.href = 'index.html';
  });
  