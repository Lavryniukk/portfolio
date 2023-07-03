window.addEventListener("load", (event) => {
  let links = document.querySelectorAll(".nav__link");
  let selfPic = document.querySelector(".self-pic");
  let bio = document.querySelector(".intro");

  /*---Navigation animation---*/
  let links_arr = [...links];
  links_arr.forEach((link, index) => {
    setTimeout(() => {
      link.style.top = `0%`;
    }, 300 * index);
  });
  event.pageYOffset = 0
  /*---Selfie and Bio animation ---*/
  selfPic.style.left = "0%"
  selfPic.style.position = "relative"
  bio.style.right = "0%"
  bio.style.position = "relative"
  setTimeout(()=>{bio.style.boxShadow = "10px 10px 0px 5px var(--white-color)"},800)
});


window.addEventListener("scroll", () => {
	let pixelCounter = document.querySelector("p.pxc");
	let header = document.querySelector("#header");
	let scrolledPixels = window.pageYOffset || document.documentElement.scrollTop;
	pixelCounter.innerText = `Scrolled: ${scrolledPixels}`;
	if(scrolledPixels>685){
		header.style.transform = "translateY(-100%)"
	}else{
		header.style.transform = 'translateY(0%)'
	}
});

