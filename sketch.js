var ground1;
var dustbin1, bin2, bin3;
var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(500, 480, 1000, 15);

	
	bin2 = new dustbinStick(710, 422.5, 20, 120);
	bin3 = new dustbinStick(890, 422.5, 20, 120);
	dustbin1 = new dustbin(800, 462.5, 200, 20);

	paper1 = new paper(100, 400, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

	fill(255);
	textSize(20);
	text("Press up arrow to put the paper in the dustbin", 300, 250);

  ground1.display();
  
  paper1.display(); 
 
  dustbin1.display();
  bin2.display();
  bin3.display();

  
 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:65, y:-85});
	}
}


