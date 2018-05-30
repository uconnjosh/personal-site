$(document).ready(function() {
  addScrollListener()
  addClickListeners()
})

var addScrollListener = () => {
	const heroImg = $('#hero__image');
  $(document).on("scroll", function() {
    let scrollPosition = $(document).scrollTop()
    let newOpacity = 1 - (scrollPosition / 700)
    
    heroImg.css({'opacity': newOpacity})
  })
}

var addClickListeners = () => {	
	const resumeSection = $('.resume__section')

  resumeSection.on('click', function() {
  	const section = $(this).find('.resume__details').first()
  	toggleResumeSection(section)
  })
}

var toggleResumeSection = (section) => {
	// TODO: hold state in an object to make this logic more stable
	if (section.css('max-height') != '0px') {
	  section.css('max-height', '0')
	  return	
	}

  section.css('max-height', '1000px');
}
