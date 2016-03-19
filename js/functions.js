// Cover variable
var $coverH
// Get height
$(window).load(function() {
  $coverH = $('.content--cover').height();
});

function slider() {
	if (document.body.scrollTop > $coverH) //Show the slider after scrolling down $coverH
		$('.navigation').addClass("navigation-switch");
	else
		$('.navigation').removeClass("navigation-switch");
}

$(window).load(function () {
	slider();
});

$(window).scroll(function () {
	slider();
});