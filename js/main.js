let ctx;
let game;
document.addEventListener('DOMContentLoaded', (event) => {
  //the DOM is ready, we can do what we want!
  let canvas = document.getElementById('spaceship');
  ctx = canvas.getContext('2d');
  const widthCell = 10;

  function printGameOver() {
    let gameOver = document.getElementById("gameover");
    canvas.style = "display: none";
    gameOver.style = "display: block";
  }

  function start() {
    game.start();
  }
  
  game = new Game({
    ctx,
    rows: canvas.width / widthCell,
    columns: canvas.height / widthCell,
    maxCells: widthCell,
  }, printGameOver);

});