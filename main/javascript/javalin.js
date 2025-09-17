var btn = document.querySelector(".menu-btn");
var back = document.querySelector(".green-back");
var list = document.querySelector(".menu-list");
var item = document.querySelectorAll(".menu-item-btn");

btn.addEventListener("click", function () {
  back.classList.toggle("open");
  list.classList.toggle("menu-list-open");
});

item.forEach(function (I) {
  I.addEventListener("click", function () {
    back.classList.toggle("open");
    list.classList.toggle("menu-list-open");
  });
});
