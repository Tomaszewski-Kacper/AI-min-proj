function init()
{
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

var DIV1 = document.getElementById("a");
var DIV2 = document.getElementById("b");
var btn = document.getElementById("pol");
var flaga = false;
//Pobieranie pozycji Diva

setInterval(function()
{

var Canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function rysuj()
{
  ctx.clearRect(0, 0, Canvas.width, Canvas.height);
  ctx.beginPath();
  ctx.moveTo(aBox.right/2,aBox.bottom);
  ctx.lineTo(bBox.left+100,bBox.top);
  ctx.stroke();
}

var aBox = DIV1.getBoundingClientRect();
var bBox = DIV2.getBoundingClientRect();

if(flaga)
{
Canvas.removeEventListener('mouseover',rysuj, true);
}
Canvas.addEventListener("mouseover",rysuj,true);
flaga = true;
},30);

window.onload = addListeners();

function addListeners(){
    document.getElementById('b').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('b');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}

window.addEventListener("load",init);
