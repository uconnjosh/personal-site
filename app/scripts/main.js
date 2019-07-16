$(document).ready(function() {
  $('.js-greeting-who').mouseover(() => {
    $('.hero').addClass('hover-who')
  })
  $('.js-greeting-who').mouseout(() => {
    $('.hero').removeClass('hover-who')
  })
})
