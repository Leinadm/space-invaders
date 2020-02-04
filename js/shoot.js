class Shoot{
    constructor (x,y){
        this.size = 5;
        this.position = { x, y };  
        this.speed = 10;
        this.color = 'red';
    }

    draw (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x + 17.5, this.position.y - 25, this.size, this.size + 20);
        this.goForward();
    }
    
    goForward() {
        this.position.y -= this.speed;
    }
}
