window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var logo = document.querySelector(".logo");
  header.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("logo1", window.scrollY > 0);
});
