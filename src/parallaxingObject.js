/*
Plugin for parallaxing html objects/elements.

Prallaxing objects just float in your html page. It moves up/down in a speed different to the speed the user scrolls the page with.

This project is licensed under the terms of the GNU GPLv3 license.
A copy of the lisence will be found in the root directory of the project as "LICENSE.txt"
*/
(function() {
  var CLASSNAME = ".jbParallaxingObject"

  function move() {
    document.querySelectorAll(CLASSNAME).forEach(function(a) {
      if (document.documentElement.scrollTop) y = document.documentElement.scrollTop;
      else  y = document.body.scrollTop;
      y = a.getAttribute("jbInit") - (y * a.getAttribute("jbParallaxSpeed") / 100);
      console.log(a.innerHTML + y);
      a.style.transform = a.style.msTransform = a.style.WebkitTransform = a.style.transform.split(", ").slice(0, -1).concat([y + ")"]).join(", ");
    });
  }

  function prepare() {
    document.querySelectorAll(CLASSNAME).forEach(function(a) {
      if (getComputedStyle(a).transform != "none") {
        a.style.transform = getComputedStyle(a).transform;
        a.setAttribute("jbInit", parseInt(getComputedStyle(a).transform.split(", ").splice(-1)));
      }
      else {
        a.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        a.setAttribute("jbInit", 0);
      }
    });
    move();
  }
  window.onload = prepare;
  window.onscroll = move;
})();
