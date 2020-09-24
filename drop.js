class Drops{
constructor(x,y,r){
 var options = {
    
    isStatic: false
}
        this.radius = r;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        }
        display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    
        }
    }