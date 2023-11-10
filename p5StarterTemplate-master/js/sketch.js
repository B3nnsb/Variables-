var ellipseX = 400;
var ellipseY = 400;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    colorMode (HSB);
    background(220);

   
}




function draw() {
   
    noStroke();
    fill(random(0,255),255, 255, 0.5)


    ellipse(mouseX, mouseY, 50);

    console.log(mouseX);
} 