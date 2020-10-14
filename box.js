class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.1,
            friction:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(ourWorld,this.body)
    }
    display(){
        var position=this.body.position
        var angle=this.body.angle
        push();
        strokeWeight(4);
        stroke("orange")
        translate(position.x,position.y)
        rotate (angle)
        rectMode(CENTER)
        fill("white")
        rect(0,0,this.width,this.height)
        pop() ;
   }
}