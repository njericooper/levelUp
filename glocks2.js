var timer1 = null;
var el = null;
var score = 0;
var shots = 0;
function moveIt() {
  if(parseInt(el.style.left) > (screen.width - 50))
  el.style.top = 0;
  el.style.top = parseInt(el.style.top) + 6 + 'px';
  el.style.top = 100 + (80 * Math.sin(parseInt(el.style.top)/50)) + 'px';
  timer1 = setTimeout(moveIt,25);
}
function scoreUp() {
  score++;
}
function scoreboard() {
  document.getElementById("score").innerHTML = "Shots: " + shots + " Score: " + score;

}
window.onload = function() {
  el = document.getElementById("img1");

el.onclick = scoreUp;
document.getElementById("range").onclick = function() {
  shots++;
  scoreboard();
}
scoreboard();
el.style.top = '50px';
moveIt();
}
