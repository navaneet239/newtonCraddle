
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5; 

var roof;

var chain1, chain2;

var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine 	= Engine.create();
	world 	= engine.world;

	//Create the Bodies Here.
	bob1 	= new Bob(150, 400, 100)
	bob2 	= new Bob(250, 400, 100)
	bob3 	= new Bob(350, 400, 100)
	bob4 	= new Bob(450, 400, 100)
	bob5 	= new Bob(550, 400, 100)



	roof 	= new Roof(250, 100, 300, 50);

	chain1 	= new Rope(bob1.body, roof.body)
	chain2 	= new Rope(bob2.body, roof.body)



	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

 chain1.display();
 chain2.display();

 
}



