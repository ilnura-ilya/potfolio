

const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
console.log(navBar);

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

$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: ["firstPage", "secondPage", "thirdPage"],
		menu: "#menu",
		autoScrolling:false
		// responsiveWidth: 750
	});
});

// ScrollMagic: init controller
var controller = new ScrollMagic.Controller();

// Tween - Section 2
var scene = new ScrollMagic.Scene({
	triggerElement: "#aboutSection"
})
// animate color and top border in relation to scroll position
.setTween("#bg img", {
	maxWidth: "1000px",
	top: "30%",
	left: "80%",
	opacity: 0.18
}) // the tween durtion can be omitted and defaults to 1
// .addIndicators({ name: "2 (duration: 100)" }) // add indicators (requires plugin)
.addTo(controller);






// Tween - Section 3
var scene = new ScrollMagic.Scene({
	triggerElement: "#section3",
	duration: 300
})
