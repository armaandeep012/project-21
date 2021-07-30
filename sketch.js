var ball;
var ground1, leftRect, rightRect;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 680, 800, 20);
	rightRect = new Ground(770,595.3,20,150);
	leftRect = new Ground(600,595.3,20,150);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(100,650,22, ball_options);
	World.add(world, ball);
	

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	Engine.run(engine);
	background("lightGrey");
	ground1.show();
	rightRect.show();
	leftRect.show();
	stroke(255);
    fill("black");
    ellipse(ball.position.x, ball.position.y, 22, 22);
	drawSprites();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 80, y: -80});
	}
}
