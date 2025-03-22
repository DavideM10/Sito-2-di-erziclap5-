// Inizializza variabili
let score = 0;
const gridContainer = document.getElementById('grid-container');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

// Funzione per generare una griglia di blocchi
function generateGrid() {
  gridContainer.innerHTML = ''; // Pulisce la griglia
  let blocks = [];
  for (let i = 0; i < 64; i++) {
    const block = document.createElement('div');
    block.classList.add('grid-item');
    block.style.backgroundColor = getRandomColor(); // Colore casuale per ogni blocco
    block.addEventListener('click', () => handleBlockClick(block));
    gridContainer.appendChild(block);
    blocks.push(block);
  }
}

// Funzione per ottenere un colore casuale
function getRandomColor() {
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Funzione per gestire il clic su un blocco
function handleBlockClick(block) {
  const selectedColor = block.style.backgroundColor;
  let blocksToRemove = [];
  
  // Trova tutti i blocchi adiacenti con lo stesso colore
  function findAdjacentBlocks(index) {
    if (index < 0 || index >= 64) return; // Limiti della griglia
    const block = gridContainer.children[index];
    if (block && block.style.backgroundColor === selectedColor && !blocksToRemove.includes(block)) {
      blocksToRemove.push(block);
      // Aggiungi i blocchi vicini
      const row = Math.floor(index / 8);
      const col = index % 8;
      if (col > 0) findAdjacentBlocks(index - 1); // Blocchi a sinistra
      if (col < 7) findAdjacentBlocks(index + 1); // Blocchi a destra
      if (row > 0) findAdjacentBlocks(index - 8); // Blocchi sopra
      if (row < 7) findAdjacentBlocks(index + 8); // Blocchi sotto
    }
  }

  // Trova e rimuovi i blocchi adiacenti
  const blockIndex = Array.from(gridContainer.children).indexOf(block);
  findAdjacentBlocks(blockIndex);
  
  // Rimuovi i blocchi trovati e aggiorna il punteggio
  blocksToRemove.forEach(b => b.remove());
  score += blocksToRemove.length * 10; // Aggiungi punteggio
  scoreElement.textContent = score;
  
  // Rimuovi blocchi e aggiungi nuovi blocchi
  setTimeout(generateGrid, 500); // Rigenera la griglia dopo un breve intervallo
}

// Funzione per riavviare il gioco
restartBtn.addEventListener('click', () => {
  score = 0;
  scoreElement.textContent = score;
  generateGrid();
});

// Inizializza il gioco
generateGrid();
