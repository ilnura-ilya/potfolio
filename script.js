window.addEventListener('load',function(){
	$(".loader").fadeOut(1000);
	$(".container").fadeIn(1000);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
	 navBar.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
}


// ScrollMagic: init controller
let controller = new ScrollMagic.Controller();

// Tween - Section 2
let scene = new ScrollMagic.Scene({
	triggerElement: "#aboutSection"
})
// animate color and top border in relation to scroll position
.setTween(".imageBG", {
	maxWidth: "1000px",
	top: "30%",
	left: "80%",
	opacity: 0.18,
	duration: 700
}) // the tween durtion can be omitted and defaults to 1
// .addIndicators({ name: "2 (duration: 100)" }) // add indicators (requires plugin)
.addTo(controller);

// Tween - Section 3
scene = new ScrollMagic.Scene({
	triggerElement: "#projects3",
	duration: 300
})

// animate color and top border in relation to scroll position
.setTween(".imageBG", {
	top: "20%"
}) // the tween duration can be omitted and defaults to 1

// Add indicators (required plugin)
.addTo(controller);



// Wrap every letter in a span
let textWrapper = document.querySelector('.ml12');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapperTwo = document.querySelector('.ml13');

textWrapperTwo.innerHTML = textWrapperTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let tl = anime.timeline({loop: true});
let tl2 = anime.timeline({loop: true});

tl
  .add({
    targets: '.ml12 .letter, .ml13 letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 60 * i
  }).add({
    targets: '.ml12 .letterr',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  

tl2
.add({
  targets: '.ml13 .letter',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el, i) => 500 + 60 * i
}).add({
  targets: '.ml13 .letterr',
  translateX: [0,-30],
  opacity: [1,0],
  easing: "easeInExpo",
  duration: 1100,
  delay: (el, i) => 100 + 30 * i
});