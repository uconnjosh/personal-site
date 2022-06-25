$(document).ready(function() {
	route()
	$('.js-greeting-what').click(function() {
		window.location.hash = 'portfolio';
	})
	$('.js-greeting-who').click(function() {
		window.location.hash = 'bio';
	})
	$('.js-back').click(function() {
		window.location.hash = '';
	})
  $(window).on('hashchange', function (e) {
  	route();
	});
	function route() {
		var hash = window.location.hash
  	
  	switch(hash) {
		  case '#portfolio':
		   	$('.js-hero-portfolio').addClass('transform-0')
		    break;
		  case '#bio':
		    $('.js-bio').addClass('transform-0')
		    break;
		  default:
		  	$('.hero__details').removeClass('transform-0')
		}
	}
})
