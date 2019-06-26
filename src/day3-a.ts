const growGrid = currentGrid => ({
  previousLastNumber: currentGrid.lastNumber,
  innerLength: currentGrid.innerLength + 1,
  gridLength: currentGrid.gridLength + 2,
  lastNumber: (currentGrid.gridLength + 2) * (currentGrid.gridLength + 2),
  currentIndex: currentGrid.lastNumber,
  rowLength: currentGrid.gridLength + 1
});

const main = () => {
  const puzzleInput: number = 265149;
  // const puzzleInput: number = 40;

  let grid = {
    gridLength: 1,
    lastNumber: 1,
    innerLength: 0,
    rowLength: 1,
    previousLastNumber: 1,
    currentIndex: 1
  };

  // Build grid large enough to at least contain puzzle input
  while (grid.lastNumber < puzzleInput) {
    grid = growGrid(grid);
  }

  // Find side of puzzle input(right, top, left or bottom)
  while (grid.currentIndex < puzzleInput) {
    grid.currentIndex = grid.currentIndex + grid.rowLength;
  }
  
  const middleRowIndex = grid.currentIndex - grid.rowLength / 2;
  const sideSteps = Math.abs(puzzleInput - middleRowIndex);

  console.log("totalSteps", sideSteps + grid.innerLength);
};

main();

export {};
