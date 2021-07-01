class Rope{
     
    constructor(body1,body2, pointA,pointB)
    {
this.pointA=pointA;
this.pointB=pointB;
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.pointA,y:this.pointB}
}

string=Matter.Constraint.create({
    pointA:{x:200,y:20},
      bodyB:ball,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
    })
World.add(world,string);
    display()
    {
     var pointA=this.rope1.bodyA.position;
    var pointB=this.rope1.bodyB.position;
    strokeWeight(2);
      rope1.display();
    
    }
    }

}