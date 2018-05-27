$(document).ready(function() {
  addScrollListener()
})

function addScrollListener() {
	var josh = $('#greeting__josh');
	var paul = $('#greeting__paul');
  $(document).on("scroll", function() {
  	var scrollPosition = $(document).scrollTop()
  	var _css = scrollPosition + 'px'
  	console.log(_css);
    josh.css({'margin-right': _css})
    paul.css({'margin-left': _css})
  })
}
