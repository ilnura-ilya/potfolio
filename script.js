

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
/*
$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: ["firstPage", "secondPage", "thirdPage"],
		menu: "#menu",
		autoScrolling:false
		// responsiveWidth: 750
	});
});*/

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



 //Display project

/*const btn = document.querySelector('.projectName');
const image = document.querySelector('.image-project');
btn.addEventListener('click', projectDisplay);

function projectDisplay (){
	document.querySelector('.project-one').style.display = "none";
	image.style.display = "block";

}*/

const videoOne = document.querySelector(".videoOne");
const overlayOne = document.querySelector(".overlayOne");
const closeOverlayOne = document.querySelector(".closeOverlayOne");
console.log(closeOverlayOne);

videoOne.addEventListener('click', function () {
	overlayOne.classList.toggle("active");
 });
closeOverlayOne.addEventListener('click', overlayClose);
function overlayClose(){
	overlayOne.classList.remove("active");
};



const videoTwo = document.querySelector(".videoTwo");
const overlayTwo = document.querySelector(".overlayTwo");
const closeOverlayTwo = document.querySelector(".closeOverlayTwo");


videoTwo.addEventListener('click', function () {
	overlayTwo.classList.toggle("active");
 });

closeOverlayTwo.addEventListener('click', overlayCloseTwo);
function overlayCloseTwo(){
	overlayTwo.classList.remove("active");
};


const videoThree = document.querySelector(".videoThree");
const overlayThree = document.querySelector(".overlayThree");
const closeOverlayThree = document.querySelector(".closeOverlayThree");


videoThree.addEventListener('click', function () {
	overlayThree.classList.toggle("active");
 });

closeOverlayThree.addEventListener('click', overlayCloseThree);
function overlayCloseThree(){
	overlayThree.classList.remove("active");
};


const videoFour = document.querySelector(".videoFour");
console.log(videoFour);
const overlayFour = document.querySelector(".overlayFour");
console.log(overlayFour);
const closeOverlayFour = document.querySelector(".closeOverlayFour");
console.log(closeOverlayFour);


videoFour.addEventListener('click', function () {
	overlayFour.classList.toggle("active");
 });

closeOverlayFour.addEventListener('click', overlayCloseFour);
function overlayCloseFour(){
	overlayFour.classList.remove("active");
};


const videoFive = document.querySelector(".videoFive");
console.log(videoFive);
const overlayFive = document.querySelector(".overlayFive");
console.log(overlayFive);
const closeOverlayFive = document.querySelector(".closeOverlayFive");
console.log(closeOverlayFive);


videoFive.addEventListener('click', function () {
	overlayFive.classList.toggle("active");
 });

closeOverlayFive.addEventListener('click', overlayCloseFive);
function overlayCloseFive(){
	overlayFive.classList.remove("active");
};

const videoSix = document.querySelector(".videoSix");
console.log(videoFive);
const overlaySix = document.querySelector(".overlaySix");
console.log(overlayFive);
const closeOverlaySix = document.querySelector(".closeOverlaySix");
console.log(closeOverlayFive);


videoSix.addEventListener('click', function () {
	overlaySix.classList.toggle("active");
 });

closeOverlaySix.addEventListener('click', overlayCloseSix);
function overlayCloseSix(){
	overlaySix.classList.remove("active");
};


 /*
 document.querySelector('html').classList.remove('no-js');
      if (!window.Cypress) {
        const scrollCounter = document.querySelector('.js-scroll-counter');

        AOS.init({
          mirror: true
        });

        document.addEventListener('aos:in', function(e) {
          console.log('in!', e.detail);
        });

        window.addEventListener('scroll', function() {
          scrollCounter.innerHTML = window.pageYOffset;
        });*/