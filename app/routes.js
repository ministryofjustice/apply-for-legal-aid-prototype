const express = require('express')
const router = express.Router()
const utils = require('./utils')

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route for search proceeding

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


// Branching
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

router.get('/non_passported_v1/income_start', function (req, res) {
  // Get the answer from the query string (eg. ?over18=false)
  var otherbank = req.query.otherbank

  if (otherbank === 'yes') {
    // Redirect to the relevant page
    res.redirect('/non_passported_v1/additional_accounts')
  } else {
    // If over18 is any other value (or is missing) render the page requested
    res.render('non_passported_v1/income_start')
  }
})


// Add your routes here - above the module.exports line
module.exports = router
