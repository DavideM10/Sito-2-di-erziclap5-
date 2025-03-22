document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    registerUser(username, password);
    alert('Registrazione riuscita! Ora puoi accedere.');
    window.location.href = 'login.html'; // Redirige alla pagina di login
  });
  
  document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = loginUser(username, password);
    if (user) {
      localStorage.setItem('currentUser', username); // Salva l'utente attivo nel localStorage
      window.location.href = 'index.html'; // Redirige alla homepage
    }
  });
  