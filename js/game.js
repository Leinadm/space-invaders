class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    this.spaceship = options.spaceship;
    this.interval = undefined;
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.food = undefined;
    this.gameOver = callback;
  }

  _drawSpaceship() {
    this.ctx.fillStyle = "green";
    this.spaceship.body.forEach(position => {
      this.ctx.fillRect(position.column * this.maxCells, position.row * this.maxCells, 40, 40);
    });
  }

  restart() {
    this.spaceship.reset()
  }

  start() {
    this.interval = window.requestAnimationFrame(this._drawSpaceship.bind(this));
  }
}