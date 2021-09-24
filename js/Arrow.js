class Arrow {
    constructor(x, y,w,h,) {
      var options = {
       //add resistution 
        isStatic: true  
      };
      this.r=50
   this.x = x;
   this.y = y;
  this.w = w;
  this.h = h;
  //this.angle = angle;
  this.body = Bodies.rectangle(x, y, this.w, this.h, options);
  //loadImage
  this.image=loadImage("assets/arrow.png")
      World.add(world, this.body);
    }
  
    //add shoot function 
  shoot(){
    var velocity=p5.Vector.fromAngle(playerArcher.angle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
  
  }
    display() {

      var angle = this.body.angle;
      var pos = this.body.position;
      push(); 
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
  //call the image function
  image(this.image,0,0,this.r,this.r)
      pop();
  
      }
    }
  