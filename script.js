function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

alert("<p>hello world</p>");

setInterval(() => {
let clock = document.querySelector("#clock");
clock.innerHTML =
new Date().getHours()+':'+
new Date().getMinutes()+':'+
new Date().getSeconds();
});