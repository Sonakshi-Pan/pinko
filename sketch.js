var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  const PLAY = 1;
  const END=0;
  var gameState = PLAY;
 
var particles = [];
var plinkos = [];
var division = []
var particle;
var ground1;
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text(500+score,20,530);
 text(500+score,90,530);
 text(500+score,190,530);
 text(500+score,260,530);
 text(100+score,350,530);
 text(100+score,430,530);
 text(100+score,500,530);
 text(200+score,580,530);
 text(200+score,650,530);
 text(200+score,750,530);




  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
 // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
   ground1.display();
   mousePressed();

  // plinkos.display()
}
function mousePressed(){
  if(gameState !==END){
    particle=new Particle(mouseX,10,10,10)
  }
}