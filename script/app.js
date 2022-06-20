let checkbox = document.querySelector("#checkbox");
let hamburgerMenu = document.querySelector(".hamburger-menu");

let open = false;
checkbox.addEventListener("click", () => {
  if (!open) {
    hamburgerMenu.style.transform = `translateX(0)`;
    open = true;
  } else {
    open = false;
    hamburgerMenu.style.transform = `translateX(-100vw)`;
  }
});
