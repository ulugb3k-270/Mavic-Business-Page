let buttons = document.querySelectorAll(".expand");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // console.log(buttons[i])
    buttons[i].classList.remove('active')
  });
}
