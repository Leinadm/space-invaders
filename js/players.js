class Spaceship{
  constructor (maxRows, maxColumns){
    this.initialBody = [
      { row: 65, column: 50 },
      ];
    this.body = [...this.initialBody];
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.intervalId = undefined;
  }
}