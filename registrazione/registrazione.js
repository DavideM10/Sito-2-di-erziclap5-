document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const age = parseInt(document.getElementById('age').value, 10);

  // Verifica che tutti i campi siano riempiti
  if (!username || !password || !age) {
    alert('Per favore, riempi tutti i campi!');
    return;
  }

  // Validazione età
  if (age < 18) {
    alert('Devi avere almeno 18 anni per registrarti.');
    return;
  }

  // Creazione dell'oggetto utente
  const user = {
    username: username,
    password: password,
    age: age,
    score: 0,
  };

  // Recupera gli utenti dal localStorage e aggiungi il nuovo utente
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registrazione riuscita! Ora puoi accedere.');
  window.location.href = 'login/login.html';
});
