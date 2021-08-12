/* global $ */

const EMPTY_TEXT_FIELD_ERR = 'Enter a '
const EMPTY_DATE_FIELD_ERR = 'Enter a valid date'
const NO_CHECKBOX_CHECKED_ERR = 'Select one or more checkboxes'
const NO_RADIO_SELECTED_ERR = 'Select an option'

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

function runValidations () {
  validateTextFields()
  validateDateFields()
  validateCheckboxesChecked()
  validateRadioButtonSelected()
}

function validateTextFields () {
  $('.govuk-input[type=text]').each(function () {
    if (!$(this).val() && !$(this).hasClass('govuk-date-input__input')) {
      const fieldName = $(this).parent().find('label').text().trim()
      addError(this, EMPTY_TEXT_FIELD_ERR + fieldName)
    } else {
      removeErrorMessages(this)
    }
  })
}

function validateDateFields () {
  $('.govuk-date-input').each(function () {
    const dateComplete = $(this).find('.govuk-date-input__input').filter(function () { return $(this).val() }).length
    const isHiddenConditional = $(this).closest('.govuk-checkboxes__conditional--hidden').length
    if (!dateComplete && !isHiddenConditional) {
      addError(this, EMPTY_DATE_FIELD_ERR)
    } else {
      removeErrorMessages(this)
    }
  })
}

function validateCheckboxesChecked () {
  const checkboxes = $('.govuk-checkboxes__input')
  if (checkboxes.length) {
    const checkboxChecked = checkboxes.filter(function () { return $(this).is(':checked') }).length
    const checkboxComponent = $('.govuk-checkboxes')
    if (!checkboxChecked) {
      addError(checkboxComponent, NO_CHECKBOX_CHECKED_ERR)
    } else {
      removeErrorMessages(checkboxComponent)
    }
  }
}

function validateRadioButtonSelected () {
  const radioGroups = $('.govuk-radios')
  if (radioGroups.length) {
    radioGroups.each(function () {
      const radioSelected = $(this).find('.govuk-radios__input').filter(function () { return $(this).is(':checked') }).length
      if (!radioSelected) {
        addError(this, NO_RADIO_SELECTED_ERR)
      } else {
        removeErrorMessages(this)
      }
    })
  }
}

function removeErrorMessages (input) {
  $('#' + input.name + '-field-error').remove()
  $('#' + input.name + '-error-link').remove()
  $(input).closest('.govuk-form-group').removeClass('govuk-form-group--error')
  $(input).closest('.govuk-fieldset').removeClass('govuk-form-group--error')
}

function addError (input, message) {
  getOrCreateErrorSummary()
  addErrorMessageToSummary(input, message)
  showErrorOnField(input, message)
}

function getFieldErrorMessage (errorMsgId, message) {
  return $('<span class="govuk-error-message"></span>').attr({ id: errorMsgId }).append($('<span class="govuk-visually-hidden">Error: </span>')).text(message)
}

function showErrorOnField (input, message) {
  const errMsgId = input.name + '-field-error'
  if (!$('#' + errMsgId).length) {
    const errorMessage = getFieldErrorMessage(errMsgId, message)
    $(input).before(errorMessage)
    if (!$(this).closest('.govuk-form.group') && !$(this).closest('.govuk-fieldset')) {
      $(input).addClass('govuk-form-group--error')
    } else if ($(input).hasClass('.govuk-checkboxes') || $(input).hasClass('.govuk-radios')) {
      $(input).closest('.govuk-fieldset').addClass('govuk-form-group--error')
    } else {
      $(input).closest('.govuk-form-group').addClass('govuk-form-group--error')
    }
  }
}

function addErrorMessageToSummary (input, message) {
  const errorMsgId = input.name + '-error-link'
  if (!$('#' + errorMsgId).length) {
    let linkId = input.id
    if ($(input).hasClass('.govuk-checkboxes')) {
      linkId = $(input).find('.govuk-checkboxes__input:first').id
    } else if ($(input).hasClass('.govuk-radios')) {
      linkId = $(input).find('.govuk-radios__input:first').id
    }
    const errorMsg = $('<li></li>').attr({ id: errorMsgId }).append($('<a>' + message + '</a>').attr({ href: '#' + linkId }).text(message))
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
