"strict";
function openNav() {
  document.getElementById("sideNavigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector(".topnav").classList.remove("hidden");
}

function closeNav() {
  document.getElementById("sideNavigation").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.querySelector(".topnav").classList.add("hidden");
}
