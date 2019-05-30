/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$('.address-lookup-step2').hide()

$('#find-address').on('click', function (e) {
  e.preventDefault()
  $('.address-lookup-step1').hide()
  $('.address-lookup-step2').show()
  $('.manual-address').hide()
})

$('#change-address').on('click', function (e) {
  e.preventDefault()
  $('.address-lookup-step1').show()
  $('.address-lookup-step2').hide()
  $('.manual-address').show()
  $('#address-postcode').val("")
})

$('#change-button').on('click', function (e) {
  e.preventDefault()
  $('.address-lookup-step1').hide()
  $('.address-lookup-step2').show()
  $('.manual-address').hide()
  $('#address-postcode').val("")
})
// added js
$('.navbar__list-items a').click(function (e) {
    // e.preventDefault();
    var target = $(this);
    target.parents('.navbar').find('.active').removeClass('active');
    target.parents('li').addClass('active');
    // target.parents().find('h1:first').text($(this).text());
});
