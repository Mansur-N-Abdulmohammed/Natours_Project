var btn = document.querySelector(".menu-btn");
var back = document.querySelector(".green-back");

btn.addEventListener("click", function () {
  back.classList.toggle("open");
});
