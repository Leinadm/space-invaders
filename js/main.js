let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  //the DOM is ready, we can do what we want!
  let canvas = document.getElementById('spaceship');
  ctx = canvas.getContext('2d');

  game = new Game(
    ctx, 
    canvas.width, 
    canvas.height,
    printGameOver);

// crear pantalla de inicio con boton start
// addevenlistener al boton de start para que haga game.start()

  game.start();

  function printGameOver() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  }

});