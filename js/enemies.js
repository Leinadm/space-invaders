class Enemies{
    constructor (x, y, speed, color){
      this.position = { x: x, y: y };
      this.body = { width: 40, height: 40 };
      this.speed = speed;
      this.color = color;
    }

    draw (ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.body.width, this.body.height);
    }

    goLeft() {
      this.position.x -= 50;
    }

    goRight() {
      this.position.x += 50;
    }
    // goLeft(minX, maxX) {
    //   const newPosition = this.position.x - this.speed;
    //   const canMove = this.canIMove(newPosition, minX, maxX);
  
    //   if (canMove === true) {
    //     this.position.x = newPosition;
    //   }
    // }
    
    // goRight(minX, maxX) {
    //   const newPosition = this.position.x + this.speed;
    //   const canMove = this.canIMove(newPosition, minX, maxX);

    //   if (canMove) {
    //       this.position.x = newPosition;
    //       }
    // }

    canIMove(newPosition, minX, maxX) {
      if(newPosition >= minX && (newPosition + this.body.width) <= maxX){
          return true;
          }
          return false;
    }
}

