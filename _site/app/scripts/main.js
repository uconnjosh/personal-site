let headerVisible = false

$(document).ready(function() {
  addScrollListener()
  addClickListeners()
})

var addScrollListener = () => {
	const heroImg = $('#hero__image');
  $(document).on('scroll', function() {
    let scrollPercentage = $(document).scrollTop() / heroImg.height()
    let newOpacity = 1 - (scrollPercentage)

    if (scrollPercentage > .90) {
      stickyHeader()
      return
    }

    if (headerVisible) {
    	unStickHeader()
    }
    
    heroImg.css({'opacity': newOpacity})
  })
}

// TODO: refactor using position: sticky
var stickyHeader = () => {
  const hero = $('.hero')
  const headerName = $('.header__name')

  hero.css({'position': 'sticky', 'top': '-90vh'})
  headerName.css({'opacity': '1'})
  headerVisible = true
}

var unStickHeader = () => {
  const hero = $('.hero')
  const headerName = $('.header__name')

  hero.css({'position': 'relative', 'top': '0'})
  headerName.css({'opacity': '0'})
  headerVisible = false
}

var addClickListeners = () => {	
	const resumeSection = $('.resume__section')
	const resumeDetails = $('.resume__details')

  resumeSection.on('click', function() {
  	const section = $(this).find('.resume__details').first()
  	toggleResumeSection(section)
  })

  resumeDetails.on('click', function(e) {
  	e.stopPropagation()
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
