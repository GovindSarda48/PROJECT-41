const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var man_Image;




var thunder = 0;
var thunderCreatedFrame = 0;
var drops = [];

var maxDrops = 100;

function preload(){
    man_Image = loadImage("images/WalkingFrame/walking_1.png");

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
  

       

    umbrella = new Umbrella(100,350);
 
  

    for(var i= 0; i <maxDrops;i++){
    if(frameCount % 100 === 0){
       
            drops.push(new Drop(random(0,400),random(0,400),5));
        }
        

    }
        
    Engine.run(engine);
}

function draw(){
    
    background(0);
    Engine.update(engine);

  
    

 
    var rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : thunder.addImage(thunder1);
                      break;
            case 2 : thunder.addImage(thunder2);
                      break;  
            case 3: thunder.addImage(thunder3);
                      break;       
            case 4 : thunder.addImage(thunder4);
                      break;                            
            default : break;          
        }
    }

    if(thunderCreatedFrame+20 === frameCount && thunder){
     thunder.destroy();
    }
    umbrella.display();

 //createDrop();

     
 for(var  i=0; i< maxDrops;i++){
    drops[i].display();
    drops[i].update();
}


    

    camera.position.x = mouseX;

    drawSprites();
}   
