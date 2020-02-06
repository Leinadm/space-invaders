class Game {
  constructor(ctx, maxWidth, maxHeight, onGameOver) {
    this.ctx = ctx;
    this.spaceship = undefined;
    this.shoot = undefined;
    this.enemies = undefined;
    this.minX = 0;
    this.maxX = maxWidth;
    this.maxY = maxHeight;
    this.gameOver = onGameOver;
    this.interval = undefined;
    this.enemiesInterval = undefined;
  }


  _update() {
    // limpiar
    this._kh7();

    // pintar
    this.spaceship.draw(this.ctx);
    this.spaceship.shoots.forEach((shoot, index) => {
      shoot.draw(this.ctx);

      if(shoot.position.y <= 0) {
        this.spaceship.shoots.splice(index, 1);
      }
    });

    this.enemies.forEach(enemy => {
      enemy.draw(this.ctx);
    });
    // this.enemies.draw(this.ctx);

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
        case 32: // Space
          this.spaceship.createShoot();
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

  _moveEnemies () {
    this.enemiesInterval = setInterval(() => {
      let direction = 'left';
      let enemyBorder = this.maxX;
      this.enemies.forEach(enemy => {
        if(enemy.position.x < enemyBorder) {
          enemyBorder = enemy.position.x;
        }
      });
      this.enemies.forEach(enemy => {
        console.log('enemyBorder :', enemyBorder);
        if(enemyBorder > 49) {
          enemy.goLeft();
        } else {
          enemy.goRight();
        }
      });
    }, 500);
  }

  start() {
    this.spaceship = new Spaceship();
    this.enemies = [
      new Enemies(500, 100, 40, 'blue'), 
      new Enemies(550, 100, 40, 'red'), 
      new Enemies(600, 100, 40, 'green')
    ];
    this._moveEnemies();
    this._assignControlsToKeys();
    this._update();    
  }
}