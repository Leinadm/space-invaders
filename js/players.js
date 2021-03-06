class Spaceship{
  constructor (){
    this.position = {x: 580, y: 700 };
    this.body = { width: 40, height: 40 };
    this.speed = 20;
    this.color = 'green';
    this.shoots = [];
  }

  draw (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.body.width, this.body.height);
    // pinto mis disparos

  }

  goLeft(minX, maxX) {
    const newPosition = this.position.x - this.speed;
    const canMove = this.canIMove(newPosition, minX, maxX);

    if (canMove === true) {
      this.position.x = newPosition;
    }
  }

  goRight(minX, maxX) {
    const newPosition = this.position.x + this.speed;
    const canMove = this.canIMove(newPosition, minX, maxX);

    if (canMove) {
      this.position.x = newPosition;
    }
  }

  createShoot() {
    this.shoots.push(new Shoot(this.position.x, this.position.y));
  }

  canIMove(newPosition, minX, maxX) {
    if(newPosition >= minX && (newPosition + this.body.width) <= maxX){
      return true;
    }
    return false;
  }
}