// Funzione per eseguire i calcoli
function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').textContent = "Per favore, inserisci entrambi i numeri.";
    return;
  }

  // Esegui il calcolo in base all'operazione scelta
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        result = "Impossibile dividere per zero.";
      } else {
        result = num1 / num2;
      }
      break;
  }

  // Mostra il risultato
  document.getElementById('result').textContent = `Risultato: ${result}`;
}

// Funzione per tornare alla home
function goHome() {
  window.location.href = 'index/index.html'; // Reindirizza alla home
}
