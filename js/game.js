class Game {
  constructor(ctx, maxWidth, maxHeight, onGameOver) {
    this.ctx = ctx;
    this.spaceship = undefined;
    this.interval = undefined;
    this.minX = 0;
    this.maxX = maxWidth;
    this.maxY = maxHeight;
    this.gameOver = onGameOver;
  }

  _update() {
    // limpiar
    this._kh7();

    // pintar
    this.spaceship.draw(this.ctx);
    
    // comprobar colisiones
    
    
    this.interval = window.requestAnimationFrame(this._update.bind(this));
  }

  _assignControlsToKeys() {
    document.addEventListener('keydown', e => {
      console.log(e.keyCode + e.key);
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
      switch (e.keyCode) {
        case 37: // arrow left
          this.spaceship.goLeft(this.minX, this.maxX);
          break;
        case 39: // arrow right
          this.spaceship.goRight(this.minX, this.maxX);
          break;
        case 80: // p pause
          this.pause();
          break;
      }
    },false);
  }

  _kh7() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  restart() {
    // reiniciar la posicion inicial de la nave
    // eliminar a todos los enemigos
    // eliminiar todos los disparos
    // reiniciar score
    //reiniciar el player
  }

  pause () {
    // dentener intervals
    // decirle a main pintar la pantalla de pause
  }

  continue () {
    // arranco de nuevo el juego con los valores que tenia
    //quito la pantalla de pause
  }

  start() {
    this.spaceship = new Spaceship();
    this._assignControlsToKeys();
    this._update();    
  }
}