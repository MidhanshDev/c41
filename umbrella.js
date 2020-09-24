class Umbrellas{
    constructor(x,y,r){
        this.image = loadImage("pngtree-a-handsome-man-with-an-umbrella-image_1203434 (1).png");
     var options = {
       
        isStatic: true
    }
            
    this.radius = r;  
    this.body = Bodies.circle(x,y,this.radius,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    imageMode(RADIUS);
    image(this.image,pos.x,pos.y,this.radius,200,1);

        }
}