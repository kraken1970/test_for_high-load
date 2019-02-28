// processing the top menu

const close = document.querySelector(".close");
const leftMenu = document.querySelector(".left-menu");
const menuOpen = document.querySelector(".menu-open");

menuOpen.addEventListener("click", function() {
  leftMenu.classList.remove("hidden");
});

close.addEventListener("click", function() {
  leftMenu.classList.add("hidden");
});
