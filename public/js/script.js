document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.querySelector(".side-menu");
  const closeIcon = document.querySelector(".close-icon");

  menuIcon.addEventListener("click", function () {
    sideMenu.classList.add("open");
  });

  closeIcon.addEventListener("click", function () {
    sideMenu.classList.remove("open");
  });
  
});
 window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
     header.classList.toggle("fix", window.scrollY > 50);
 });
