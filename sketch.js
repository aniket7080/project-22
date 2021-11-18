const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var boardimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  archerimage = loadImage("./assets/playerArcher.png")
  boardimage = loadImage("./assets/board.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  ellipseMode(RADIUS);

  //create player base body
  var options = {
    isStatic: true 
  }

  playerBase = Bodies.rectangle(200,400,180,150,options)
  World.add(world,playerBase);

  //create player body

  player = Bodies.rectangle(250,playerBase.position.y - 160,50,180,options)
  World.add(world,player)

  archer = Bodies.rectangle(290,250,50,150,options);
  World.add(world,archer);
 

  board = Bodies.circle(200,100,30,options)
  World.add(world,board);



}

function draw() {
  background(backgroundImg);
  
  

  //show the player image using image() function

  //show the playerbase image using image() function

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image (playerimage,player.position.x,player.position.y,50,180)
  image(archerimage,archer.position.x,archer.position.y,50,50)
  image(boardimage,board.position.x,board.position.y,30)

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
 
}
