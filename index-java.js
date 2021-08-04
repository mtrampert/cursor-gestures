"use strict";

function coordsmouse(event) {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = event.clientX;
  var y = event.clientY;

  var yh = (1 - y/h)
  var xw = (x/w)


if (xw < 0.5 || yh < 0.5) {
  var xwtest = (xw - xw);
  var yhtest = (yh - yh);
} else if (xw < 0.7) {
  var xwtest = (xw * 0.2);
} else  if (xw < 0.9) {
  var xwtest = (xw * 0.4);
} else {
  var xwtest = (xw);
}

if (xw < 0.5 || yh < 0.5) {
  var xwtest = (xw - xw);
  var yhtest = (yh - yh);
} else if (yh < 0.6) {
  var yhtest = (yh * 0.2);
} else if (yh < 0.8) {
  var yhtest = (yh * 0.4);
} else {
  var yhtest = (yh);
}
  if (w >= "835") {
    //document.querySelector("#myLinksMobil").style.opacity = x/w;
    //document.querySelector("#myLinksMobil").style.opacity = 1 - y/h;
    //document.querySelector("#myLinksMobil").style.opacity = ((yh) + (xw)) /2;
    document.querySelector("#myLinksMobil").style.opacity = ((yhtest) + (xwtest)) /2;
  }
}
