const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var t1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(300,200,20,200);
  box2=new Box(350,170,50,300);
  box3=new Box(410,150,30,250);
  box4=new Box(450,200,50,300);
  box5=new Box(520,200,20,200);
  
}

function draw() {
  background(0,0,0); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  triangle(300,200,310,180,320,200);
  triangle(350,170,375,150,400,170);
  triangle(410,150,425,130,440,150);
  triangle(450,200,475,180,500,200);
  triangle(520,200,530,180,540,200);
  
 
  drawSprites();
}