class Spaceship{
  constructor (){
    // this.position (x,y);
    // x = canvas.width / widthCell;
    // y = canvas.height / widthCell;
    // this.initialBody = [
    //   { row: 65, column: 50 },
    //   ];
    // this.body = [...this.initialBody];
    this.maxRows = maxRows;
    this.maxColumns = maxColumns;
    this.direction = undefined;
    this.intervalId = undefined;
  }

  _moveForward(Spaceship) {
    switch (this.direction) {
      case "left":
        this.body({
          row: Spaceship.row,
          column: (Spaceship.column - 1) % this.maxColumns
        });
        break;
      case "right":
        // this.body({
        //   row: Spaceship.row,
        //   column: (Spaceship.column + 1) % this.maxColumns
        this.position.i++;
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
    this.direction = undefined;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

//   drawSpaceship(ctx) {
// khgfkhgkhjgkhjg
//   }

}