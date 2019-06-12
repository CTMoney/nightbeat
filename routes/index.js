const db = require('../models'),
  passport = require('../passport'),
  express = require("express"),
  router = express.Router()

module.exports = (router) => {

  // registration
  router.post("/register/submit", (req, res, next) => {
    const { username, email, password } = req.body;
    req.session.username = username
    db.User.create({ username, user_email: email, password })
      .then((dbUser) => {
        db.Settings.create({ username: username })
        res.json(dbUser)
      })
      .catch(err => console.log(err))
  }),

    // login 
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
    ),

    // task submission
    router.post('/task/submit', (req, res, next) => {
      let {
        shop, url, size, keywords, amount,
        billingProfile, numberOfProxies, proxyInput,
        shopPassword, monitorDelay, retryDelay, profileName
      } = req.body

      db.Task.create({
        shop, url, size, keywords, amount,
        billingProfile, numberOfProxies, proxyInput,
        shopPassword, monitorDelay, retryDelay, profileName
      })
        .then(dbTask => {
          res.json(dbTask)
        })
        .catch(err => console.log(err))
    }),

    // proxy submission
    router.post('/proxy/submit', (req, res, next) => {
      db.Proxyz.create({ address: req.body.proxy })
        .then(dbProxy => res.json(dbProxy))
        .catch(err => console.log(err))
    }),

    // billing profile submission
    router.post('/billing/submit', (req, res, next) => {
      let { fullName, email, address, city, state, zip, cardname, cardnumber, expmonth, expyear, cvv, profileName } = req.body
      db.Billing.create({ fullName: fullName, email: email, address: address, city: city, state: state, zip: zip, cardname, ccn: cardnumber, expiry_month: expmonth, expiry_year: expyear, cvv: cvv, profile_name: profileName })
        .then(dbBilling => res.json(dbBilling))
        .catch(err => console.log(err))
    }),

    // settings update
    router.put('/settings/update', (req, res, next) => {
      let { monitor_delay, retry_delay } = req.body
      db.Settings.update({ global_monitor_delay: monitor_delay, global_retry_delay: retry_delay })
        .then(dbSettings => res.json(dbSettings))
        .catch(err => console.log(err))
    }),

    // generate webhook
    router.put('/webhook/generate', (req, res, next) => {
      let webhook = req.body
      db.Settings.update({ webhook })
        .then(dbSettings => res.json(dbSettings))
        .catch(err => console.log(err))
    }),

    // home page authentication unf
    router.get('/', passport.authenticate('local'), (req, res, next) => {
      console.log('===== user!!======')
      console.log(req.user)
      if (req.user) {
        res.json({ user: req.user })
      } else {
        res.json({ user: null })
      }
    }),

    router.get('/settings/:username', (req, res, next) => {
      console.log(req.params)
      db.User.findOne({ where: { username: req.params.username }, attributes: ['user_email', 'username', 'avatar'] })
        .then(dbUser => {
          res.json(dbUser)
        })
        .catch(err => {
          console.log("router.get called")
          console.log(err)
        })
    })
} 