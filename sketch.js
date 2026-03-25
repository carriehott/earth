var poetry = ["yogurt", "coffee", "chia seeds", "strawberries", "blueberries", "raspberries", "half & half"]; 

var index = 5; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  textSize(24); 
  fill('green'); 
  text(poetry[index], width/3, height/2); 

  ellipse(100, 100, 200, 200); 
  
}

function keyPressed() {
   index = index +1; 
  
  if(index == poetry.length) {
    index = 0; 
  }
}




