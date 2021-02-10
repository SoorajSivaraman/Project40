var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form, game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var errorState = 0;

function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if(gameState === 1)
  {
    clear();
    game.play();
    fill("white");
    textFont("Lucida Calligraphy");
    textSize(15);
    text("Use LEFT and RIGHT Arrow keys to move your basket to collect fruits", 350, 50);
    var y = 50;
    var i = 1;
    for(var plr in allPlayers)
    {
      text("Player " + i + " (" + allPlayers[plr].name + ") Score: " +  allPlayers[plr].score, 50, y);
      y = y + 50;
      i = i + 1; 
    }
  }

  if(gameState === 2) game.end();

  if(playerCount === 2) 
  {
    game.update(1);
  }  
}