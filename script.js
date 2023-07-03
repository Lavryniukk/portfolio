window.addEventListener("load", () => {
  let links = document.querySelectorAll(".nav__link");
  let links_arr = [...links];
  let range = 0; // Set the desired value for the range
  links_arr.forEach((link, index) => {
    setTimeout(() => {
      link.style.top = `${range}%`;
    }, 400 * index);
  });
});
