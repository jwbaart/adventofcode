class Grid {
  private _gridLength;
  private _lastNumber;
  private _innerLength;
  private _rowLength;
  private _previousLastNumber;
  private _currentIndex;

  constructor() {
    this._gridLength = 1;
    this._lastNumber = 1;
    this._innerLength = 0;
    this._rowLength = 1;
    this._previousLastNumber = 1;
    this._currentIndex = 1;
  }

  get gridLength() {
    return this._gridLength;
  }

  get lastNumber() {
    return this._lastNumber;
  }

  get innerLength() {
    return this._innerLength;
  }

  get rowLength() {
    return this._rowLength;
  }

  get previousLastNumber() {
    return this._previousLastNumber;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  get middleRowIndex() {
    return this._currentIndex - this._rowLength / 2
  }

  public growGrid() {
    this._previousLastNumber = this._lastNumber;
    this._innerLength++;

    this._gridLength = this._gridLength + 2;
    this._lastNumber = this._gridLength * this._gridLength;
    this._currentIndex = this._previousLastNumber;
    this._rowLength = this._gridLength - 1;
  }

  public moveToNextGridSide() {
    this._currentIndex = this._currentIndex + this._rowLength;
  }
  public isInputContained(input) {
    return this._lastNumber < input;
  }

  public isInputContainedInSide(input) {
    return this._currentIndex < input;
  }
}

const getNumberOfSideSteps = (input, middleRowIndex) =>
  Math.abs(input - middleRowIndex);

const main = () => {
  const puzzleInput: number = 265149;
  // const puzzleInput: number = 6;

  let grid = new Grid();

  while (grid.isInputContained(puzzleInput)) {
    grid.growGrid();
  }

  while (grid.isInputContainedInSide(puzzleInput)) {
    grid.moveToNextGridSide();
  }

  const sideSteps = getNumberOfSideSteps(puzzleInput, grid.middleRowIndex);

  console.log("totalSteps", sideSteps + grid.innerLength);
};

main();

export {};
