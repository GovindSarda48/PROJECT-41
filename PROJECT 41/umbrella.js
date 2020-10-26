class Umbrella{

    constructor(x,y){

        var options = {
            isStatic : true,
            restitution : 0.5

        }

        var radius = 25;

        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius;
        this.height = radius;
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(man_Image,pos.x -90,pos.y-20,175,175);
    }
}