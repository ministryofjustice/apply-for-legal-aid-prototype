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




// Vehicles
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


// Add your routes here - above the module.exports line
module.exports = router
