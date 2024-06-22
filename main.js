var mouseEvent = "Empty";

color = "Red";
Width_of_line = 2;

Canvas.addEventListener("mousedown" , mymousedown);
function mymousedown(e)
{
  Color = document.getElementById("colour").value;
  Width_of_line = document.getElementById("width").value;
  Radius = document.getElementById("radius");
  mouseEvent = "mouseDown";
}
Canvas.addEventListener("mouseleave" , mymouseleave);
function mymouseleave(e)
{
    mouseEvent = "mymouseleave";

}
Canvas.addEventListener("mouseup" , mymouseup);
function mymouseup(e)
{
    mouseEvent = "mymouseup";
    
}
Canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e)
{
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionof = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
      ctx.beginPath();
      ctx.strokeStyle =Color;
      ctx.LineWidth = Width_of_line;
      console.log("Last position of x and y")
      console.log ("x=" + last_position_x,"y=" + last_position_y)
    }
    
}