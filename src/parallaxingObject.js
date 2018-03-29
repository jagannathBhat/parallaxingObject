/*
Plugin for parallaxing html objects/elements.

Prallaxing objects just float in your html page. It moves up/down in a speed different to the speed the user scrolls the page with.

This project is licensed under the terms of the GNU GPLv3 license.
A copy of the lisence will be found in the root directory of the project as "LICENSE.txt"
*/
function move() {
  document.querySelectorAll(".jbParallaxingObject").forEach(function(a, b) {
    var y;
    if (document.documentElement.scrollTop) {
      y = a.getAttribute("jbInitY") - (document.documentElement.scrollTop * a.getAttribute("jbParallaxSpeed") / 100);
    } else {
      y = a.getAttribute("jbInitY") - (document.body.scrollTop * a.getAttribute("jbParallaxSpeed") / 100);
    }
    a.style.transform = a.style.msTransform = a.style.WebkitTransform = "translate(" + a.getAttribute("jbInitX") + "px, " + y + "px)";
  });
}

function prepare() {
  document.querySelectorAll(".jbParallaxingObject").forEach(function(a, b) {
    var c = a.style.transform,
      d = [0, 0];
    if (c) {
      for (i = c.indexOf("translate(") + 10; c[i] != ')'; i++);
      d = c.substring(c.indexOf("translate(") + 10, i - 2).split("px, ");
      console.log(d);
    }
    a.setAttribute("jbInitX", d[0]);
    a.setAttribute("jbInitY", d[1]);
  });
}
window.onload = function() {
  prepare();
  move();
};
window.onscroll = function() {
  move();
};
