/*
======================================================================
				RESPONSIVE NAVBAR
======================================================================
*/

// set event listener on click on .nav-toggle
$(".nav-toggle").on("click", function () {
	// toggle active class on .nav-links
	$(".nav-links").toggleClass("active");
});
