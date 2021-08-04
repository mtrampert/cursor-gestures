"use strict";



function myFunction() {
  var xx = document.getElementById("myLinksMobil");
  if (xx.style.display === "block") {
    xx.style.display = "none";
  } else {
    xx.style.display = "block";
  }
}

function myFunction3() {
  var xxx = document.getElementById("sociallinks01");
  var yyy = document.getElementById("iconon")
  if (xxx.style.display === "block") {
    xxx.style.display = "none";
    yyy.style.display = "block";
  } else {
    xxx.style.display = "block";
    yyy.style.display = "none";
  }
}  

function myFunction2() {
  var xxxx = document.getElementById("sociallinks01");
  var yyyy = document.getElementById("iconon")
  if (xxxx.style.display === "none") {
    xxxx.style.display = "block";
    yyyy.style.display = "none";
  } else {
    xxxx.style.display = "none";
    yyyy.style.display = "block";
  }
}  


var wi = window.innerWidth;
if (wi >= "1200") {
  var node1 = document.querySelector(".detail01");
  var node2 = document.querySelector(".detail02");
  var node3 = document.querySelector(".detail03");
  var node4 = document.querySelector(".detail04");
  var node5 = document.querySelector(".detail05");
  var node6 = document.querySelector(".detail06");
  var node7 = document.querySelector(".detail07");
  var node8 = document.querySelector(".detail08");
  var node9 = document.querySelector(".detail09");
  var node10 = document.querySelector(".detail10");
  var node11 = document.querySelector(".detail11");
  var node12 = document.querySelector(".detail12");
  var node13 = document.querySelector(".detail13");
  var node14 = document.querySelector(".detail14");
  var node15 = document.querySelector(".detail15");
  var node16 = document.querySelector(".detail16");
  
  node1.setAttribute("open", "");
  node2.setAttribute("open", "");
  node3.setAttribute("open", "");
  node4.setAttribute("open", "");
  node5.setAttribute("open", "");
  node6.setAttribute("open", "");
  node7.setAttribute("open", "");
  node8.setAttribute("open", "");
  node9.setAttribute("open", "");
  node10.setAttribute("open", "");
  node11.setAttribute("open", "");
  node12.setAttribute("open", "");
  node13.setAttribute("open", "");
  node14.setAttribute("open", "");
  node15.setAttribute("open", "");
  node16.setAttribute("open", "");
}

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