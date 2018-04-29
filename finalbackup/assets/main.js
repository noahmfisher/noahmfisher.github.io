window.onload = function(){
  var postDiv = document.getElementById("stapler");
  var x, y;
  var xOffset = -75;
  var yOffset = 10;
  window.addEventListener('mousemove', function(event){
    x = event.clientX;
    y = event.clientY;
    if (x !== 'undefined'){
      postDiv.style.left = xOffset + x + "px";
      postDiv.style.top = yOffset + y + "px";
    }
  }, false);
}
