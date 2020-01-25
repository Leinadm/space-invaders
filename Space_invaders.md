# Iron flip run

The purpose of the game is to kill all the ovnis or spaceships and reach the highest possible score.

The game screen is a line with moving obstacles.

The players are represented by a space ship, ovnis or the two of them that flips side of the game line every time a click event is detected.
The player can use any key to switch side.

The game is over when the player kill all the enemys in each level or a collision is detected between them.

Extra: …

* * *

## MVP
### Technique
Html5 __Canvas__ and __Javascript__

### Game states
* __Start Screen__

  * Title
  * Player nick
  * Single or multiplayer button
  * Player selection button
  * Play button

* __Game Screen__
  * Music on/off button
  * Canvas

* __Game Over Screen__

  * Score classification
  * Play again button
  * Go to start screen button

### Game

* Select multiplayer
* Select player
* Move player
  * Click on any button to move player right, left and up and down depending on the player selection.
* Create obstacles over or under the line depending on the player selection.
* Check collision
* If collision -> 1 live left or Game Over -> Show Game Over Screen

* * *

### Score
* Run counter and store score on game over
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen
### Music
* Add background music to game
* Add music on and off button to Start screen.
### Player
* Create 2 players
  * Let user choose the player.
* Add Choose player button to Start Screen

### Levels
* Check score and increase level.

* * *

## Data structure

__main.js__

````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);

destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();

var game = new Game({
    this.rows,
    this.columns,
    ctx: ctx,
    backgroundcolor = ['xxx','xxx','xxx'],
    this.obstacles,
    this.player
  });

game.init();

````
__Game.js__

````
function Game(options){};
Game.drawBoard();
Game.drawPlayer();
Game.generateObstacles();
Game.gameOver();
Game.init();

garbageCollector;
````

__Player.js__

````
function Player1(){
  this.width;
  this.height;
  this.color;
};
Player.move();

function Player2(){
  this.width;
  this.height;
  this.color;
};
Player.move();

function multiplayer(){
  this.width;
  this.height;
  this.color;
};
Player.move();
````


__Obstacle.js__

````
function Obstacle(){
  this.width;
  this.height;
};
````

## Links
[Iron flip run Trello](https://)

[Github](https://)
