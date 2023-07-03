function scrollToZero(){
  window.scrollTo({
  	top: '0',
  	behavior: "smooth"  	
  })
}



window.addEventListener("load", () => {
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

  scrollToZero() //Scrolls to the top of the page after reload

  /*---Selfie and Bio animation ---*/
  selfPic.style.left = "0%"
  selfPic.style.position = "relative"
  bio.style.right = "0%"
  bio.style.position = "relative"
  setTimeout(()=>{bio.style.boxShadow = "10px 10px 0px 5px var(--white-color)"},800)
});

/*The thing below is header smooth hide animation*/
let pixelCounter = document.querySelector("p.pxc");
let header = document.querySelector("#header");
let line = document.querySelector(".line")
let listOfSkills = document.querySelectorAll("ul.skills li")
let arrayOfSkills = [...listOfSkills]
window.addEventListener("scroll", () => {
	let scrolledPixels = window.pageYOffset
	pixelCounter.innerText = `Scrolled: ${scrolledPixels}`;
	if(scrolledPixels>720){
		header.style.transform = "translateY(-100%)"
	}else if(scrolledPixels<720){
		header.style.transform = 'translateY(0%)'
	}
	/*--LAZY LOAD--*/
	if(scrolledPixels>=300 && scrolledPixels<=820){
		let range = 0
		arrayOfSkills.forEach((skill, index)=>{
			setTimeout(()=>{
				skill.style.transform = `translateX(${range}vw)`;
				line.style.opacity = '1'
				range+=3;
			}, index * 350)
		})

	}
});

