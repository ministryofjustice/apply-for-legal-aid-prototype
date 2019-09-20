const express = require('express')
const router = express.Router()
const utils = require('./utils')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route for search proceeding list

router.get('/search', function (req, res) {

  res.render('search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/passported_v2/search', function (req, res) {

  res.render('passported_v2/search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/non_passported_v1/search', function (req, res) {

  res.render('non_passported_v1/search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/apply_for_legal_aid_prototype/search', function (req, res) {

  res.render('apply_for_legal_aid_prototype/search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/proceeding_flow/search', function (req, res) {

  res.render('proceeding_flow/search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/limitations/search', function (req, res) {

  res.render('limitations/search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/jim/limitations/search', function (req, res) {

  res.render('jim/limitations/search',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/delegated_functions/search_notify', function (req, res) {

  res.render('delegated_functions/search_notify',
    {
      proceedings: utils.getProceedings()
    })

})

router.get('/delegated_functions/v2/search', function (req, res) {

  res.render('delegated_functions/v2/search',
    {
      proceedings: utils.getProceedings()
    })

})


// CAPITAL Branching
router.get('/capital', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)

  if (req.session.data.property === 'yes') {
    // Redirect to the relevant page
    res.redirect('/yes_holding_page')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('capital')
  }
})

router.get('/other_capital_alt', function (req, res) {

  if (req.session.data.capital === 'yes') {
    // Redirect to the relevant page
    res.redirect('/yes_holding_page')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('other_capital_alt')
  }
})


// Branching for non_passported_v1 prototype
router.get('/non_passported_v1/online_banking_declaration', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var onlinebank = req.query.onlinebank

  if (onlinebank === 'no') {
    // Redirect to the relevant page
    res.redirect('/non_passported_v1/no_online_banking')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('non_passported_v1/online_banking_declaration')
  }
})

router.get('/non_passported_v1/types_of_income', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var otherbank = req.query.otherbank

  if (otherbank === 'yes') {
    // Redirect to the relevant page
    res.redirect('/non_passported_v1/additional_accounts')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('non_passported_v1/types_of_income')
  }
})

router.get('/non_passported_v1/savings_investments', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var property= req.query.property

  if (property === 'yes') {
    // Redirect to the relevant page
    res.redirect('/non_passported_v1/yes_holding_page')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('non_passported_v1/savings_investments')
  }
})




// Vehicles provider
router.post('/jim/car_capital_questions/vehicles_costs', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/car_capital_questions/savings_investments')
  } else {
    res.redirect('/jim/car_capital_questions/vehicles_costs')
  }
})

// Vehicles provider v2 (less than 3 years ago)
router.post('/jim/car_capital_questions_v2/vehicles_regular_use', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/car_capital_questions_v2/savings_investments')
  } else {
    res.redirect('/jim/car_capital_questions_v2/vehicles_regular_use')
  }
})

// Vehicles provider v2 (regular use)
router.post('/jim/car_capital_questions_v2/vehicles_costs', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/car_capital_questions_v2/savings_investments')
  } else {
    res.redirect('/jim/car_capital_questions_v2/vehicles_costs')
  }
})

// Vehicles applicant
router.post('/jim/citizen_car_capital_questions/vehicles_costs', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/citizen_car_capital_questions/savings_investments')
  } else {
    res.redirect('/jim/citizen_car_capital_questions/vehicles_costs')
  }
})



// Prospects of success (Jim's prototype)
router.post('/jim/prospects_of_success/prospects_less_than_50', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['vehicles']

  if (over18 === 'no') {
    res.redirect('/jim/prospects_of_success/prospects_less_than_50')
  } else {
    res.redirect('/jim/prospects_of_success/declaration')
  }
})

// Prospects of success (Non passported)
router.post('/non_passported_v1/prospects_less_than_50', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['vehicles']

  if (over18 === 'no') {
    res.redirect('/non_passported_v1/prospects_less_than_50')
  } else {
    res.redirect('/non_passported_v1/check_answers_merits')
  }
})


// Prospects of success (Passported v2)
router.post('/passported_v2/prospects_less_than_50', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['vehicles']

  if (over18 === 'no') {
    res.redirect('/passported_v2/prospects_less_than_50')
  } else {
    res.redirect('/passported_v2/check_answers_merits')
  }
})

// Statement of case (select upload or enter)
router.post('/jim/statement_split/statement_upload', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/statement_split/statement_enter')
  } else {
    res.redirect('/jim/statement_split/statement_upload')
  }
})


// Passported property v2 - property
router.post('/passported_v2/property_amount', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/passported_v2/savings_investments_select')
  } else {
    res.redirect('/passported_v2/property_amount')
  }
})

// Dependants
router.post('/jim/dependants/dependant_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/jim/dependants/types_of_outgoing')
  } else {
    res.redirect('/jim/dependants/dependant_details')
  }
})


// Delegated functions - continue with full application or come back later
router.post('/jim/delegated_functions/confirmation_page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/confirmation_page')
  } else {
    res.redirect('/jim/delegated_functions/other_bank_radios')
  }
})

// Delegated functions - continue with full application or come back later
router.post('/jim/delegated_functions/confirmation_page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/confirmation_page')
  } else {
    res.redirect('/jim/delegated_functions/other_bank_radios')
  }
})

// Delegated functions - continue with full application or come back later
router.post('/jim/delegated_functions/confirmation_page', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/confirmation_page')
  } else {
    res.redirect('/jim/delegated_functions/other_bank_radios')
  }
})

// Vehicles non-passported v3
router.post('/apply_for_legal_aid_prototype_non_passported_v3/vehicles_costs', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/savings_investments_select')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/vehicles_costs')
  }
})

// Prospects of success (Passported v2)
router.post('/apply_for_legal_aid_prototype_non_passported_v3/prospects_less_than_50', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['vehicles']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/prospects_less_than_50')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/check_answers_merits')
  }
})

// Provider office select
router.post('/jim/office_select/office', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/office_select/office')
  } else {
    res.redirect('/jim/office_select/dashboard')
  }
})

// Provider office select
router.post('/jim/office_select/v2/office', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/office_select//v2/office')
  } else {
    res.redirect('/jim/office_select//v2/dashboard')
  }
})



// Add your routes here - above the module.exports line
module.exports = router
