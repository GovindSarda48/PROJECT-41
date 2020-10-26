class Drop{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.1,
            'friction':0.002,
            isStatic : false,
            //'density':1.0
        }
    
        this.body = Bodies.circle(x,y,radius/2,options);
        this.width = radius;
        this.height = radius;
        
        World.add(world, this.body);
      }
      display(){
      var pos  = this.body.position;
      fill(57,166,167);
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.width,this.height);
      }

      update(){
          if(this.body.position.y>400){
           Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-10,0)
        
        });
          }
      }
    }
    