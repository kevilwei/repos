$(function() {
	$(".slidetabs").tabs(".images > div", {
		// enable "cross-fading" effect
		effect : 'fade',
		fadeOutSpeed : "fast",
		// start from the beginning after the last tab
		rotate : true
	// use the slideshow plugin. It accepts its own configuration
	}).slideshow();
	$(".slidetabs").data("slideshow").play();
});

function setTab(name, show, n) {
	for (i = 1; i <= n; i++) {
		// alert("name:"+name+";show:"+show+";n:"+n);
		var tab = document.getElementById(name + "s" + i);
		var cntx = document.getElementById(name + i);
		tab.className = ((i == show) ? "hover" : "");
		cntx.style.display = ((i == show) ? "block" : "none");
	}
}

function setTab2(name, show, n) {
	for (i = 1; i <= n; i++) {
		// alert("name:"+name+";show:"+show+";n:"+n);
		var tab = document.getElementById(name + "s" + i);
		var cntx = document.getElementById(name + i);
		tab.className = ((i == show) ? "p_tab_act" : "p_tab");
		cntx.style.display = ((i == show) ? "block" : "none");
	}
}

//$('.slider').unslider({
//	arrows : true,
//	fluid : true,
//	dots : true
//});
//$('.products').unslider({
//	arrows : true,
//	fluid : true
//// ,
//// dots : true
//}
//
//)
//
//// Find any element starting with a # in the URL
//// And listen to any click events it fires
//$('a[href^="#"]').click(function() {
//	// Find the target element
//	var target = $($(this).attr('href'));
//	// And get its position
//	var pos = target.offset(); // fallback to scrolling to top || {left: 0,
//	// top: 0};
//	// jQuery will return false if there's no element
//	// and your code will throw errors if it tries to do .offset().left;
//	if (pos) {
//		// Scroll the page
//		$('html, body').animate({
//			scrollTop : pos.top,
//			scrollLeft : pos.left
//		}, 1000);
//	}
//
//	// Don't let them visit the url, we'll scroll you there
//	return false;
//});
//var GoSquared = {
//	acct : 'GSN-396664-U'
//};