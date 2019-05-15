const db = require('../models'),
  passport = require('../passport'),
  express = require("express"),
  router = express.Router()

module.exports = (router) => {

  router.post("/register/submit", (req, res) => {
    const { username, email, password } = req.body;
    req.session.username = username
    db.User.create({ username, user_email: email, password })
      .then((dbUser) => {
        db.Settings.create()
        res.json(dbUser)
      })
      .then(db.Settings.create({}))
      .catch(err => console.log(err))
      .then(dbSettings => res.json(dbSettings))
      .catch(err => console.log(err))
  })

  router.post('/user/login', (req, res, next) => {
    next()
  },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user.username)
      const userInfo = {
        username: req.user.username
      }
      res.json(userInfo)
    }
  )

  router.post('/proxy/submit', (req, res, next) => {
    db.Proxy.create({ Address: req.body.proxy })
      .then(dbProxy => res.json(dbProxy))
      .catch(err => console.log(err))
  })

  router.post('/billing/submit', (req, res, next) => {
    let { fullName, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv, profileName } = req.body
    db.Billing.create({ fullName: fullName, email: email, address: address, city: city, state: state, zip: zip, cardname, ccn: cardnumber, expiry_month: expmonth, expiry_year: expyear, cvv: cvv, profile_name: profileName })
      .then(dbBilling => res.json(dbBilling))
      .catch(err => console.log(err))
  })

  router.put('/settings/update', (req, res, next) => {
    let { monitor_delay, retry_delay } = req.body
    db.Settings.update({ global_monitor_delay: monitor_delay, global_retry_delay: retry_delay })
      .then(dbSettings => res.json(dbSettings))
      .catch(err => console.log(err))
  })

  router.put('/settings/update', (req, res, next) => {
    let webhook = req.body
    db.Settings.update({ webhook })
      .then(dbSettings => res.json(dbSettings))
      .catch(err => console.log(err))
  })

  router.get('/', passport.authenticate('local'), (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
      res.json({ user: req.user })
    } else {
      res.json({ user: null })
    }
  })
} 