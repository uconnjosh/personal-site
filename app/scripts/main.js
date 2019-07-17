$(document).ready(function() {
  $('.js-greeting-who').mouseover(() => {
    $('.hero__about').addClass('hover-who')
  })
  $('.js-greeting-who').mouseout(() => {
    $('.hero__about').removeClass('hover-who')
  })
  $('.js-greeting-what').click(() => {
    $('.hero').addClass('portfolio-open')
  })
  $('.js-portfolio-tile').mouseover(() => {
    $('.hero__portfolio').addClass('preview-open')
  })

})
