const main = () => {
    const puzzleInput: number = 265149;
//   const puzzleInput: number = 17;

  let gridLength = 1;
  let lastNumber = gridLength; 
  let innerLength = 0;
  let rowLength = gridLength;
  let previousLastNumber = lastNumber;
  let currentIndex = lastNumber;

  while (lastNumber < puzzleInput) {
    previousLastNumber = lastNumber;
    innerLength++;

    gridLength = gridLength + 2;
    lastNumber = gridLength * gridLength;
    currentIndex = previousLastNumber;
    rowLength = gridLength - 1;
  }

  while (currentIndex < puzzleInput) {
    currentIndex = currentIndex + rowLength;
  }

  const middleRowIndex = currentIndex - rowLength / 2;
  const sideSteps = Math.abs(puzzleInput - middleRowIndex);

  console.log("totalSteps", sideSteps + innerLength);
};

main();

export {};
