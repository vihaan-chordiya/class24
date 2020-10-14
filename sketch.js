
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var ourEngine,ourWorld
 var box1, box2, box3, box4, box5;
 var ground1;
 var pig1, pig2;
 var log1, log2, log3, log4;
 var bird1
function setup() {
  createCanvas(1200,400);
  ourEngine=Engine.create();
  ourWorld=ourEngine.world;
  box1=new Box(700,320,60,60);
  box2=new Box(850,320,60,60);
  ground1=new Ground(600,380,1200,20);
  pig1=new Pig(775,320)
  log1=new Log(775,260,250,PI/2)//180/2
  box3=new Box(700,240,60,60);
  box4=new Box(850,240,60,60);
  pig2=new Pig(775,240)
  log2=new Log(775,220,250,PI/2)//180/2
  box5=new Box(760,200,60,60)
  log3=new Log(750,180,140,PI/4)//180/2
  log4=new Log(820,180,150,-PI/4)//180/2
  bird1=new Bird(200,200)
}

function draw() {
  background("lightBlue");  
  
  Engine.update(ourEngine)
  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  log3.display();
  log4.display();
  box5.display();
  bird1.display();
}