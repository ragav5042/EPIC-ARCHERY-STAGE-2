const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArrow(
    width - 340,
    computerBase.body.position.y - 170,
    120,
    120,
  );
  playerArcher = new PlayerArrow(
    width - 1020,
    playerBase.body.position.y - 170,
    120,
    120,
    +PI/8
  );
  //Create an arrow Object
  arrow = new Arrow(playerBase.body.position.x+40,playerBase.body.position.y-170,150,50)
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  
  arrow.display()
  computerBase.display();
  computer.display();
  
  playerArcher.display()
  computerArcher.display()

  

  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    arrow.shoot()
  }
}



