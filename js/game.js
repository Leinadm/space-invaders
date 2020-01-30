class Game {
  constructor(options, callback) {
    this.ctx = options.ctx;
    // this.spaceship = options.spaceship;
    this.spaceship = new Spaceship();
    this.enemies = [];
    this.interval = undefined;
    this.rows = options.rows;
    this.columns = options.columns;
    this.maxCells = options.maxCells;
    this.gameOver = callback;
  }

  _drawSpaceship() {
    this.ctx.fillStyle = "green";
    this.spaceship.body.forEach(position => {
      this.ctx.fillRect(position.column * this.maxCells, position.row * this.maxCells, 40, 40);
    });
  }


  _update() {
    // limpiar
    this._kh7();
    // pintar
    this._drawSpaceship(); // this.spaceship.draw(ctx)

//pintar fondo
//pintar






    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: // arrow left
        this.spaceship.goLeft();
          break;
        case 39: // arrow right
          this.spaceship.goRight();
          break;
        case 80: // p pause
          this.spaceship.intervalId ? this.spaceship.stop() : this.spaceship.move();
          break;
      }
    });
  }

  _kh7() {
    this.ctx.clearRect(0, 0, 1200, 800)
  }

  restart() {
    this.spaceship.reset();
  }

  start() {
    this._assignControlsToKeys();
    this._update();
  }
}