class dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y-80, this.width, 175);
    }
}