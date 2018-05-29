$(document).ready(function() {
  addScrollListener()
  addClickListeners()
})

 var addScrollListener = () => {
	const josh = $('#greeting__josh')
	const paul = $('#greeting__paul')
  $(document).on("scroll", function() {
  	let scrollPosition = $(document).scrollTop()
  	let _css = scrollPosition + 'px'
    
    josh.css({'margin-right': _css})
    paul.css({'margin-left': _css})
  })
}


// $('#resume--skills').children().find('.resume__section')
var addClickListeners = () => {	
	const resumeSection = $('.resume__section')
  // const resumeSkills = $('#resume--skills')
  // const resumeEmployment = $('#resume--employment')
  // const resumeProjects = $('#resume--projects')
  // const resumeEducation = $('#resume--education')

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

  section.css('max-height', '200px');
}
