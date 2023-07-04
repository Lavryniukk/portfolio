function scrollToPx(pixels){
  window.scrollTo({
  	top: pixels,
  	behavior: "smooth"  	
  })
}

let loadedIntro = false;
let loadedSkills = false;
let loadedProj = false;
let loadedFoot = false;

/*---NAVIGATION LINKS ANCHORS---*/
let navLinks = document.querySelectorAll(".nav__link");
let arrOfNavLinks = [...navLinks];
arrOfNavLinks.forEach(navLink=>{
	navLink.addEventListener("click", (event) => {
		event.preventDefault()
		switch (event.target.getAttribute('value')){
			case 'intro':
				scrollToPx(0)
				break;
			case 'know':
				scrollToPx(760)
				break;
			case 'projects':
				scrollToPx(2000)
				break;
			case 'contacts':
				scrollToPx(2000)
				break;
	}
})
})

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

  scrollToPx(0) //Scrolls to the top of the page after reload

  /*---Selfie and Bio animation ---*/
  selfPic.style.left = "0%"
  selfPic.style.position = "relative"
  bio.style.right = "0%"
  bio.style.position = "relative"
  setTimeout(()=>{bio.style.boxShadow = "10px 10px 0px 5px var(--white-color)"},800)
});


let pixelCounter = document.querySelector("p.pxc");
let header = document.querySelector("#header");
let ul = document.querySelector("ul.skills");
let h1 = document.querySelector("#knowledge h1")
let listOfSkills = document.querySelectorAll("ul.skills li")
let h1Proj = document.querySelector("#projects h1")
let arrayOfSkills = [...listOfSkills]
/*The thing below is header smooth hide animation*/
window.addEventListener("scroll", () => {
	let scrolledPixels = window.pageYOffset
	pixelCounter.innerText = `Scrolled: ${scrolledPixels}`;
	if(scrolledPixels>720){
		header.style.transform = "translateY(-100%)"
	}else if(scrolledPixels<720){
		header.style.transform = 'translateY(0%)'
	}
	/*--LAZY LOAD--*/
	/*KNOWLEDGE LAZY LOAD*/
	if(scrolledPixels>=300 && scrolledPixels<=820 && !loadedSkills){
		loadedSkills = true
		let height = 0
		arrayOfSkills.forEach((skill, index)=>{
			setTimeout(()=>{
				skill.style.transform = `translateX(0vw)`;
				h1.style.opacity = '1'
				ul.style.height = `${height}px`
				height+=100
			}, index * 350)

			ul.style.height = `${height - 100}px`
		})
		setTimeout(()=>{ul.style.boxShadow = "-10px 10px 0px 5px var(--main-color)"},0)
	}else if(scrolledPixels>= 1000){
		h1Proj.style.opacity = '1'
	}
	/*PROJECTS LAZY LOAD*/
});

