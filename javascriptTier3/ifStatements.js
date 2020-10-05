var keyPressed = "asd";
var xPos = 0;
var endPos = 5

// if (keyPressed == "r" && xPos < endPos){
//     xPos += 1
// } or :

if (keyPressed == "r") {
  console.log("right")
  if (xPos < endPos){
    xPos += 1;
  }

} else if ( keyPressed == "l"){
  console.log("left")
  if (xPos > startPos){
  xPos -= 1;
  }
} else {
  console.log("nada")
  xPos = 0;
}





