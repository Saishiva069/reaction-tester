var start= new Date().getTime();
// random color function  start -for generating
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// random color function ends

// functionality inside a move function
function move(){
    var left;
    var top;
    var wh;
    left = Math.random() * 300 ;
    right = Math.random() * 300;
    wh = (Math.random() * 200) + 100;
    document.getElementById("box").style.left = left + "px";
    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.width = wh + "px";
    document.getElementById("box").style.height = wh + "px";
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.backgroundColor = getRandomColor();
    start= new Date().getTime();
}


move();
var start= new Date().getTime();
document.getElementById("box").onclick = function(){
    document.getElementById("box").style.display="none";
    var end= new Date().getTime();
    var timeTaken=(end-start)/1000;
    alert("Your reaction time: " + timeTaken.toFixed(2) + " seconds");

    move();
}