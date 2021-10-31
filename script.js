var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right === "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

document.getElementById("sign_up").onclick = function (e) {
  e.preventDefault();
  document.getElementById("sign_up_greeting").classList.remove("displayNone");
  document
    .getElementById("sign_up_greeting_box")
    .classList.remove("displayNone");
};

document.getElementById("closeButton").onclick = function (e) {
  e.preventDefault();
  document.getElementById("sign_up_greeting").classList.add("displayNone");
  document.getElementById("sign_up_greeting_box").classList.add("displayNone");
};
