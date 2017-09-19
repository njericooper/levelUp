function toggle(){
  var myElement = document.getElementById("id1");
  if (myElement.style.backgroundColor == 'red') {
    myElement.style.backgroundColor = 'yellow';
    myElement.style.color = 'black';
  } else {
    myElement.style.backgroundColor = 'red';
    myElement.style.color = 'white';
  }

}
