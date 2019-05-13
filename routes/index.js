const db = require('../models'),
  passport = require('../passport')

module.exports = app => {

  app.post("/register/submit", (req, res) => {
    const { username, email, password } = req.body;
    req.session.username = username
    db.User.create({ username, user_email: email, password })
      .then((dbUser) => { res.json(dbUser) })
      .then(
        db.Settings.create({

        })
      )
      .catch(err => console.log(err))
  })

  app.post('/user/login', (req, res, next) => { next() },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user.username)
      const userInfo = {
        username: req.user.username
      }
      res.send(userInfo)
    })

  app.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
      res.json({ user: req.user })
    } else {
      res.json({ user: null })
    }
  })
} 