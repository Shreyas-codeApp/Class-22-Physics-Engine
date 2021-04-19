//NameSpacing

 const Engine = Matter.Engine;
 const Bodies = Matter.Bodies; 
 const World = Matter.World;

 var engine,world;
 var ground,ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_option = {
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,20,ground_option);
  World.add(world,ground);
  var ball_option = {
    restitution : 1.5
    
  }
  ball = Bodies.circle(200,100,20,ball_option);//(x,y,radius);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}