class Enemies{
    constructor (){
      this.position = {x: 580, y: 100};
      this.body = { width: 40, height: 40 };
      this.speed = 20;
      this.color = 'blue';
      this.eshoots = [];
    }

    draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.body.width, this.body.height);
    }

    goForward(){

    }

    createShoot(){

    }
}

