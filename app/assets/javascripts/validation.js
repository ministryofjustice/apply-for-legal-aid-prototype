/* global $ */

$(document).ready(() => {
  $('button[type=submit]').on('click', (e) => {
    e.preventDefault()
    runValidations()
    if (!$('.govuk-error-summary__list').children().length) {
      $('.govuk-error-summary').remove()
      $('form').submit()
    }
  })
})

const EMPTY_ERROR_MESSAGE = 'Enter a valid '

function runValidations () {
  $('.govuk-input').each(function () {
    if ($(this).hasClass('govuk-date-input__input')) {
      validateDateField(this)
    } else {
      validateTextField(this)
    }
  })
}

function validateTextField (input) {
  const fieldName = $(input).parent().find('label').text().trim()
  if (!$(input).val()) {
    const message = EMPTY_ERROR_MESSAGE + fieldName
    addError(input, message)
  } else {
    removeErrorMessages(input)
  }
}

// TODO in future - add more types of validation
function validateDateField (input) {
  // const dateInputs = $('.govuk-date-input')
}

function removeErrorMessages (input) {
  $('#' + input.name + '-field-error').remove()
  $('#' + input.name + '-error-link').remove()
  $(input).closest('.govuk-fieldset').closest('.govuk-form-group').removeClass('govuk-form-group--error')
}

function addError (input, message) {
  getOrCreateErrorSummary()
  addErrorMessageToSummary(input, message)
  showErrorOnField(input, message)
}

function showErrorOnField (input, message) {
  const errMsgId = input.name + '-field-error'
  if (!$('#' + errMsgId).length) {
    const errorMessage = $('<span class="govuk-error-message"></span>').attr({ id: errMsgId }).append($('<span class="govuk-visually-hidden">Error: </span>')).text(message)
    $(input).before(errorMessage)
    $(input).closest('.govuk-fieldset').closest('.govuk-form-group').addClass('govuk-form-group--error')
  }
}

function addErrorMessageToSummary (input, message) {
  const errorMsgId = input.name + '-error-link'
  if (!$('#' + errorMsgId).length) {
    const errorMsg = $('<li></li>').attr({ id: errorMsgId }).append($('<a>' + message + '</a>').attr({ href: '#' + input.id }).text(message))
    $('.govuk-error-summary__list').append(errorMsg)
  }
}

function getOrCreateErrorSummary () {
  const errorSummary = $('.govuk-error-summary')
  if (!errorSummary.length) {
    const errorSummary = $(
      '<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary">\n' +
      '  <h2 class="govuk-error-summary__title" id="error-summary-title">\n' +
      '    There is a problem\n' +
      '  </h2>\n' +
      '  <div class="govuk-error-summary__body">\n' +
      '    <ul class="govuk-list govuk-error-summary__list">\n' +
      '    </ul>\n' +
      '  </div>\n' +
      '</div>'
    )
    $('h1').before(errorSummary)
    errorSummary.focus()
  }
}
