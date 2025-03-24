function handleBlockClick(block) {
  const selectedColor = block.style.backgroundColor;
  let blocksToRemove = [];

  function findAdjacentBlocks(index) {
    if (index < 0 || index >= 64) return;
    const block = gridContainer.children[index];
    if (block && block.style.backgroundColor === selectedColor && !blocksToRemove.includes(block)) {
      blocksToRemove.push(block);
      const row = Math.floor(index / 8);
      const col = index % 8;
      if (col > 0) findAdjacentBlocks(index - 1);
      if (col < 7) findAdjacentBlocks(index + 1);
      if (row > 0) findAdjacentBlocks(index - 8);
      if (row < 7) findAdjacentBlocks(index + 8);
    }
  }

  const blockIndex = Array.from(gridContainer.children).indexOf(block);
  findAdjacentBlocks(blockIndex);

  blocksToRemove.forEach(b => b.remove());

  // Aggiungi punti e feedback
  if (blocksToRemove.length > 0) {
    score += 20;
    alert(`Hai rimosso ${blocksToRemove.length} blocchi!`);
    localStorage.setItem('score', score);
    scoreElement.textContent = score;
  }

  setTimeout(generateGrid, 500);
}
