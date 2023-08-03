//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// utils (is for civil apply) it provides the location of the json file with the proceedings list
const utils = require('./utils')

// Add your routes here

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route for search proceeding list

router.get('/multiple_proceedings/v1/search', function (req, res) {
  res.render('multiple_proceedings/v1/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v1/search_2', function (req, res) {
  res.render('multiple_proceedings/v1/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v1/search_3', function (req, res) {
  res.render('multiple_proceedings/v1/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v2/search', function (req, res) {
  res.render('multiple_proceedings/v2/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v2/search_2', function (req, res) {
  res.render('multiple_proceedings/v2/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v2/search_3', function (req, res) {
  res.render('multiple_proceedings/v2/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v3/search_3', function (req, res) {
  res.render('multiple_proceedings/v3/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v3/search_3', function (req, res) {
  res.render('multiple_proceedings/v3/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/v3/search_3', function (req, res) {
  res.render('multiple_proceedings/v3/search_3',
    {
      proceedings: utils.getProceedings()
    })
})


router.get('/justin/merits/search', function (req, res) {
  res.render('justin/merits/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/justin/merits/search_JP', function (req, res) {
  res.render('justin/merits/search_JP',
    {
      proceedings: utils.getProceedingsSwag()
    })
})

router.get('/passported_v2/search', function (req, res) {
  res.render('passported_v2/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/passported_v2/search_2', function (req, res) {
  res.render('passported_v2/search_2',
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

router.get('/mp/search', function (req, res) {
  res.render('delegated_functions/v2/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/apply_for_legal_aid_prototype_non_passported_provider_means/search', function (req, res) {
  res.render('apply_for_legal_aid_prototype_non_passported_provider_means/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/proceedings_merits/search', function (req, res) {
  res.render('multiple_proceedings/proceedings_merits/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/proceedings_merits/search_2', function (req, res) {
  res.render('multiple_proceedings/proceedings_merits/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/proceedings_merits/search_3', function (req, res) {
  res.render('multiple_proceedings/proceedings_merits/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/proceedings_merits_grouped/search', function (req, res) {
  res.render('multiple_proceedings/proceedings_merits_grouped/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/proceedings_merits_grouped/search_2', function (req, res) {
  res.render('multiple_proceedings/proceedings_merits_grouped/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/proceedings_merits_grouped/search_3', function (req, res) {
  res.render('multiple_proceedings/proceedings_merits_grouped/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/df/v2/search', function (req, res) {
  res.render('multiple_proceedings/df/v2/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/df/v2/search_2', function (req, res) {
  res.render('multiple_proceedings/df/v2/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/multiple_proceedings/df/v2/search_3', function (req, res) {
  res.render('multiple_proceedings/df/v2/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/non_passported_employment/search', function (req, res) {
  res.render('non_passported_employment/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/non_passported_employment/search_2', function (req, res) {
  res.render('non_passported_employment/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/non_passported_employment/search_3', function (req, res) {
  res.render('non_passported_employment/search_3',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/non_passported_employment_v2/search', function (req, res) {
  res.render('non_passported_employment_v2/search',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/non_passported_employment_v2/search_2', function (req, res) {
  res.render('non_passported_employment_v2/search_2',
    {
      proceedings: utils.getProceedings()
    })
})

router.get('/non_passported_employment_v2/search_3', function (req, res) {
  res.render('non_passported_employment_v2/search_3',
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
  var property = req.query.property

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

// Passported property v2 - property
router.post('/passported_v2/property_amount', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/passported_v2/vehicles')
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

// Statement select
router.post('/jim/statement/split/statement_enter', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['vehicles']

  if (over18 === 'no') {
    res.redirect('/jim/statement/split/statement_enter')
  } else {
    res.redirect('/jim/statement/split/statement_upload')
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

// Non-passported - substantive yes or no
router.post('/apply_for_legal_aid_prototype_non_passported_v3/delegated_functions_confirmation', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/delegated_functions_confirmation')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/online_banking_radios')
  }
})

// Client doesn't use online banking - continue in ccms
router.post('/apply_for_legal_aid_prototype_non_passported_v3/no_online_banking_use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/no_online_banking_use_ccms')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_v3/online_banking_declaration')
  }
})

// Client doesn't use online banking - continue in ccms (Jim's miscellany)
router.post('/jim/pre_financial_assessment_flow/no_online_banking_use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/pre_financial_assessment_flow/no_online_banking_use_ccms')
  } else {
    res.redirect('/jim/pre_financial_assessment_flow/online_banking_declaration')
  }
})

// Client doesn't agree to share transactions - continue with solicitor (Jim's miscellany)
router.post('/jim/pre_financial_assessment_flow/complete_assessment_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/pre_financial_assessment_flow/complete_assessment_with_solicitor')
  } else {
    res.redirect('/jim/pre_financial_assessment_flow/bank_select_03')
  }
})

// Client doesn't agree to share transactions v2 - continue with solicitor (Jim's miscellany)
router.post('/jim/pre_financial_assessment_flow_v2/complete_assessment_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/pre_financial_assessment_flow_v2/complete_assessment_with_solicitor')
  } else {
    res.redirect('/jim/pre_financial_assessment_flow_v2/bank_select_03')
  }
})

// Client doesn't use online banking v2 - continue in ccms (Jim's miscellany)
router.post('/jim/pre_financial_assessment_flow_v2/no_online_banking_use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/pre_financial_assessment_flow_v2/no_online_banking_use_ccms')
  } else {
    res.redirect('/jim/pre_financial_assessment_flow_v2/client_agree_share')
  }
})

// Client doesn't agree to share transactions v2 - continue in ccms (Jim's miscellany)
router.post('/jim/pre_financial_assessment_flow_v2/client_not_sharing_transactions_use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/pre_financial_assessment_flow_v2/client_not_sharing_transactions_use_ccms')
  } else {
    res.redirect('/jim/pre_financial_assessment_flow_v2/online_banking_declaration')
  }
})

// Client doesn't agree to share transactions - provider completes means test
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/complete_assessment_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/complete_assessment_with_solicitor')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/bank_select_03')
  }
})

// Dependants - v4 NP flow
router.post('/passported_v2/delegated_functions_confirmation', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/passported_v2/delegated_functions_confirmation')
  } else {
    res.redirect('/passported_v2/assessment_start')
  }
})

// DF - notification more than 5 days after starting application v1
router.post('/jim/delegated_functions/notification/v1/delegated_functions_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/notification/v1/what_youre_covered_for')
  } else {
    res.redirect('/jim/delegated_functions/notification/v1/delegated_functions_2')
  }
})

// DF - notification more than 5 days after starting application v2
router.post('/jim/delegated_functions/notification/v2/late_notification', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/notification/v2/what_youre_covered_for')
  } else {
    res.redirect('/jim/delegated_functions/notification/v2/late_notification')
  }
})

// DF - notification more than 5 days after starting application v3
router.post('/jim/delegated_functions/notification/v3/delegated_functions_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/notification/v3/what_youre_covered_for')
  } else {
    res.redirect('/jim/delegated_functions/notification/v3/delegated_functions_2')
  }
})

// DF - notification more than 5 days after starting application v4
router.post('/jim/delegated_functions/notification/v4/delegated_functions_2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/delegated_functions/notification/v4/what_youre_covered_for')
  } else {
    res.redirect('/jim/delegated_functions/notification/v4/delegated_functions_2')
  }
})

// Statement of case (select upload or enter)
router.post('/jim/statement_split/statement_upload', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/statement_split/statement_upload')
  } else {
    res.redirect('/jim/statement_split/statement_enter')
  }
})

// NP client consent v1
router.post('/jim/np_edits/v1/use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/jim/np_edits/v1/use_ccms')
  } else {
    res.redirect('/jim/np_edits/v1/email_address')
  }
})

// NP client consent v1
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/use_ccms')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/substantive_application')
  }
})

// NP client consent v3
router.post('/jim/np_edits/v3/use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/jim/np_edits/v3/use_ccms')
  } else {
    res.redirect('/jim/np_edits/v3/email_address')
  }
})

// Client no income selected v1
router.post('/jim/client_no_income/v2/types_of_income_provider', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/client_no_income/v2/types_of_income_provider')
  } else {
    res.redirect('/jim/client_no_income/v2/dependants')
  }
})

// Client no income selected v2
router.post('/jim/client_no_income/v2/types_of_outgoing_provider', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/client_no_income/v2/types_of_outgoing_provider')
  } else {
    res.redirect('/jim/client_no_income/v2/property')
  }
})

// NP journey substantive yay/nay
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/delegated_functions_confirmation', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/delegated_functions_confirmation')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/check')
  }
})

// Student finance
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/types_of_outgoing', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/types_of_outgoing')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/loan_amount')
  }
})

// Dependants yay or nay
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/outgoings', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/outgoings')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/dependant_add')
  }
})

// Delete application
router.post('/stevey/dashboard/multi-delete/04_dashboard_deleted', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/stevey/dashboard/multi-delete/04_dashboard')
  } else {
    res.redirect('/stevey/dashboard/multi-delete/04_dashboard_deleted')
  }
})

// Client doesn't agree to share transactions - applicant staging
router.post('/applicant_flow/complete_assessment_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/applicant_flow/complete_assessment_with_solicitor')
  } else {
    res.redirect('/applicant_flow/bank_select')
  }
})

// Client uses online banking for other accounts (applicant staging)
router.post('/applicant_flow/types_of_income', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['otherbank']

  if (over18 === 'no') {
    res.redirect('/applicant_flow/types_of_income')
  } else {
    res.redirect('/applicant_flow/offline_current_accounts')
  }
})

// Offline current accounts (applicant staging)
router.post('/applicant_flow/complete_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['current_account']

  if (over18 === 'no') {
    res.redirect('/applicant_flow/types_of_income')
  } else {
    res.redirect('/applicant_flow/complete_with_solicitor')
  }
})

// Student finance
router.post('/applicant_flow/types_of_outgoing', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/applicant_flow/types_of_outgoing')
  } else {
    res.redirect('/applicant_flow/loan_amount')
  }
})

// Client doesn't agree to share transactions - applicant staging
router.post('/applicant_flow_tl/complete_assessment_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/applicant_flow_tl/complete_assessment_with_solicitor')
  } else {
    res.redirect('/applicant_flow_tl/bank_select')
  }
})

// Client uses online banking for other accounts (applicant staging)
router.post('/applicant_flow_tl/types_of_income', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['otherbank']

  if (over18 === 'no') {
    res.redirect('/applicant_flow_tl/types_of_income')
  } else {
    res.redirect('/applicant_flow_tl/offline_current_accounts')
  }
})

// Offline current accounts (applicant staging)
router.post('/applicant_flow_tl/complete_with_solicitor', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['current_account']

  if (over18 === 'no') {
    res.redirect('/applicant_flow_tl/types_of_income')
  } else {
    res.redirect('/applicant_flow_tl/complete_with_solicitor')
  }
})

// Student finance
router.post('/applicant_flow_tl/types_of_outgoing', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/applicant_flow_tl/types_of_outgoing')
  } else {
    res.redirect('/applicant_flow_tl/loan_amount')
  }
})

// applicant employed
router.post('/jim/applicant_employed/check', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/jim/applicant_employed/check')
  } else {
    res.redirect('/jim/applicant_employed/use_ccms_employed')
  }
})

// provider disagrees that client uses online banking / will share transactions
router.post('/jim/applicant_employed/substantive_application', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['check']

  if (over18 === 'no') {
    res.redirect('/jim/applicant_employed/use_ccms')
  } else {
    res.redirect('/jim/applicant_employed/substantive_application')
  }
})

// applicant employed DF
router.post('/jim/applicant_employed/delegated_functions', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['property']

  if (over18 === 'no') {
    res.redirect('/jim/applicant_employed/delegated_functions')
  } else {
    res.redirect('/jim/applicant_employed/what_client_must_do')
  }
})

// client employed
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/consent', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['employed']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/consent')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/use_ccms_employed')
  }
})

// Additional accounts NP
router.post('/apply_for_legal_aid_prototype_non_passported_provider_means/types_of_income', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['accounts']

  if (over18 === 'no') {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/types_of_income')
  } else {
    res.redirect('/apply_for_legal_aid_prototype_non_passported_provider_means/offline_accounts')
  }
})

// Not in scope of LASPO (PSO)
router.post('/multiple_proceedings/proceedings_merits/use_ccms_pso', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['mental']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/proceedings_merits/use_ccms_pso')
  } else {
    res.redirect('/multiple_proceedings/proceedings_merits/children_pso')
  }
})

// Not in scope of LASPO (CAO)
router.post('/multiple_proceedings/proceedings_merits/use_ccms_cao', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['laspo']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/proceedings_merits/use_ccms_cao')
  } else {
    res.redirect('/multiple_proceedings/proceedings_merits/children_cao')
  }
})

// Not in scope of LASPO (prototype 1)
router.post('/multiple_proceedings/proceedings_merits/use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/proceedings_merits/use_ccms')
  } else {
    res.redirect('/multiple_proceedings/proceedings_merits/delegated_functions_select')
  }
})

// Not in scope of LASPO (prototype 2)
router.post('/multiple_proceedings/proceedings_merits_grouped/use_ccms', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['attempts-to-settle']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/proceedings_merits_grouped/use_ccms')
  } else {
    res.redirect('/multiple_proceedings/proceedings_merits_grouped/delegated_functions')
  }
})


// DWP check fail - prototype
router.post('/non_passported_employment_v2/check_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['dwp']

  if (over18 === 'no') {
    res.redirect('/non_passported_employment_v2/check_details')
  } else {
    res.redirect('/non_passported_employment_v2/employed')
  }
})

// DWP check fail - radios provider checks details
router.post('/non_passported_employment_v2/client_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['check']

  if (over18 === 'no') {
    res.redirect('/non_passported_employment_v2/client_details')
  } else {
    res.redirect('/non_passported_employment_v2/passporting_benefit')
  }
})

// DWP check fail - use CCMS v1
router.post('/jim/dwp_check/radios/employed', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['evidence']

  if (over18 === 'no') {
    res.redirect('/jim/dwp_check/radios/employed')
  } else {
    res.redirect('/jim/dwp_check/radios/placeholder')
  }
})

// DWP check fail - use CCMS v2
router.post('/jim/dwp_check/radios/non_passported_route', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['evidence']

  if (over18 === 'no') {
    res.redirect('/jim/dwp_check/radios/non_passported_route')
  } else {
    res.redirect('/jim/dwp_check/radios/use_ccms')
  }
})

// DWP check fail - radios provider checks details
router.post('/jim/dwp_check/radios/client_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['check']

  if (over18 === 'no') {
    res.redirect('/jim/dwp_check/radios/client_details')
  } else {
    res.redirect('/jim/dwp_check/radios/benefits')
  }
})

// DWP check fail - radios provider checks details
router.post('/non_passported_employment_v2/client_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['check']

  if (over18 === 'no') {
    res.redirect('/non_passported_employment_v2/client_details')
  } else {
    res.redirect('/non_passported_employment_v2/passported_benefits')
  }
})

// DWP check fail - confirmation page provider checks details
router.post('/jim/dwp_check/confirmation/client_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['check']

  if (over18 === 'no') {
    res.redirect('/jim/dwp_check/confirmation/client_details')
  } else {
    res.redirect('/jim/dwp_check/confirmation/benefits')
  }
})

// DWP check fail - confirmation page provider checks details
router.post('/jim/dwp_check/cta/client_details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['check']

  if (over18 === 'no') {
    res.redirect('/jim/dwp_check/cta/client_details')
  } else {
    res.redirect('/jim/dwp_check/cta/benefits')
  }
})

// DF - multi proc
router.post('/multiple_proceedings/df/v3/delegated_functions_select', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['df']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/df/v3/delegated_functions_select')
  } else {
    res.redirect('/multiple_proceedings/df/v3/delegated_functions_date')
  }
})

// DF all v1
router.post('/multiple_proceedings/df/v1/delegated_functions_select', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['df']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/df/v1/delegated_functions_select')
  } else {
    res.redirect('/multiple_proceedings/df/v1/delegated_functions_date')
  }
})

// DF all v1
router.post('/multiple_proceedings/df/v2/delegated_functions_select', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['df']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/df/v2/delegated_functions_select')
  } else {
    res.redirect('/multiple_proceedings/df/v2/delegated_functions_date')
  }
})

// DF same date v1
router.post('/multiple_proceedings/df/v1/delegated_functions_date_all', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['df-date']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/df/v1/delegated_functions_date_all')
  } else {
    res.redirect('/multiple_proceedings/df/v1/what')
  }
})

// DF same date v2
router.post('/multiple_proceedings/df/v2/non_mol', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['df-date']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/df/v2/non_mol')
  } else {
    res.redirect('/multiple_proceedings/df/v2/what')
  }
})

// DF same date v2
router.post('/multiple_proceedings/df/v2/delegated_functions_date_all', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['df-date']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/df/v2/delegated_functions_date_all')
  } else {
    res.redirect('/multiple_proceedings/df/v2/what')
  }
})

// Gateway evidence required
router.post('/multiple_proceedings/gateway/v1/check_answers', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['gateway']

  if (over18 === 'no') {
    res.redirect('/multiple_proceedings/gateway/v1/check_answers')
  } else {
    res.redirect('/multiple_proceedings/gateway/v1/evidence_upload')
  }
})


// Other bank accounts - client
router.post('/jim/AP-1931/types_of_income', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['accounts']

  if (over18 === 'no') {
    res.redirect('/jim/AP-1931/types_of_income')
  } else {
    res.redirect('/jim/AP-1931/bank_select_03')
  }
})

// Other bank accounts - client
router.post('/jim/AP-1931/types_of_income', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['accounts']

  if (over18 === 'no') {
    res.redirect('/jim/AP-1931/types_of_income')
  } else {
    res.redirect('/jim/AP-1931/bank_select_03')
  }
})

// Other bank accounts - client
router.post('/open_banking_solutions/Option_2/upload', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['share']

  if (over18 === 'no') {
    res.redirect('/open_banking_solutions/Option_2/upload')
  } else {
    res.redirect('/open_banking_solutions/Option_2/email_address')
  }
})

// Other bank accounts - client
router.post('/open_banking_solutions/Option_3/upload', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['share']

  if (over18 === 'no') {
    res.redirect('/open_banking_solutions/Option_3/upload')
  } else {
    res.redirect('/open_banking_solutions/Option_3/check')
  }
})


// SECTION 8
// Using delegated functions?

router.post('/new_app_to_DWP/emergency_default', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let df = req.session.data['DF']

  if (df === 'no') {
    res.redirect('/new_app_to_DWP/substantive_default')
  } else {
    res.redirect('/new_app_to_DWP/emergency_default')
  }
})

// Using emergency default?
router.post('/new_app_to_DWP/emergency_LOS_edit', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let emergencyDefault = req.session.data['emergencydefault'];

  console.log('emergencydefault = '+ req.session.data['emergencydefault'])

  if (emergencyDefault === 'no') {
    res.redirect('/new_app_to_DWP/emergency_LOS_edit');
  } else {
    res.redirect('/new_app_to_DWP/substantive_default')
  }
})

// emergency which scopes to show
router.post('/new_app_to_DWP/emergency_LOS_FHH_scope', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let emergencyLOS = req.session.data['emergencyLOS'];

  console.log('emergencyLOS = '+ req.session.data['emergencyLOS'])

  if (emergencyLOS === 'Family help higher') {
    res.redirect('/new_app_to_DWP/emergency_LOS_FHH_scope');
  } else {
    res.redirect('/new_app_to_DWP/emergency_LOS_FR_scope')
  }
})

//substantive_edit
// Using substantive default?
router.post('/new_app_to_DWP/substantive_LOS_edit', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let substantiveDefault = req.session.data['substantivedefault'];

  console.log('substantivedefault = '+ req.session.data['substantivedefault'])

  if (substantiveDefault === 'no') {
    res.redirect('/new_app_to_DWP/substantive_LOS_edit');
  } else {
    res.redirect('/new_app_to_DWP/client_involvement_type_Non_Mol')
  }
})

// substantive which scopes to show
router.post('/new_app_to_DWP/substantive_LOS_FHH_scope', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let substantiveLOS = req.session.data['substantiveLOS'];

  console.log('substantiveLOS = '+ req.session.data['substantiveLOS'])

  if (substantiveLOS === 'Family help higher') {
    res.redirect('/new_app_to_DWP/substantive_LOS_FHH_scope');
  } else {
    res.redirect('/new_app_to_DWP/substantive_LOS_FR_scope')
  }
})

// DWP check with PARTNER - CONCEPT
// ../client_means/means_start
router.post('/partner_means/client_means/means_start', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let dwp = req.session.data['dwp'];

  console.log('dwp = '+ req.session.data['dwp'])

  if (dwp === 'no') {
    res.redirect('/partner_means/dwp_check/');
  }
  else if (dwp === 'no_partner') {
    res.redirect('/partner_means/dwp_check/check_details');
  }
  else {
    // yes //
    res.redirect('/partner_means/client_means/means_start')
  }
})

// DWP check with PARTNER
router.post('/means_financial/client_means/means_start', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let dwp = req.session.data['dwp'];

  console.log('dwp = '+ req.session.data['dwp'])

  if (dwp === 'no') {
    res.redirect('/DWP_outcomes/check_details');
  }
  else if (dwp === 'no_partner') {
    res.redirect('/DWP_outcomes/check_details_with_partner');
  }
  else {
    // yes //
    res.redirect('/partner_means/client_means/means_start')
  }
})

// does your client use online banking?
router.post('/partner_means/client_means/tlguidance', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let onlineBankingConsent = req.session.data['onlineBankingConsent'];

  console.log('onlineBankingConsent = '+ req.session.data['onlineBankingConsent'])

  if (onlineBankingConsent === 'no') {
    res.redirect('/partner_means/client_means/upload');
  }
  else {
    // yes //
    res.redirect('/partner_means/client_means/tlguidance')
  }
})

// does the partner use online banking?
router.post('/partner_means/partner_means/tlguidance', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let onlineBankingConsent = req.session.data['onlineBankingConsent'];

  console.log('onlineBankingConsent = '+ req.session.data['onlineBankingConsent'])

  if (onlineBankingConsent === 'no') {
    res.redirect('/partner_means/partner_means/upload');
  }
  else {
    // yes //
    res.redirect('/partner_means/partner_means/tlguidance')
  }
})

// Unsupported TL guidance
router.post('/jim/tl_unsupported_banks/guidance', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['onlinebank']

  if (over18 === 'no') {
    res.redirect('/jim/tl_unsupported_banks/guidance')
  } else {
    res.redirect('/jim/tl_unsupported_banks/upload')
  }
})

// Enhanced bank upload - open banking consent
router.post('/enhanced_bank_upload/online_banking_question', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let consent = req.session.data['onlineBankingConsent']

  console.log(req.session.data['onlineBankingConsent'])

  if (consent === 'no') {
    res.redirect('/enhanced_bank_upload/upload')
  } else {
    res.redirect('/enhanced_bank_upload/tlguidance')
  }
})

// Enhanced bank upload - does client receive benefits
router.post('/enhanced_bank_upload/receives_benefits', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let consent = req.session.data['benefits']

  if (consent === 'no') {
    res.redirect('/enhanced_bank_upload/add_benefit_details')
  } else {
    res.redirect('/enhanced_bank_upload/upload')
  }
})


// MULTIPLE OPPONENTS - CONCEPT
router.post('/justin/merits/opponent_name', function (req, res) {

  let myvar = req.session.data['individualororganisation']

  if (myvar === 'individual') {
    res.redirect('/justin/merits/opponent_name')
  } else {
    res.redirect('/justin/merits/opponent_organisation')
  }
})

// MULTIPLE OPPONENTS
router.post('/merits/opponent_name', function (req, res) {

  let myvar = req.session.data['individualororganisation']

  if (myvar === 'individual') {
    res.redirect('/merits/opponent_name')
  } else {
    res.redirect('/merits/opponent_organisation')
  }
})


// Merits ECCT questions
// question 01
router.post('/justin/merits/ECCT_question_02', function (req, res) {

  let myvar = req.session.data['ECCT_question_01_second_appeal']

  if (myvar === 'yes') {
    res.redirect('/justin/merits/ECCT_question_03')
  } else {
    res.redirect('/justin/merits/ECCT_question_02')
  }
})
// question 02
router.post('/justin/merits/ECCT_question_04', function (req, res) {

  let myvar = req.session.data['level_of_judge']

  if (myvar == 'HHJ' || myvar == 'J') {
    res.redirect('/justin/merits/ECCT_question_04')
  } else {
    res.redirect('/justin/merits/statement')
  }
})

// Merits questions PLF
// question 04
router.post('/justin/merits/assessment_pos_or_neg', function (req, res) {

  let myvar = req.session.data['assessed']

  if (myvar === 'yes') {
    res.redirect('/justin/merits/assessment_pos_or_neg')
  } else {
    res.redirect('/justin/merits/merits_tasklist_proceeding_1_details_added')
  }
})

// merits chances of success
router.post('/merits/merits_tasklist_proceeding_1_details_added', function (req, res) {

  let myvar = req.session.data['prospects']

  if (myvar === 'yes') {
    res.redirect('/merits/merits_tasklist_proceeding_1_details_added')
  } else {
    res.redirect('/merits/prospects_less_than_50')
  }
})

// Partner question
// question 04
router.post('/new_app_to_DWP/partner_contrary_interest', function (req, res) {

  let myvar = req.session.data['has-partner']

  if (myvar === 'yes') {
    res.redirect('/new_app_to_DWP/partner_contrary_interest')
  } else {
    res.redirect('/new_app_to_DWP/check_answers')
  }
})

router.post('/new_app_to_DWP/partner_details', function (req, res) {

  let myvar = req.session.data['has-contrary-interest']

  if (myvar === 'yes') {
    res.redirect('/new_app_to_DWP/check_answers')
  } else {
    res.redirect('/new_app_to_DWP/partner_details')
  }
})
