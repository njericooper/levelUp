function menu(){
  var h2s = document.getElementByTagName("h2");

  var menu = document.createElement("div");

  var menuUl = document.createElement("ul");

  for(var 1 = 0; i < h2s.length; i ++){
    var itemText = h2s[i].childNodes[0].nodeValue;

    var menuLi = document.createElement("li");

    menuUl.appendChild(menuLi);

    var menuLiA = document.createElement("a");

    menuLiA = menuLi.appendChild(menuLiA);

    menuLiA.setAttribute("href", "#item" + i);

    var menuText = document.createTextNode(itemText);
    menuLiA.appendChild(menuText);
    var anc = document.createElement("a");

    anc.setAttribute("name", "item" + i);
    document.body.insertBefore(anc, h2s[i]);

  }
  document.body.insertBefore(menu, document.body.firstChild);
}
window.onload = makeMenu;
