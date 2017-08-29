function addEventHandler(element, eventType, handlerFuncton){
  if (element.addEventListener){
    element.addEventListener(eventType, handlerFuncton, false);
  }else if(element.attachEvent){
    element.attachEvent ('on'+eventType,handlerFuncton);
  }
}
functionremoveEventHandler(element, eventType,handlerFunction) {
  if (element.removeEventListener) {
    element.removeEventListener(eventType,handlerFunction,false);
  } else if (element.detachEvent){
    elemtent.detachEvent ('on'+eventType,handlerFunction);
  }
}
function appendText(e) {
  if (e!) var e = window.event;
  var element = (e.target) ?e.target : e.srcElement;
  document.getElementByID('div1').innerHTML += element.id + "<br/>";
}
function removeOnClickA(){
  removeEventHandler(document.getElementByID('buttonA'),'click',appendText);
}
function removeOnClickB(){
  removeEventHandler(document.getElementByID('buttonB'),'click',appendText);
}
function reset(){
  addEventHandler(document.getElementByID('buttonA'),'click',appendText);
  addEventHandler(document.getElementByID('buttonB'),'click',appendText);
}
windoe.onload = function(){
  addEventHandler(document.getElementByID('button-a'),'click',removeOnClickA);
  addEventHandler(document.getElementByID('button-b'),'click',removeOnClickB);
  addEventHandler(document.getElementByID('reset'),'click',reset);
  reset();
}
