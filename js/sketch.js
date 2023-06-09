function setup() {
    createCanvas(500,600);}
  
  function draw() {
    background(224,215,176);
    
    //yellow rectangle
    fill(224,175,9);
    noStroke();
    translate(width / 2, height / 2);
    rotate(7.5 * PI / 4);
    rect(-130,-60,300,90);
    
    //blue triangle
    fill(54,69,124);
    noStroke();
    triangle(30,-290,40,120,-60,-100);
    
    //black rectangle
    fill(0,0,0);
    noStroke();
    rect(60,-140,40,300);
    
    //little black square
    fill(0,0,0);
    noStroke();
    rotate(2.5 * PI / 4);
     beginShape();
    vertex(23,20);
    vertex(85,20);
    vertex(85,78);
    vertex(30,75);
    endShape(CLOSE);
    //square(40,35,50); 
    
  }