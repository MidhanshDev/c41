class Lightning{
    constructor(x,y,r){
        this.image = loadImage("431-4319726_an-error-occurred-lightning-bolt-png-long-cartoon.png");
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
    image(this.image,pos.x,pos.y,this.radius,400,1);

        }
}