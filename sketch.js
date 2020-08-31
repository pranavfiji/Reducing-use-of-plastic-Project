
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var engine,world;
var leftPillar,mainPillar,rightPillar;
//function preload()
//{

//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
		isStatic:false,
		friction:0.5,
		density:1.3
	}
	var groundOptions={
		isStatic:true
	}

	ground=Bodies.rectangle(400,650,800,20,groundOptions);
	World.add(world,ground);
	ball=Bodies.circle(50,645,15,ball_options);
	World.add(world,ball);
	leftPillar=Bodies.rectangle(720,600,20,300,groundOptions);
	World.add(world,leftPillar);
	middlePillar=Bodies.rectangle(725,600,300,20,groundOptions);
	World.add(world,middlePillar);
	rightPillar=Bodies.rectangle(750,600,20,300),groundOptions;
	World.add(world,rightPillar);
	Engine.run(engine);
	

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  rect(ground.position.x,ground.position.y,800,20);
  rect(ground.position.x,ground.position.y,100,20);
  rect(ground.position.x,ground.position.y,20,200);
  rect(ground.position.x,ground.position.y,100,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  keyPressed();

}



function keyPressed(){
	if(keyCode===UP_ARROWED){
		Matter.Body.applyForce(ball.Body,ball.Body.position,{x:90,y:-90});
	}
}