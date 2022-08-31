var Mario,Marioimg
var Bowser,Bowserimg
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground, groundImage;
var obstaclesGroup, obstacle1
var gameOver


function preload() {
    Marioimg = loadImage("Mario.png")
    Bowserimg = loadImage("Bowser.png")
    groundimg = loadImage("Ground.png");
}
function setup(){
        createCanvas(windowWidth,windowHeight);
        
        Mario = createSprite(50,height-20,20,50)
        Mario.scale = 0.5           
        Bowser = createSprite(50,height-20,20,50);
        Bowser.scale = 0.6
        gameOver = createSprite(width/2,height/2)
        ground = createSprite(width/2,height-20,width,20);
        ground.x = ground.width /2;
        console.log("Olá" + 5);
        Mario.setCollider("circle",0,0,50);
        Mario.debug= false
        score = 0;
}