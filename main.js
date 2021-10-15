/*
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
	triggerElement: "#section2"
})
// animate color and top border in relation to scroll position
.setTween("#bg img", {
	maxWidth: "1200px",
	top: "30%",
	left: "80%",
	opacity: 0.25
}) // the tween durtion can be omitted and defaults to 1
// .addIndicators({ name: "2 (duration: 100)" }) // add indicators (requires plugin)
.addTo(controller);






// Tween - Section 3
var scene = new ScrollMagic.Scene({
	triggerElement: "#section3",
	duration: 300
})

// animate color and top border in relation to scroll position
.setTween("#bg img", {
	top: "20%"
}) // the tween duration can be omitted and defaults to 1

// Add indicators (required plugin)
.addTo(controller);

/*gsap.to("h1", {x: 350, fill: "white", duration:3});
gsap.to("h1", {y:5, x:10, rotation:360, duration:3});

//gsap.to(".star", {x:750, duration:3});
//gsap.to(".star", {x:750, scale:2, rotation:360, fill:"red", duration:8});

gsap.to(".star", {x:350, y:200, rotation:360, scale:3, duration:4});
//gsap.from(".starTwo", {x:400, y:300, rotation:360, scale:3, duration:2, repeat: -1, yoyo:true});

gsap.fromTo(".pra", {x:700, y: 500, opacity: 0},{x:150, y: 100, opacity: 1, duration: 2, delay: 3});*/

