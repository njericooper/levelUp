function telltime(){
  var out = "";
  var now = new Date();
  out += "<br /Date:> " + now.getDate();
  out += "<br /Month:> " + now.getMonth();
  out += "<br /Year:> " + now.getYear();
  out += "<br /Hours:> " + now.getHours();
  out += "<br /Minutes:> " + now.getMinutes();
  out += "<br /Seconds:> " + now.getSeconds();
  document.getElemantById("div1").innerHTML = out;

}
window.onload = function() {
  document.getElemantById("btn1").onclick= function()
{location.reload();}
  telltime();
}
