$(document).ready(function() {
  $('.js-greeting-what').click(() => {
    $('.js-hero-portfolio').addClass('transform-0')
  })
  $('.js-greeting-who').click(() => {
    $('.js-bio').addClass('transform-0')
  })
  $('.js-back').click(() => {
    $('.hero__details').removeClass('transform-0')
  })
})
