class Spaceship{
  constructor (maxRows, maxColumns){
    this.initialBody = [
      { row: 65, column: 50 },
      ];
    this.body = [...this.initialBody];
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.direction = undefined;
    this.intervalId = undefined;
  }

  _moveForward() {
    switch (this.direction) {
      case "left":
        this.body({
          row: this.row,
          column: (this.column - 1 + this.maxColumns) % this.maxColumns
        });
        break;
      case "right":
        this.body({
          row: this.row,
          column: (this.column + 1) % this.maxColumns
        });
        break;
    }
  }

  goLeft() {
    if (this.direction = "right") {
      this.direction = "left";
    }
  }

  goRight() {
    if (this.direction = "left") {
      this.direction = "right";
    }
  }

  move() {
    this.intervalId = setInterval(this._moveForward.bind(this), 100);
  }

  reset() {
    this.body = [...this.initialBody];
    this.direction = 'right';
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

}