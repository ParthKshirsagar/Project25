class paper{
    constructor(x, y, radius){
        var options = { 
            isStatic : false,
            restitution:0.3,
            friction:0.5, 
            density:1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        var radius = this.radius;
        push();
        fill("yellow");
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    }
}